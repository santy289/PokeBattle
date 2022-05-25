
import './destiny.css'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

  
function Destiny()
{
const { pokemons } = useSelector(state => state.userInfo);
    return(
        <div className="container_poke">
          {
          pokemons.map(pokedata=>
            pokedata.id<10 && pokedata.catch === true ?
            <Link to={`/Finder/${pokedata.id}`} className="img_container" key ={pokedata.id}>
              <p className='img-Text'>{pokedata.name.english} N°{pokedata.id}</p>
              <img alt ='' className="img" src={`https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/sprites/00${pokedata.id}MS.png`}>
              </img></Link>
            :pokedata.id<100 && pokedata.catch === true?
            <Link to={`/Finder/${pokedata.id}`} className="img_container" key ={pokedata.id}>
              <p className='img-Text'>{pokedata.name.english} N°{pokedata.id}</p>
              <img alt ='' className="img" src={`https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/sprites/0${pokedata.id}MS.png`}>
              </img></Link>
            :pokedata.catch === true?
            <Link to={`/Finder/${pokedata.id}`} className="img_container" key ={pokedata.id}>
              <p className='img-Text'>{pokedata.name.english} N°{pokedata.id}</p>
              <img alt ='' className="img" src={`https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/sprites/${pokedata.id}MS.png`}>
              </img></Link>
              :null)
          }
      
          </div>
        
        
    )
}
export default Destiny;