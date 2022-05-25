import Header from '../../components/header/Header';
import pikaLose from '../../assets/PikaLose.png'
import { Link } from 'react-router-dom'
import './lose.css'

function Lose () {
    return(
        <div>
        <Header/>   
           <div className="win-container">
     <img src={pikaLose} alt="pikaWin" className="win-img"/> 
     <h1>You Lose </h1>
     <div className="win__Buttons--container">
         <Link to="/"><button className="win__button">Back to Home</button></Link>
         <Link to="/rooms"><button className="win__button">Play Again</button></Link>
         <Link to="/profile"><button className="win__button">Go Profile</button></Link>
     </div>
     
     </div>
     </div>
    
    )

}
export default Lose;