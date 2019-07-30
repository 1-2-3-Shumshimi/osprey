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

package com.example.ospreytv.data

import com.example.ospreytv.models.Show
import com.example.ospreytv.models.backend.ShowsResponse

object ShowList {

    private var showList =  ArrayList<Show>()
    val MOVIE_CATEGORY = arrayOf(
        "Browse",
        "Watch Parties"
    )

    fun setupShowList(list: List<ShowsResponse>){
        for(show in list){
            showList.add(Show(show.id, show.title, show.description, show.imageUrl, show.year, show.genre))
        }
    }

    val LIST: List<Show> by lazy {
        setupShows()
    }

    private fun setupShows(): List<Show> {
        return showList
    }

}