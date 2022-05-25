import Header from '../../components/header/Header';
import { useSelector, useDispatch } from 'react-redux';
import { emitRealTime, listeningRealTime, upDateRealTime} from '../../utils/realTime';
import { deleteDocById } from '../../utils/services';
import { useEffect, useState } from 'react';
import { db } from '../../config/firebase.js';
import { doc, updateDoc } from 'firebase/firestore';
import PokemonCard from '../../components/pokecard/PokemonCard';
import LifeBar from '../../components/lifebar/lifebar'
import { getinfo } from '../../store/actions';
import { useParams } from 'react-router-dom';
import versus from '../../assets/versus.png';
import shadow1 from '../../assets/rayquazashadow.png';
import shadow2 from '../../assets/lugiashadow.jpg';
import unknow from '../../assets/unknownicon.png';
import pokecard from '../../assets/pokecard.png'
import battle from '../../utils/battle';
import { useNavigate } from 'react-router-dom';

import './game.css';

function Game (){
    const navigate = useNavigate();
    const userid = sessionStorage.getItem('userId');
    const [rooms, setRooms] = useState([]);
    const [cardOne , setCardOne] = useState(null);
    const [cardTwo , setCardTwo] = useState(null);
    const [info, setInfo] = useState(null);
    console.log(info);
    const [showHand, setShowHand] = useState(true);
    const dispatch = useDispatch();
    const { id }  = useParams();
    const player = sessionStorage.getItem('player');
    const { hand, pokemons, userName } = useSelector(state => state.userInfo);
    console.log(hand);
    console.log(userName);


    function hanldeSetHandPlayerOne (){
        const game = {
            playerOneHand: hand,
            playerOneCard: {},
            playerTwoHand: [0],
            playerTwoCard: {},
            playerOnePoints: 0,
            playerTwoPoints: 0,
            playerOneName: userName,
        };
        emitRealTime(`game/${id}`, game);
    }
    function hanldeSetHandPlayertwo (){
            const sethand = {
                playerTwoHand: hand,
                playerTwoName: userName,
                rivalId: userid,
            };
            upDateRealTime(`game/${id}`, sethand);
    }
    function handlePick(pokemon, index){
        if (player === 'playerOne'){
            const selectcard = pokemons.find(pokedata=>pokedata.id===parseInt(pokemon.id));
            setCardOne(selectcard);
            pokemon.catch = false;
            upDateRealTime(`game/${id}/playerOneHand/${index}`, pokemon)
            setShowHand(false);
        }else{
            const selectcard = pokemons.find(pokedata=>pokedata.id===parseInt(pokemon.id));
            setCardTwo(selectcard);
            pokemon.catch = false;
            upDateRealTime(`game/${id}/playerOneHand/${index}`, pokemon)
            setShowHand(false);
        }
    }
    function handleBattle(playerOneCard,playerTwoCard){
        const dmg = battle(playerOneCard,playerTwoCard, player);
        if (player === 'playerOne'){
            setTimeout(() => {
                if (info.lifeCardPlayerOne <= 0){
                    const newLife = {
                        lifeCardPlayerOne: 0,
                    };
                    upDateRealTime(`game/${id}`, newLife);
                    setCardOne(null);
                    setShowHand(true);
                }else if (info.lifeCardPlayerTwo >= 0){
                const newLife = {
                    lifeCardPlayerTwo: info.lifeCardPlayerTwo-dmg};
                upDateRealTime(`game/${id}`, newLife);
                }else if(info.lifeCardPlayerTwo <= 0){
                    const newLife = {
                        lifeCardPlayerTwo: 0,
                        playerTwoCard: {},
                        playerOnePoints: info.playerOnePoints+1,
                    };
                    upDateRealTime(`game/${id}`, newLife);
                    setCardTwo(null);
                }
            }, 1000-(playerOneCard.base.Speed * 3));
            
        }else{
            setTimeout(() => {
            if (info.lifeCardPlayerTwo <= 0){
                const newLife = {
                    lifeCardPlayerTwo: 0,
                };
                upDateRealTime(`game/${id}`, newLife);
                setCardTwo(null);
                setShowHand(true);
                }
            else if (info.lifeCardPlayerOne >= 0){
            const newLife = {
                lifeCardPlayerOne: info.lifeCardPlayerOne-dmg};
            upDateRealTime(`game/${id}`, newLife);
        } else if (info.lifeCardPlayerOne <=0){
            const newLife = {
                lifeCardPlayerOne: 0,
                playerOneCard: {},
                playerTwoPoints: info.playerTwoPoints+1,
            };
            upDateRealTime(`game/${id}`, newLife);
            setCardOne(null);
        }
        }, 1000-(playerTwoCard.base.Speed * 3));
    }
    };

    useEffect(()=>{
        if (player === 'playerOne' && cardOne !== null){
            const setcard = {
                playerOneCard: cardOne,
                lifeCardPlayerOne: cardOne.base.HP,
            }
            upDateRealTime(`game/${id}`, setcard)
        }else if (player === 'playerTwo' && cardTwo !== null){
            const setcard = {
                playerTwoCard: cardTwo,
                lifeCardPlayerTwo: cardTwo.base.HP,
            }
            upDateRealTime(`game/${id}`, setcard)
        }
    },[cardOne, cardTwo])

    useEffect(() => {
        listeningRealTime(`game/${id}`, setInfo);
    }, [id]);

    useEffect(() => {
            if (player === 'playerOne' && info === null) {
                hanldeSetHandPlayerOne ();
            } else if (info === null) {
                hanldeSetHandPlayertwo ();
            }
            dispatch(getinfo(userid));
        }, []);
    
    useEffect(() => {
        if (info !== null){
            if (info.playerTwoPoints === info.playerOneHand.length && player === 'playerTwo'){
                navigate(`/win/${id}`);
            } else if(info.playerOnePoints === info.playerTwoHand.length && player ==='playerTwo'){
                navigate(`/lose/${id}`);
            }
            if (info.playerOnePoints === info.playerTwoHand.length && player === 'playerOne'){
                navigate(`/win/${id}`);
            } else if (info.playerTwoPoints === info.playerOneHand.length && player === 'playerOne'){
                navigate(`/lose/${id}`);
            }
    }
    }, [info]);

    return (
        <div>
            <Header />
            <div className="game__main--container">
                {player === 'playerOne' ?
                <div>
                    <div className="game__handtwo--container">
                        {info !== null?
                            <div className="game__handtwo--cards">
                                {info.playerTwoHand.length > 1 ?
                                 info.playerTwoHand.map((pokedata, index)=>
                                    pokedata.catch === true ?
                                    <div onClick={()=>handlePick(pokedata, index)} className="img_container" key ={index + userid +pokedata.id}>
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
                        {cardOne != null?
                        <div>
                            <PokemonCard
                            catch={cardOne.catch}
                            name={cardOne.name.english} 
                            id={cardOne.id}
                            status={cardOne.base}
                            type={cardOne.type}
                            image={cardOne.background}
                            key={cardOne.id+ userid}
                            />
                            <LifeBar
                            actual = {info.lifeCardPlayerOne}
                            maximum = {cardOne.base.HP}   
                            />
                        </div>
                        :<img src={shadow1} alt="waitting" className="game__battlecard--waiting"/>
                        }
                        </div>
                        <img className="game__battlecard--img" src={versus} alt="pokeball"/>
                        {info?
                        <div className="game__battlecard--cardtwo">
                        {info.playerTwoCard && cardOne != null?
                        <div>
                            <PokemonCard
                            catch={info.playerTwoCard.catch}
                            name={info.playerTwoCard.name.english}
                            id={info.playerTwoCard.id}
                            status={info.playerTwoCard.base}
                            type={info.playerTwoCard.type}
                            image={info.playerTwoCard.background}
                            key={info.playerTwoCard.id + userid}
                            />
                            <LifeBar
                            key ={info.playerTwoCard.id+ userid}
                            actual = {info.lifeCardPlayerTwo}
                            maximum = {info.playerTwoCard.base.HP}
                            />
                            {info.playerOneCard && info.playerTwoCard ?
                            <span onclick={handleBattle(info.playerOneCard, info.playerTwoCard)}/>
                            :null
                            }
                            
                        </div>
                        :info.playerTwoCard ?
                            <img src={pokecard} alt="EnemyCard" className="game__battlecard--waiting"/>
                        :<img src={shadow2} alt="waitting" className="game__battlecard--waiting"/>

                        }
                        </div>
                        :null
                        }
                    </div>
                    <div className="game__hand--container" >
                        {showHand===true?
                        hand.map((pokedata, index)=>
                            pokedata.id<10 && pokedata.catch === true ?
                            <div onClick={()=>handlePick(pokedata, index)} className="img_container" key ={index + userid +pokedata.id}>
                                <p className='img-Text'>{pokedata.name} N°{pokedata.id}</p>
                                <img alt ='' className="img" src={`https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/sprites/00${pokedata.id}MS.png`}>
                                </img></div>
                            :pokedata.id<100 && pokedata.catch === true ?
                            <div onClick={()=>handlePick(pokedata, index)} className="img_container" key ={index + userid +pokedata.id}>
                                <p className='img-Text'>{pokedata.name} N°{pokedata.id}</p>
                                <img alt ='' className="img" src={`https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/sprites/0${pokedata.id}MS.png`}>
                                </img></div>
                            :pokedata.catch === true?
                            <div onClick={()=>handlePick(pokedata,index)} className="img_container" key ={index + userid +pokedata.id}>
                                <p className='img-Text'>{pokedata.name} N°{pokedata.id}</p>
                                <img alt ='' className="img" src={`https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/sprites/${pokedata.id}MS.png`}>
                                </img></div>
                            :null
                            )
                        :null
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
                                    <div onClick={()=>handlePick(pokedata, index)} className="img_container" key ={index + userid +pokedata.id}>
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
                        {info.playerOneCard && cardTwo != null?
                        <div>
                            <PokemonCard
                            catch={info.playerOneCard.catch}
                            name={info.playerOneCard.name.english} 
                            id={info.playerOneCard.id}
                            status={info.playerOneCard.base}
                            type={info.playerOneCard.type}
                            image={info.playerOneCard.background}
                            key={info.playerOneCard.id+ userid}
                            />
                            <LifeBar
                            key={info.playerOneCard.id+ userid}
                            actual = {info.lifeCardPlayerOne}
                            maximum = {info.playerOneCard.base.HP}
                            />
                            {info.playerOneCard && info.playerTwoCard ?
                            <span onclick={handleBattle(info.playerOneCard, info.playerTwoCard)}/>
                            :null
                            }
                        </div>
                        :info.playerOneCard?
                            <img src={pokecard} alt="waitting" className="game__battlecard--waiting"/>
                        :<img src={shadow1} alt="waitting" className="game__battlecard--waiting"/>
                        }   
                        </div>
                        :null}
                        <img className="game__battlecard--img" src={versus} alt="pokeball"/>
                        <div className="game__battlecard--cardtwo">
                        {cardTwo != null?
                        <div>
                            <PokemonCard
                            catch={cardTwo.catch}
                            name={cardTwo.name.english}
                            id={cardTwo.id}
                            status={cardTwo.base}
                            type={cardTwo.type}
                            image={cardTwo.background}
                            key={cardTwo.id+ userid}
                            />
                            <LifeBar
                            key={cardTwo.id+ userid}
                            actual = {info.lifeCardPlayerTwo}
                            maximum = {cardTwo.base.HP}
                            />
                        </div>
                        :<img src={shadow2} alt="waitting" className="game__battlecard--waiting"/>
                        }
                        </div>
                    </div>
                    <div className="game__hand--container" >
                        {showHand===true? 
                        hand.map((pokedata, index)=>
                            pokedata.id<10 && pokedata.catch === true ?
                            <div onClick={()=>handlePick(pokedata, index)} className="img_container" key ={index + userid +pokedata.id}>
                                <p className='img-Text'>{pokedata.name} N°{pokedata.id}</p>
                                <img alt ='' className="img" src={`https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/sprites/00${pokedata.id}MS.png`}>
                                </img></div>
                            :pokedata.id<100 && pokedata.catch === true ?
                            <div onClick={()=>handlePick(pokedata, index)} className="img_container" key ={index + userid +pokedata.id}>
                                <p className='img-Text'>{pokedata.name} N°{pokedata.id}</p>
                                <img alt ='' className="img" src={`https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/sprites/0${pokedata.id}MS.png`}>
                                </img></div>
                            :pokedata.catch === true?
                            <div onClick={()=>handlePick(pokedata,index)} className="img_container" key ={index + userid +pokedata.id}>
                                <p className='img-Text'>{pokedata.name} N°{pokedata.id}</p>
                                <img alt ='' className="img" src={`https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/sprites/${pokedata.id}MS.png`}>
                                </img></div>
                            :null
                            )
                            :null
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
