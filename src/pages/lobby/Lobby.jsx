import Header from "../../components/header/Header";
import { db } from '../../config/firebase';
import { getRooms } from '../../store/actions'
import { setDoc, doc, updateDoc } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import './lobby.css';

const roomId = sessionStorage.getItem('userId');

 function Lobby () {
    const navigate = useNavigate();
    const { userName } = useSelector(state => state.userInfo);
    const totalRoom = useSelector(state => state.totalRooms);
    const dispatch = useDispatch();

    async function handleCreateRoom (){
        const docRef = doc(db, 'rooms', roomId);
        const room = {
            createdAt: new Date(),
            playeone: userName,
            playertwo: '',
            payerOnehand: [],   
            payerTwohand: [],
            playerOnecard:{},
            playerTwocard:{},
            roomId: roomId,
        };
        await setDoc(docRef, room);
        dispatch(getRooms('rooms'));
        sessionStorage.setItem('payer', 'playerOne');
        navigate('/game/' + roomId);
    }
    async function handleJoinRoom(id){
        console.log('id', id);
        const docRef = doc(db, 'rooms', id);
        const room = {
            playertwo: userName, 
            payerTwohand: [],
        };
        await updateDoc(docRef, room);
        sessionStorage.setItem('payer', 'playerTwo');
        navigate('/game/' + roomId);
    }
    return(
        <div>
            <Header />
            <button onClick={handleCreateRoom} className="lobby__create--button">Create Gaming Room</button>
            <div className="lobby__main--container">
                <h1 className="lobby__main--title">Lobby</h1>
                <div className="lobby__main--list">
                    {totalRoom.map(room => (
                        <div className="lobby__main--list--item" key={room.roomId}>
                            {room.playeone ?
                            <div>
                            <p className="lobby__main--list_id">Room id:{room.roomId}</p>
                            <p className="lobby__main--list_player">player one: {room.playeone}</p>
                            <p className="lobby__main--list_player">player two: {room.playplayertwo}</p>
                            {!room.playplayertwo ?
                                <button onClick={handleJoinRoom(room.roomId)} className="lobby__join--button">Join</button>
                                :
                                <p>Room is full</p>
                            }
                            </div>
                            : null
                            }
                        </div>
                    ))}

            </div>

        </div>
        </div>
    )
}

export default Lobby;