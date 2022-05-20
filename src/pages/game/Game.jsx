import Header from '../../components/header/Header';
import { useSelector, useDispatch } from 'react-redux';
import { emitRealTime, listeningRealTime, upDateRealTime } from '../../utils/realTime';
import { useEffect, useState } from 'react';
import PokemonCard from '../../components/pokecard/PokemonCard';
import { doc } from 'firebase/firestore';
import { getinfo } from '../../store/actions';
import { useParams } from 'react-router-dom';
import { db } from '../../config/firebase';
import './game.css';

function Game (){
    const userid = sessionStorage.getItem('userId');
    const [card , setCard] = useState([]);
    console.log(card);
    const [info, setInfo] = useState()
    const dispatch = useDispatch();
    const { id }  = useParams();
    const player = sessionStorage.getItem('player');
    const { hand, pokemons } = useSelector(state => state.userInfo);

    function hanldeSetHandPlayerOne (){
        const game = {
            playerOneHand: hand,
            playerOneCard: {},
            lifeCardPlayerOne: 0,
            lifeCardPlayerTwo: 0,
            playerTwohand: [],
            playerTwocard: {},
        };
        emitRealTime(`game/${id}`, game);
    }

    function handlePick(pokemon, index){
        pokemon.catch = false;
        upDateRealTime(`game/${id}/playerOneHand/${index}`, pokemon)
        const selectcard = pokemons.find(pokedata=>pokedata.id===parseInt(pokemon.id));
        setCard(selectcard);
    }
        
    useEffect(() => {
        hanldeSetHandPlayerOne ();
        dispatch(getinfo(userid));
        listeningRealTime(`game/${id}`, setInfo);
    }, []);
    return (
        <div>
            <Header />
            <div className="game__hand--container">
                {player === 'playerOne' ?
                <div>
                    <div>
                       {card.id?
                        <PokemonCard
                        catch={card.cath}
                        name={card.name.english} 
                        id={card.id}
                        status={card.base}
                        type={card.type}
                        image={card.background}
                        key={card.id}
                        />
                    :null
                    }   
                    </div>
                    <div className="game__hand--container" >
                    <p onClick={hanldeSetHandPlayerOne(hand)}>Your Hand: </p>
                        {
                        hand.map((pokedata, index)=>
                            pokedata.id<10 && pokedata.catch === true ?
                            <div onClick={()=>handlePick(pokedata, index)} className="img_container" key ={index}>
                                <p className='img-Text'>{pokedata.name} N°{pokedata.id}</p>
                                <img alt ='' className="img" src={`https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/sprites/00${pokedata.id}MS.png`}>
                                </img></div>
                            :pokedata.id<100 && pokedata.catch === true ?
                            <div onClick={()=>handlePick(pokedata, index)} className="img_container" key ={index}>
                                <p className='img-Text'>{pokedata.name} N°{pokedata.id}</p>
                                <img alt ='' className="img" src={`https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/sprites/0${pokedata.id}MS.png`}>
                                </img></div>
                            :pokedata.catch === true?
                            <div onClick={()=>handlePick(pokedata,index)} className="img_container" key ={index}>
                                <p className='img-Text'>{pokedata.name} N°{pokedata.id}</p>
                                <img alt ='' className="img" src={`https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/sprites/${pokedata.id}MS.png`}>
                                </img></div>
                            :null
                            )
                        }
                    </div>
                </div>
                :player === 'playerTwo' ?
                <h1>Actual Hand: </h1>
                :null
                }
            </div>

        </div>

    )
}
export default Game;