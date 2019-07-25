package com.example.ospreytv.data

import com.example.ospreytv.models.Party
import com.example.ospreytv.models.backend.PartiesResponse

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

object WatchPartyList {
    private var partyList =  ArrayList<Party>()
    val MOVIE_CATEGORY = arrayOf(
        "Watch Parties"
    )

    fun setupPartyList(list: List<PartiesResponse>){
        println("HERE $list")
        for(party in list){
            partyList.add(Party(party.id, party.showId, party.data, party.time))
        }
    }


    val list: List<Party> by lazy {
        getParties()
    }

    private fun getParties(): List<Party> {
        return partyList
    }

}