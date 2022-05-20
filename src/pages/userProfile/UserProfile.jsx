import Header from "../../components/header/Header";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


function UserProfile (){
    const user = useSelector(state => state.userInfo);
return (
<div>
<Header/>
<h1>User Profile</h1>
<label htmlFor="userName">Name:</label>
<h2 className="profile_main--name" id="userName">{user.userName}</h2>
<label htmlFor="userEmail">Email:</label>
<h2 className="profile_main--email" id="userEmail">{user.email}</h2>
<label htmlFor="pokePoins">Poke Points:</label>
<h2 className="profile_main--pokePoints" id="pokePoints">{user.points}</h2>
<label htmlFor="history">History:</label>
{user.history.map((item, index) => {
    return (
        <div className="profile_main--history" key={index}>
            <h3>{item.result}</h3>
            <h3>{item.hand}</h3>
            <h3>{item.vs}</h3>
        </div>
    )
}
)}
<br/>
<label htmlFor="pokeCards">Poke Cards:</label>
{
          user.hand.map(pokedata=>
            pokedata.id<10 && pokedata.cath === true ?
            <Link to={`/Finder/${pokedata.id}`} className="img_container" key ={pokedata.id}>
              <p className='img-Text'>{pokedata.name.english} N°{pokedata.id}</p>
              <img alt ='' className="img" src={`https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/sprites/00${pokedata.id}MS.png`}>
              </img></Link>
            :pokedata.id<100 && pokedata.cath === true?
            <Link to={`/Finder/${pokedata.id}`} className="img_container" key ={pokedata.id}>
              <p className='img-Text'>{pokedata.name.english} N°{pokedata.id}</p>
              <img alt ='' className="img" src={`https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/sprites/0${pokedata.id}MS.png`}>
              </img></Link>
            :pokedata.cath === true?
            <Link to={`/Finder/${pokedata.id}`} className="img_container" key ={pokedata.id}>
              <p className='img-Text'>{pokedata.name.english} N°{pokedata.id}</p>
              <img alt ='' className="img" src={`https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/sprites/${pokedata.id}MS.png`}>
              </img></Link>
              :null)
          }
</div>
)
}

export default UserProfile;