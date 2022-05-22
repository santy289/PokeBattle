import Header from '../../components/header/Header';
import { useSelector, useDispatch } from 'react-redux';
import { emitRealTime, listeningRealTime, upDateRealTime } from '../../utils/realTime';
import { useEffect, useState } from 'react';
import PokemonCard from '../../components/pokecard/PokemonCard';
import { getinfo } from '../../store/actions';
import { useParams } from 'react-router-dom';
import versus from '../../assets/versus.png';
import shadow1 from '../../assets/rayquazashadow.png';
import shadow2 from '../../assets/lugiashadow.jpg';
import unknow from '../../assets/unknownicon.png';
import pokecard from '../../assets/pokecard.png'

import './game.css';

function Game (){
    const userid = sessionStorage.getItem('userId');
    const [cardOne , setCardOne] = useState([]);
    const [cardTwo , setCardTwo] = useState([]);

    const [info, setInfo] = useState()
    console.log(cardOne);
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
            playerTwoHand: [],
            playerTwoCard: {},
        };
        emitRealTime(`game/${id}`, game);
    }
    function hanldeSetHandPlayertwo (){
            console.log('holi');
            const sethand = {
                playerTwoHand: hand,
            };
            upDateRealTime(`game/${id}`, sethand);
        }

    function handlePick(pokemon, index){
        if (player === 'playerOne'){
            const selectcard = pokemons.find(pokedata=>pokedata.id===parseInt(pokemon.id));
            setCardOne(selectcard);
            pokemon.catch = false;
            upDateRealTime(`game/${id}/playerOneHand/${index}`, pokemon)
            
        }else{
            const selectcard = pokemons.find(pokedata=>pokedata.id===parseInt(pokemon.id));
            setCardTwo(selectcard);
            pokemon.catch = false;
            upDateRealTime(`game/${id}/playerTwoHand/${index}`, pokemon)
            
        }
    }
    useEffect(()=>{
        if (player === 'playerOne'){
            const setcard = {
                playerOneCard: cardOne,
            }
            upDateRealTime(`game/${id}`, setcard)
        }else{
            const setcard = {
                playerTwoCard: cardTwo,
            }
            upDateRealTime(`game/${id}`, setcard)
        }
    },[cardOne, cardTwo])

    useEffect(() => {
        listeningRealTime(`game/${id}`, setInfo);
    }, [id]);

    useEffect(() => {
            if (player === 'playerOne' && !info) {
                hanldeSetHandPlayerOne ();
            } else if (!info) {
                hanldeSetHandPlayertwo ();
            }
            dispatch(getinfo(userid));
        }, []);

    return (
        <div>
            <Header />
            <div className="game__main--container">
                {player === 'playerOne' ?
                <div>
                    <div className="game__handtwo--container">
                        {info ?
                            <div className="game__handtwo--cards">
                                {info.playerTwoHand ?
                                 info.playerTwoHand.map((pokedata, index)=>
                                    pokedata.catch === true ?
                                    <div onClick={()=>handlePick(pokedata, index)} className="img_container" key ={index}>
                                        <p className='img-Text'>Unknow</p>
                                        <img alt ='' className="img_unknow" src={unknow}>
                                        </img>
                                        </div>    
                                    :null
                                    )
                                :<h1 className="game__handtwo--waiting">waiting for opponent...</h1>
                                }
                            </div>
                        :null }
                    </div>
                    <div className="game__battlecards--container">
                        <div className="game__battlecard--cardone">
                        {cardOne.id?
                            <PokemonCard
                            catch={cardOne.cath}
                            name={cardOne.name.english} 
                            id={cardOne.id}
                            status={cardOne.base}
                            type={cardOne.type}
                            image={cardOne.background}
                            key={cardOne.id}
                            />
                        :<img src={shadow1} alt="waitting" className="game__battlecard--waiting"/>
                        }   
                        </div>
                        <img className="game__battlecard--img" src={versus} alt="pokeball"/>
                        {info?
                        <div className="game__battlecard--cardtwo">
                        {info.playerTwoCard && cardOne.cath?
                            <PokemonCard
                            catch={info.playerTwoCard.cath}
                            name={info.playerTwoCard.name.english}
                            id={info.playerTwoCard.id}
                            status={info.playerTwoCard.base}
                            type={info.playerTwoCard.type}
                            image={info.playerTwoCard.background}
                            key={info.playerTwoCard.id}
                            />
                        :info.playerTwoCard ?
                            <img src={pokecard} alt="waitting" className="game__battlecard--waiting"/>
                        :<img src={shadow2} alt="waitting" className="game__battlecard--waiting"/>

                        }
                        </div>
                        :null
                        }
                    </div>
                    <div className="game__hand--container" >
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
                <div>
                    <div className="game__handtwo--container">
                        {info ?
                            <div className="game__handtwo--cards">
                                {info.playerOneHand ?
                                 info.playerOneHand.map((pokedata, index)=>
                                    pokedata.catch === true ?
                                    <div onClick={()=>handlePick(pokedata, index)} className="img_container" key ={index}>
                                        <p className='img-Text'>Unknow</p>
                                        <img alt ='' className="img_unknow" src={unknow}>
                                        </img>
                                        </div>    
                                    :null
                                    )
                                :null
                                }
                            </div>
                        :null }
                    </div>
                    <div className="game__battlecards--container">
                        {info?
                        <div className="game__battlecard--cardone">
                        {info.playerOneCard && cardTwo.cath?
                            <PokemonCard
                            catch={info.playerOneCard.cath}
                            name={info.playerOneCard.name.english} 
                            id={info.playerOneCard.id}
                            status={info.playerOneCard.base}
                            type={info.playerOneCard.type}
                            image={info.playerOneCard.background}
                            key={info.playerOneCard.id}
                            />
                        :info.playerOneCard?
                            <img src={pokecard} alt="waitting" className="game__battlecard--waiting"/>
                        :<img src={shadow1} alt="waitting" className="game__battlecard--waiting"/>
                        }   
                        </div>
                        :null}
                        <img className="game__battlecard--img" src={versus} alt="pokeball"/>
                        <div className="game__battlecard--cardtwo">
                        {cardTwo.id?
                            <PokemonCard
                            catch={cardTwo.cath}
                            name={cardTwo.name.english}
                            id={cardTwo.id}
                            status={cardTwo.base}
                            type={cardTwo.type}
                            image={cardTwo.background}
                            key={cardTwo.id}
                            />
                        :<img src={shadow2} alt="waitting" className="game__battlecard--waiting"/>
                        }
                        </div>
                    </div>
                    <div className="game__hand--container" >
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
                :null
                }
            </div>

        </div>

    )
}
export default Game;