package com.example.ospreytv.data

import com.example.ospreytv.models.Party
import com.example.ospreytv.models.Show
import com.example.ospreytv.models.backend.PartiesResponse

object WatchPartyList {
    private var partyList =  ArrayList<Party>()
    private var partyShowList =  ArrayList<Show>()
    val MONTH = arrayOf(
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    )

    fun setupPartyList(list: List<PartiesResponse>): ArrayList<Party>{
        for(party in list){
            partyList.add(Party(party.id, party.showId, party.date, party.time))
        }
        return partyList
    }


    val list: List<Show> by lazy {
        getSortedParties()
    }

    private fun getSortedParties(): List<Show> {
        val showList = ShowList.LIST
        for(party in partyList) {
            for (i in 0 until showList.size) {
                if (showList[i].id == party.showID) {
                    showList[i].time = party.time
                    showList[i].date = party.date
                    partyShowList.add(showList[i])
                }
            }
        }
        partyShowList.add(Show(99999, "SEE ALL", "See All Watch Parties", "https://3alnet.com/bundles/_themes/dp/3alnet-theme/dpproductimport/images/see-all.jpg", null, null, null, "0"))
        partyShowList.sortBy { it.date!!.split("/")[0].toInt() }

        return partyShowList
    }

}