package com.example.ospreytv.views

import android.content.Context
import androidx.leanback.widget.BaseCardView
import android.view.View.OnFocusChangeListener
import android.view.LayoutInflater
import android.widget.ImageView
import android.graphics.BitmapFactory
import android.widget.FrameLayout
import android.widget.TextView
import com.example.ospreytv.R

class PartyCardView(context: Context) : BaseCardView(context, null, R.style.CharacterCardStyle) {

    init {
        LayoutInflater.from(getContext()).inflate(R.layout.party_card, this)
        onFocusChangeListener = OnFocusChangeListener { v, hasFocus ->
            val mainImage = findViewById<ImageView>(R.id.main_image)
            val container = findViewById<FrameLayout>(R.id.container)
            if (hasFocus) {
                container.setBackgroundResource(R.drawable.character_focused)
                mainImage.setBackgroundResource(R.drawable.character_focused)
            } else {
                container.setBackgroundResource(R.drawable.character_not_focused_padding)
                mainImage.setBackgroundResource(R.drawable.character_not_focused)
            }
        }
        isFocusable = true
    }

    fun updateUi(card: Card) {
        val primaryText = findViewById<TextView>(R.id.primary_text)
        val imageView = findViewById<ImageView>(R.id.main_image)

        primaryText.setText(card.getTitle())
        if (card.getLocalImageResourceName() != null) {
            val resourceId = card.getLocalImageResourceId(context)
            val bitmap = BitmapFactory
                .decodeResource(context.resources, resourceId)
            val drawable = RoundedBitmapDrawableFactory.create(context.resources, bitmap)
            drawable.setAntiAlias(true)
            drawable.setCornerRadius(Math.max(bitmap.width, bitmap.height) / 2.0f)
            imageView.setImageDrawable(drawable)
        }
    }


}