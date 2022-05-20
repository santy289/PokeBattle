import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PokemonCard from '../../components/pokecard/PokemonCard';
import Header from '../../components/header/Header';

function Finder(){
const { id }  = useParams();
const { pokemons } = useSelector(state => state.userInfo);
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
    </div>
    
)
}
export default Finder;