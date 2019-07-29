import android.content.Context
import android.support.v17.leanback.supportleanbackshowcase.cards.CharacterCardView
import android.support.v17.leanback.supportleanbackshowcase.models.Card


/**
 * This Presenter is used to display the characters card row in the DetailView examples.
 */
class PartyCardPresenter(val context: Context) : AbstractCardPresenter<PartyCardPresenter>(context) {

    protected fun onCreateView(): PartyCardPresenter {
        return PartyCardPresenter(context)
    }

    fun onBindViewHolder(card: Card, cardView: PartyCardPresenter) {
        cardView.updateUi(card)
    }

}