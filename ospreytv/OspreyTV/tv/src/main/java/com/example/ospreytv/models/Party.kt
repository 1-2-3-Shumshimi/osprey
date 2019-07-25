package com.example.ospreytv.models

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
import java.io.Serializable

/**
 * Show class represents video entity with title, description, image thumbs and video url.
 */
data class Party(
    var id: Int? = null,
    var showID: Int? = null,
    var date: String? = null,
    var time: String? = null
) : Serializable {

    override fun toString(): String {
        return "Party: ID: $id, Show Id: $showID, Date: $date, Time: $time"
    }

    companion object {
        internal const val serialVersionUID = 727566175075960653L
    }
}
