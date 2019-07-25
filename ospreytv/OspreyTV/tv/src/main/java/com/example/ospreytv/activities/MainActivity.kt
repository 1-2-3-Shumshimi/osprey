/*
 * Copyright (C) 2017 The Android Open Source Project
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */

package com.example.ospreytv.activities

import android.app.Activity
import android.content.Intent
import android.os.Bundle
import androidx.localbroadcastmanager.content.LocalBroadcastManager
import com.example.ospreytv.R
import com.example.ospreytv.data.ShowList
import com.example.ospreytv.data.WatchPartyList
import com.example.ospreytv.fragments.MainFragment
import com.example.ospreytv.models.backend.PartiesResponse
import com.example.ospreytv.models.backend.ShowsResponse
import com.example.ospreytv.services.OspreyService
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response

/**
 * Loads [MainFragment].
 */
class MainActivity : Activity() {
    private lateinit var service: OspreyService

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        service = OspreyService.invoke(applicationContext)
        getPartiesAPI({ setPartiesList(it) }, { println("Failed to get parties $it") })
        getShowsAPI({ setShowsList(it) }, { println("Failed to get shows $it") })
    }

    private fun setPartiesList(partiesResponse: List<PartiesResponse>){
        WatchPartyList.setupPartyList(partiesResponse)
        //updateListView("party")
    }

    private fun setShowsList(showsResponse: List<ShowsResponse>){
        ShowList.setupShowList(showsResponse)
        updateListView("show")
    }


    private fun getPartiesAPI(successCallback: (response: List<PartiesResponse>) -> Unit, failureCallback: (response: String) -> Unit){
        service.getParties().enqueue(object: Callback<List<PartiesResponse>> {
            override fun onFailure(call: Call<List<PartiesResponse>>, t: Throwable) {
                failureCallback(t.toString())
            }

            override fun onResponse(call: Call<List<PartiesResponse>>, response: Response<List<PartiesResponse>>) {
                if(response.body() != null  && response.isSuccessful){
                    successCallback(response.body()!!)
                } else {
                    failureCallback(response.errorBody().toString())
                }
            }
        })
    }

    private fun getShowsAPI(successCallback: (response: List<ShowsResponse>) -> Unit, failureCallback: (response: String) -> Unit){
        service.getShows().enqueue(object: Callback<List<ShowsResponse>> {
            override fun onFailure(call: Call<List<ShowsResponse>>, t: Throwable) {
                failureCallback(t.toString())
            }

            override fun onResponse(call: Call<List<ShowsResponse>>, response: Response<List<ShowsResponse>>) {
                if(response.body() != null  && response.isSuccessful){
                    successCallback(response.body()!!)
                } else {
                    failureCallback(response.errorBody().toString())
                }
            }
        })
    }

    private fun updateListView(event: String){
        val intent = Intent("UpdateView")
        intent.putExtra("Event", event)
        LocalBroadcastManager.getInstance(this).sendBroadcast(intent)
    }

}
