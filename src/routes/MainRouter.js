import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
    ROUTE_HOME,
    ROUTE_FINDER,
    ROUTE_POKEDEX,
    ROUTE_REGISTER,
    ROUTE_USERPROFILE,
    ROUTE_LOBBY,
    ROUTE_GAME,
    ROUTE_LOSE,
    ROUTE_WIN,
    ROUTE_BUY

} from './routes';
import Home from '../pages/home/Home';
import Finder from '../pages/finder/Finder';
import Pokedex from '../pages/pokedex/Pokedex';
import Register from '../pages/register/Register';
import UserProfile from '../pages/userProfile/UserProfile';
import Lobby from '../pages/lobby/Lobby';
import Game from '../pages/game/Game';
import Lose from '../pages/lose/Lose';
import Win from '../pages/win/Win';
import Buy from '../pages/buy/buy.jsx';

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
                <Route path={ROUTE_LOSE} element={<Lose />} />
                <Route path={ROUTE_WIN} element={<Win />} />
                <Route path={ROUTE_BUY} element={<Buy />} />
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
