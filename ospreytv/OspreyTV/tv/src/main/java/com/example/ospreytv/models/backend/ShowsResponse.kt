package com.example.ospreytv.models.backend

import com.google.gson.annotations.SerializedName

data class ShowsResponse (
    @SerializedName("description") val description: String,
    @SerializedName("genre") val genre: String,
    @SerializedName("id") val id: Int,
    @SerializedName("image") val imageUrl: String,
    @SerializedName("title") val title: String,
    @SerializedName("year") val year: String

)