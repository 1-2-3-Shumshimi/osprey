package com.example.ospreytv.views

import android.content.Context
import android.graphics.drawable.Drawable
import androidx.leanback.widget.BaseCardView
import android.view.LayoutInflater
import android.widget.ImageView
import android.widget.TextView
import com.example.ospreytv.R


class PartyCardView(context: Context) : BaseCardView(context, null) {
    lateinit var imageView: ImageView
    lateinit var titleView: TextView
    lateinit var dateView: TextView
    lateinit var timeView: TextView

    init {
        buildCardView()
    }

    private fun buildCardView() {
        // Make sure this view is clickable and focusable
        setClickable(true)
        setFocusable(true)
        setFocusableInTouchMode(true)

        val inflater = LayoutInflater.from(context)
        inflater.inflate(R.layout.party_card, this)

        imageView = findViewById(R.id.card_image)
        titleView = findViewById(R.id.title_text)
        dateView = findViewById(R.id.date)
        timeView = findViewById(R.id.time)
    }
}