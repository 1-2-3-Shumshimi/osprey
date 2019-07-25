package com.example.ospreytv.models.backend

import com.google.gson.annotations.SerializedName

data class PartiesResponse(
    @SerializedName("date") val data: String,
    @SerializedName("id") val id: Int,
    @SerializedName("show_id") val showId: Int,
    @SerializedName("time") val time: String
    )
