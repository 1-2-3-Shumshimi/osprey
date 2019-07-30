package com.example.ospreytv.viewPresenters

import android.graphics.drawable.Drawable
import android.util.Log
import android.view.ViewGroup
import android.widget.ImageView
import androidx.core.content.ContextCompat
import androidx.leanback.widget.Presenter
import com.bumptech.glide.Glide
import com.example.ospreytv.R
import com.example.ospreytv.models.Show
import com.example.ospreytv.views.PartyCardView
import kotlin.properties.Delegates


/**
 * This Presenter is used to display the characters card row in the DetailView examples.
 */
class PartyCardPresenter : Presenter() {
    private var mDefaultCardImage: Drawable? = null
    private var sSelectedBackgroundColor: Int by Delegates.notNull()
    private var sDefaultBackgroundColor: Int by Delegates.notNull()

    override fun onCreateViewHolder(parent: ViewGroup): ViewHolder {
        Log.d(TAG, "onCreateViewHolder")

        sDefaultBackgroundColor = ContextCompat.getColor(
            parent.context,
            R.color.default_background
        )
        sSelectedBackgroundColor = ContextCompat.getColor(
            parent.context,
            R.color.selected_background
        )
        mDefaultCardImage = ContextCompat.getDrawable(parent.context, R.drawable.movie)

        val cardView = PartyCardView(parent.context)

        cardView.isFocusable = true
        cardView.isFocusableInTouchMode = true
        updateCardBackgroundColor(cardView.imageView, false)
        return ViewHolder(cardView)
    }

    override fun onBindViewHolder(viewHolder: ViewHolder, item: Any) {
        val show = item as Show
        val cardView = viewHolder.view as PartyCardView

        Log.d(TAG, "onBindViewHolder")
        if (show.imageUrl != null) {
            cardView.titleView.text = show.title
            cardView.dateView.text = show.date
            cardView.timeView.text = show.time

            Glide.with(viewHolder.view.context)
                .load(show.imageUrl)
                .centerCrop()
                .error(mDefaultCardImage)
                .into(cardView.imageView)
        }
    }

    override fun onUnbindViewHolder(viewHolder: ViewHolder) {
        Log.d(TAG, "onUnbindViewHolder")
        val cardView = viewHolder.view as PartyCardView
        // Remove references to images so that the garbage collector can free up memory
//        cardView.badgeImage = null
//        cardView.mainImage = null
    }

    private fun updateCardBackgroundColor(view: ImageView, selected: Boolean) {
        val color = if (selected) sSelectedBackgroundColor else sDefaultBackgroundColor
        // Both background colors should be set because the view's background is temporarily visible
        // during animations.
        view.setBackgroundColor(color)
    }

    companion object {
        private val TAG = "PartyCardPresenter"

        private val CARD_WIDTH = 313
        private val CARD_HEIGHT = 176
    }
}