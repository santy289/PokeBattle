import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PokemonCard from '../../components/pokecard/PokemonCard';
import Header from '../../components/header/Header';
import './finder.css';

function Finder(){
const { id }  = useParams();
const { pokemons,hand } = useSelector(state => state.userInfo);
const pokemon = pokemons.find(pokedata=>pokedata.id===parseInt(id));

return(
    <div>
        <Header/>
        <PokemonCard
        catch={pokemon.cath}
        name={pokemon.name.english} 
        id={pokemon.id}
        status={pokemon.base}
        type={pokemon.type}
        image={pokemon.background}
        key={pokemon.id}
        />
        <div className="finder__hand--container">
            <h1>Your hand: </h1>
         {
            hand.map((pokedata, index)=>
                pokedata.id<10 && pokedata.catch === true ?
                <div className="img_container" key ={index}>
                    <p className='img-Text'>{pokedata.name} N°{pokedata.id}</p>
                    <img alt ='' className="img" src={`https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/sprites/00${pokedata.id}MS.png`}>
                    </img></div>
                :pokedata.id<100 && pokedata.catch === true ?
                <div className="img_container" key ={index}>
                    <p className='img-Text'>{pokedata.name} N°{pokedata.id}</p>
                    <img alt ='' className="img" src={`https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/sprites/0${pokedata.id}MS.png`}>
                    </img></div>
                :pokedata.catch === true?
                <div className="img_container" key ={index}>
                    <p className='img-Text'>{pokedata.name} N°{pokedata.id}</p>
                    <img alt ='' className="img" src={`https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/sprites/${pokedata.id}MS.png`}>
                    </img></div>
                :null
                )
        }
        </div>
    </div>
    
)
}
export default Finder;