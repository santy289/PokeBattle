
import { updateDoc } from 'firebase/firestore';


function NewCards (card) {
    const userId = sessionStorage.getItem('userId');
    card.catch = true;
    updateDoc(`user/${userId}/${card.id-1}`, card);
    alert(card.name+ ' added to your PokeDex');
        
return card;
}
export default NewCards;