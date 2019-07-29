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

package com.example.ospreytv.models

import java.io.Serializable

/**
 * Show class represents video entity with title, description, image thumbs and video url.
 */
data class Show(
    var id: Int? = null,
    var title: String? = null,
    var description: String? = null,
    var imageUrl: String? = null,
    var year: String? = null,
    var genre: String? = null,
    var time: String? = null,
    var date: String? = null
) : Serializable {

    override fun toString(): String {
        return "Show{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", imageUrl='" + imageUrl + '\'' +
                ", genre='" + genre + '\'' +
                '}'
    }

    companion object {
        internal const val serialVersionUID = 727566175075960653L
    }
}
