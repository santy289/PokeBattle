import { listeningRealTime } from '../../utils/realTime';
import Header from '../../components/header/Header';
import pikaWin from '../../assets/PikaWin.png'
import { db } from '../../config/firebase.js';
import { doc, updateDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { deleteDocById } from '../../utils/services';
import { useEffect, useState } from 'react';
import { getinfo } from '../../store/actions';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Footer from '../../components/footer/Footer';
import './win.css'

function Win() {
    const { id } = useParams();
    const userid = sessionStorage.getItem('userId');
    const player = sessionStorage.getItem('player');
    const [info, setInfo] = useState(null);
    const { points } = useSelector(state => state.userInfo);
    const dispatch = useDispatch();
    if (player === 'playerOne'&& info !== null) {
        const docRefOne = doc(db, 'users', userid);       
        const updateuser = {
            points: points + 10,
            };
            updateDoc(docRefOne, updateuser);        
            deleteDocById('rooms', id);
            console.log('playerOne win');
    } else if (player === 'playerTwo'&& info !== null) {
        const docRefTwo = doc(db, 'users', userid);
        const updateuser2 = {
            points: points+10,
        };
            updateDoc(docRefTwo, updateuser2);
            deleteDocById('rooms', id);
            console.log('playerTwo win');
    }

    useEffect(() => {
        listeningRealTime(`game/${id}`, setInfo)
        dispatch(getinfo(userid));
    },[id])

    return(
        <div>
           <Header/>   
              <div className="win-container">
        <img src={pikaWin} alt="pikaWin" /> 
        <h1>You Won!</h1>
        <div className="win__Buttons--container">
            <Link to="/"><button className="win__button">Back to Home</button></Link>
            <Link to="/rooms"><button className="win__button">Play Again</button></Link>
            <Link to="/profile"><button className="win__button">Go Profile</button></Link>
        </div>
        
        </div>
              <Footer/>
        </div>
       
    )
}
export default Win;