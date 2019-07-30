package com.example.ospreytv.fragments

import android.content.Intent
import android.graphics.drawable.Drawable
import android.os.Bundle
import android.os.Handler
import android.util.DisplayMetrics
import android.util.Log
import android.widget.Toast
import androidx.core.app.ActivityOptionsCompat
import androidx.core.content.ContextCompat
import androidx.leanback.app.BackgroundManager
import androidx.leanback.app.BrowseFragment
import androidx.leanback.widget.*
import com.bumptech.glide.Glide
import com.bumptech.glide.load.resource.drawable.GlideDrawable
import com.bumptech.glide.request.animation.GlideAnimation
import com.bumptech.glide.request.target.SimpleTarget
import com.example.ospreytv.viewPresenters.CardPresenter
import com.example.ospreytv.models.Show
import com.example.ospreytv.R
import com.example.ospreytv.activities.BrowseErrorActivity
import com.example.ospreytv.activities.DetailsActivity
import com.example.ospreytv.activities.WatchPartyScheduleActivity
import com.example.ospreytv.data.WatchPartyList
import com.example.ospreytv.viewPresenters.PartyCardPresenter
import java.util.*

class WatchPartyScheduleFragment: BrowseFragment(){
    private val mHandler = Handler()
    private lateinit var mBackgroundManager: BackgroundManager
    private var mDefaultBackground: Drawable? = null
    private lateinit var mMetrics: DisplayMetrics
    private var mBackgroundTimer: Timer? = null
    private var mBackgroundUri: String? = null
    val rowsAdapter = ArrayObjectAdapter(ListRowPresenter())

    override fun onActivityCreated(savedInstanceState: Bundle?) {
        Log.i(TAG, "onCreate")
        super.onActivityCreated(savedInstanceState)

        prepareBackgroundManager()

        setupUIElements()

        loadRows()

        setupEventListeners()
    }

    override fun onDestroy() {
        super.onDestroy()
        Log.d(TAG, "onDestroy: " + mBackgroundTimer?.toString())
        mBackgroundTimer?.cancel()
    }

    private fun loadRows(monthlyList: List<Show>){
        //todo will need to reload rows for each month or something idk
        val partyCardPresenter = PartyCardPresenter()
        val listRowAdapter = ArrayObjectAdapter(partyCardPresenter)

        for (j in 0 until monthlyList.size) {
            listRowAdapter.add(monthlyList[j])
        }

        val month = monthlyList[0].date!!.split("/")[0]
        val monthInt  = month as Int
        val hostHeader = HeaderItem(0, WatchPartyList.MONTH[monthInt-1])
        rowsAdapter.add(ListRow(hostHeader, listRowAdapter))

        adapter = rowsAdapter
    }

    private fun setupUIElements() {
        title = getString(R.string.browse_title)
        // over title
        headersState = BrowseFragment.HEADERS_ENABLED
        isHeadersTransitionOnBackEnabled = true

        // set fastLane (or headers) background color
        brandColor = ContextCompat.getColor(activity, R.color.fastlane_background)
    }

    private fun setupEventListeners() {
        onItemViewClickedListener = ItemViewClickedListener()
        onItemViewSelectedListener = ItemViewSelectedListener()
    }

    private inner class ItemViewClickedListener : OnItemViewClickedListener {
        override fun onItemClicked(
            itemViewHolder: Presenter.ViewHolder,
            item: Any,
            rowViewHolder: RowPresenter.ViewHolder,
            row: Row
        ) {
            if (item is Show) {
                    Log.d(TAG, "Item: $item")
                    val intent = Intent(activity, DetailsActivity::class.java)
                    intent.putExtra(DetailsActivity.MOVIE, item)

                    val bundle = ActivityOptionsCompat.makeSceneTransitionAnimation(
                        activity,
                        (itemViewHolder.view as ImageCardView).mainImageView,
                        DetailsActivity.SHARED_ELEMENT_NAME
                    )
                        .toBundle()
                    activity.startActivity(intent, bundle)
            }
        }
    }


    private inner class ItemViewSelectedListener : OnItemViewSelectedListener {
        override fun onItemSelected(
            itemViewHolder: Presenter.ViewHolder?, item: Any?,
            rowViewHolder: RowPresenter.ViewHolder, row: Row
        ) {
            if (item is Show) {
                mBackgroundUri = item.imageUrl
                startBackgroundTimer()
            }
        }
    }

    private fun updateBackground(uri: String?) {
        val width = mMetrics.widthPixels
        val height = mMetrics.heightPixels
        Glide.with(activity)
            .load(uri)
            .centerCrop()
            .error(mDefaultBackground)
            .into<SimpleTarget<GlideDrawable>>(
                object : SimpleTarget<GlideDrawable>(width, height) {
                    override fun onResourceReady(
                        resource: GlideDrawable,
                        glideAnimation: GlideAnimation<in GlideDrawable>
                    ) {
                        mBackgroundManager.drawable = resource
                    }
                })
        mBackgroundTimer?.cancel()
    }

    private fun prepareBackgroundManager() {

        mBackgroundManager = BackgroundManager.getInstance(activity)
        mBackgroundManager.attach(activity.window)
        mDefaultBackground = ContextCompat.getDrawable(activity, R.drawable.default_background)
        mMetrics = DisplayMetrics()
        activity.windowManager.defaultDisplay.getMetrics(mMetrics)
    }

    private fun startBackgroundTimer() {
        mBackgroundTimer?.cancel()
        mBackgroundTimer = Timer()
        mBackgroundTimer?.schedule(UpdateBackgroundTask(), BACKGROUND_UPDATE_DELAY.toLong())
    }

    private inner class UpdateBackgroundTask : TimerTask() {

        override fun run() {
            mHandler.post { updateBackground(mBackgroundUri) }
        }
    }

    companion object {
        private val TAG = "WatchPartyFragment"

        private val BACKGROUND_UPDATE_DELAY = 300
        private val GRID_ITEM_WIDTH = 200
        private val GRID_ITEM_HEIGHT = 200
        private val NUM_ROWS = 2
        private val NUM_COLS = 6
    }

}