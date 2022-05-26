import Header from "../../components/header/Header";
import { db } from '../../config/firebase';
import { getRooms } from '../../store/actions'
import { setDoc, doc, updateDoc } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { listeningRealTime, upDateRealTime } from '../../utils/realTime'
import Footer from "../../components/footer/Footer";
import './lobby.css';

 function Lobby () {
    const roomId = sessionStorage.getItem('userId');
    const [rooms, setRooms] = useState([]);
    const navigate = useNavigate();
    const { userName } = useSelector(state => state.userInfo);
    const totalRoom = useSelector(state => state.totalRooms);
    const dispatch = useDispatch();

    async function handleCreateRoom (){
        const docRef = doc(db, 'rooms', roomId);
        const room = {
            createdAt: new Date(),
            playerone: userName,
            playertwo: '',
            payerOnehand: [],   
            payerTwohand: [],
            playerOnecard:{},
            playerTwocard:{},
            roomId: roomId,
        };
        await setDoc(docRef, room);
        dispatch(getRooms('rooms'));
        sessionStorage.setItem('player', 'playerOne');
        navigate('/game/' + roomId);
    }
    async function handleJoinRoom(id, index){
        const docRef = doc(db, 'rooms', id);
        const room = {
            playertwo: userName, 
            playerTwohand: [],
        };
        await updateDoc(docRef, room);
        upDateRealTime(`rooms/${index}`, room)
        dispatch(getRooms('rooms'));
        sessionStorage.setItem('player', 'playerTwo');
        navigate('/game/' + id);
    }
    useEffect(() => {
        dispatch(getRooms('rooms'));
        listeningRealTime('rooms', setRooms)
    }, [totalRoom, dispatch]);
    return(
        <div>
            <Header />
            <button onClick={handleCreateRoom} className="lobby__create--button">Create Gaming Room</button>
            <div className="lobby__main--container">
                <h1 className="lobby__main--title">Lobby</h1>
                <div className="lobby__main--list">
                    {rooms?.map((room, index) => (
                        <div className="lobby__main--list--item" key={room.roomId}>
                            {room.playerone ?
                            <div>
                            <p className="lobby__main--list_id"><b>Room id:</b> {room.roomId}</p>
                            <p className="lobby__main--list_player"><b>player one:</b> {room.playerone}</p>
                            <p className="lobby__main--list_player"><b>player two:</b> {room.playertwo}</p>
                            {!room.playertwo ?
                                <button onClick={()=>handleJoinRoom(room.roomId, index)} className="lobby__join--button">Join</button>
                                :
                                <p className="lobby__main--playing">playing...</p>
                            }
                            </div>
                            : null
                            }
                        </div>
                    ))}

            </div>

        </div>
        <Footer />
        </div>
    )
}

export default Lobby;