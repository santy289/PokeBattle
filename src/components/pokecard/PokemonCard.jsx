import './PokemonCard.css';
import image from '../../assets/pokedex.png';
import black from '../../assets/blackball.png'

function PokemonCard (props){
    
    return (
       
    <div className = "card__pokemon-container" style={{ backgroundImage: `url(${props.image})` }}>
        <div>
            <div className="card__tittle--container">
                <h1 className="card__tittle--tittle">{props.name}</h1>
                {props.catch === true?
                <div>
                    <img className="pokemon__card--logo" src={image} alt="pokecard"></img>
                    <button className="pokemon__card--button">Agregar a mi mano</button> 
                </div>
                :
                <img className="pokemon__card--logo--uncatch" src={black} alt="pokecard"></img>
                }
            </div>
            {props.id<10?
            <img key ={props.id} className= "image" 
            src={`https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/00${props.id}.png`} alt="pokecard"></img>
            :props.id<100?
            <img key ={props.id} className= "image" 
            src={`https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/0${props.id}.png`} alt="pokecard"></img>
            :
            <img key ={props.id} className= "image" 
            src={`https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${props.id}.png`} alt="pokecard"></img>}
            <h2 key ={`img+${props.id}`} className="order">Pokemon N° {props.id}</h2>
            <table className="stats">
                <tr>
                <td className='stats_tittle'>HP:</td>
                <td key ={`hp+${props.id}`} className='stats_data'>{props.status.HP}</td>
                </tr>
                <tr>
                <td className='stats_tittle'>Attack:</td>
                <td key ={`atk+${props.id}`} className='stats_data'>{props.status.Attack}</td>
                </tr>
                <tr>
                <td className='stats_tittle'>Defense:</td>
                <td key ={`dfs+${props.id}`} className='stats_data'>{props.status.Defense}</td>   
                </tr>
                <tr>
                <td className='stats_tittle'>Sp. Attack:</td>
                <td key ={`Satk+${props.id}`} className='stats_data'>{props.status.SpAttack}</td>
                </tr>
                <tr>
                <td className='stats_tittle'>Sp. Defense:</td>
                <td key ={`Sdfs+${props.id}`} className='stats_data'>{props.status.SpDefense}</td>
                </tr>
                <tr>
                <td className='stats_tittle'>Speed:</td>
                <td key ={`spd+${props.id}`} className='stats_data'>{props.status.Speed}</td>
                </tr>
            </table>
            <div className='weight'>
                <p className='weight_title'>Type:</p>
                 {
                (props.type).map(stats=>(
                    <p className='weight_text'>{stats}</p>
                    )
                )
                }
            </div>
        </div>
    </div>);
}
export default PokemonCard;

