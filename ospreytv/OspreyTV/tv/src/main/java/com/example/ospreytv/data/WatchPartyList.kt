package com.example.ospreytv.data

import com.example.ospreytv.models.Party
import com.example.ospreytv.models.Show
import com.example.ospreytv.models.backend.PartiesResponse

object WatchPartyList {
    private var partyList =  ArrayList<Party>()
    private var partyShowList =  ArrayList<Show>()
    val MOVIE_CATEGORY = arrayOf(
        "Watch Parties"
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
        getParties()
    }

    private fun getParties(): List<Show> {
        return partyShowList
    }

}