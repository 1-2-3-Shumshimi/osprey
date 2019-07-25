package com.example.ospreytv.services

import android.content.Context
import android.util.Log
import com.example.ospreytv.R
import com.example.ospreytv.models.backend.PartiesResponse
import com.example.ospreytv.models.backend.ShowsResponse
import okhttp3.CookieJar
import okhttp3.Interceptor
import okhttp3.OkHttpClient
import okhttp3.Response
import retrofit2.Call
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import retrofit2.http.GET

interface OspreyService {

    @GET("shows.json")
    fun getShows():Call<List<ShowsResponse>>

    @GET("parties.json")
    fun getParties(): Call<List<PartiesResponse>>

    companion object {
        @Volatile
        private var instance: OspreyService? = null

        operator fun invoke(context: Context): OspreyService {
            return instance ?: synchronized(this) {
                instance
                    ?: buildClient(context).also { instance = it }
            }
        }

        private fun buildClient(context: Context): OspreyService {
            val okHttpClient = OkHttpClient()
                .newBuilder()
                .addInterceptor(HeadersInterceptor())
                .build()

            return Retrofit.Builder()
                .addConverterFactory(GsonConverterFactory.create())
                .client(okHttpClient)
                .baseUrl(context.getString(R.string.OsperyUrl))
                .build()
                .create(OspreyService::class.java)
        }
    }

    class HeadersInterceptor : Interceptor {

        override fun intercept(chain: Interceptor.Chain): Response {
            var request = chain.request()
            request = request.newBuilder()
                .addHeader("Content-Type", "application/json")
                .build()
            return chain.proceed(request)
        }

    }


}