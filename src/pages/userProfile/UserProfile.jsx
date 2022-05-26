import Header from "../../components/header/Header";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer"
import './userProfile.css'


function UserProfile (){
    const user = useSelector(state => state.userInfo);
    console.log(user);
return (
<div>
<Header/>
<div className="user-profile">
  {user?
    <div>
         <h1 className="user__profile--tittle">User Profile</h1>
        <img src={user.avatar} alt="avatar" className="user__profile--img"/>
        <br/>
        <h2 className="profile_main--name" id="userName">{user.userName}</h2>
        <label htmlFor="userEmail">Email:</label>
        <h2 className="profile_main--email" id="userEmail">{user.email}</h2>
        <label htmlFor="pokePoins">Poke Points:</label>
        <h2 className="profile_main--pokePoints" id="pokePoints">{user.points}</h2>
        <br/>
        <label htmlFor="pokeCards">Active Pokemons</label>
        <br/>
          {
            user.hand.map(pokedata=>
              pokedata.id<10 ?
              <Link to={`/Finder/${pokedata.id}`} key ={pokedata.id}>
                <p className='img-Text'>{pokedata.name.english} N°{pokedata.id}</p>
                <img alt ='' className="img" src={`https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/sprites/00${pokedata.id}MS.png`}>
                </img></Link>
              :pokedata.id<100?
              <Link to={`/Finder/${pokedata.id}`} key ={pokedata.id}>
                <p className='img-Text'>{pokedata.name.english} N°{pokedata.id}</p>
                <img alt ='' className="img" src={`https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/sprites/0${pokedata.id}MS.png`}>
                </img></Link>
              :
              <Link to={`/Finder/${pokedata.id}`} key ={pokedata.id}>
                <p className='img-Text'>{pokedata.name.english} N°{pokedata.id}</p>
                <img alt ='' className="img" src={`https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/sprites/${pokedata.id}MS.png`}>
                </img></Link>
              )
          }
    </div>
  :null
  }
</div>
<Footer/>
</div>
)
}

export default UserProfile;