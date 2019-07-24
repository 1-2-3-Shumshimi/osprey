package com.example.ospreytv.services

import com.example.ospreytv.models.backend.PartiesResponse
import com.example.ospreytv.models.backend.ShowsResponse
import retrofit2.Call
import retrofit2.http.GET

interface OspreyService {

    @GET("shows.json")
    fun getShows():Call<ShowsResponse>

    @GET("parties.json")
    fun getParties(): Call<PartiesResponse>
}