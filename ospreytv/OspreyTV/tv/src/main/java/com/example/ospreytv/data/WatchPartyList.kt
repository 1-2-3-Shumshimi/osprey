package com.example.ospreytv.data

import com.example.ospreytv.models.Party
import com.example.ospreytv.models.Show
import com.example.ospreytv.models.backend.PartiesResponse

object WatchPartyList {
    private var partyList =  ArrayList<Party>()
    private var partyShowList =  ArrayList<Show>()
    val MONTH = arrayOf(
        "Janurary",
        "Feburary",
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

    fun setupPartyList(list: List<PartiesResponse>){
        for(party in list){
            partyList.add(Party(party.id, party.showId, party.date, party.time))
            val showList = ShowList.LIST
            for(i in 0 until showList.size){
                if(showList[i].id == party.showId){
                    showList[i].time = party.time
                    showList[i].date = party.date
                    partyShowList.add(showList[i])
                }
            }
        }
    }


    val list: List<Show> by lazy {
        getSortedParties()
    }

    private fun getSortedParties(): List<Show> {
        partyShowList.sortBy { it.date }
        return partyShowList
    }

}