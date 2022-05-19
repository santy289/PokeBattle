import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
    ROUTE_HOME,
    ROUTE_FINDER,
    ROUTE_POKEDEX,
    ROUTE_REGISTER,
    ROUTE_USERPROFILE,
    ROUTE_LOBBY,
    ROUTE_GAME,
} from './routes';
import Home from '../pages/home/Home';
import Finder from '../pages/finder/Finder';
import Pokedex from '../pages/pokedex/Pokedex';
import Register from '../pages/register/Register';
import UserProfile from '../pages/userProfile/UserProfile';
import Lobby from '../pages/lobby/Lobby';
import Game from '../pages/game/Game';

function MainRouter () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={ROUTE_HOME} element={<Home />} />
                <Route path={ROUTE_FINDER} element={<Finder />} />
                <Route path={ROUTE_POKEDEX} element={<Pokedex />} />
                <Route path={ROUTE_REGISTER} element={<Register />} />
                <Route path={ROUTE_USERPROFILE} element={<UserProfile />} />
                <Route path={ROUTE_LOBBY} element={<Lobby />} />
                <Route path={ROUTE_GAME} element={<Game />} />
                <Route
                path="/privacy-policy"
                component={() => {
                    window.location.replace('https://google.com');
                    return null;
                }}
                />
            </Routes>
        </BrowserRouter>
    );
}
export default MainRouter;