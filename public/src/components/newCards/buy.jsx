import { useSelector, useDispatch } from 'react-redux';
import { updateDoc } from 'firebase/firestore';
import NewCards from './NewCards'
import PokemonCard from '../pokecard/PokemonCard';

function Buy (){
    const dispatch = useDispatch();
    const userId = sessionStorage.getItem('userId');
    const { pokemons, points } = useSelector(state => state.userInfo);
    const cards = [];
    function handleBuy (){
        if(points>=100){
            const newpPoints = {
               points: points - 100,
            };
            updateDoc(`user/${userId}`, newpPoints);
            for (let i = 0; i < 6; i++){
            const number = Math.floor(Math.random() * (809 - 1 + 1))+1;
            const card = pokemons.find(pokedata =>pokedata.id===(number))
            cards.push(card);
            return cards;
    }
    }
    }

        return(
    <div>
            <h1>Your new pokemons are: </h1>
        {
        cards.map((card, index)=>
            <div className="img_container" key ={index}>
            <PokemonCard
            catch={card.catch}
            name={card.name.english} 
            id={card.id}
            status={card.base}
            type={card.type}
            image={card.background}
            key={card.id + index}
            />
            <NewCards
            props={card}
            />
        </div>
        )}
        {points > 100 ?
        <button onClick={handleBuy}>Buy</button>
        :<p>You need 100 points to buy a new cards</p>
        }
    </div>
        )
}
export default Buy;