import {
    USER_INFO,
    TOTAL_ROOMS,
    GAME,
} from './types';

const initialValues = {
    userInfo: {
        avatar: '',
        email: '',
        history: [],
        points: 0,
        hand: [],
        pokemons: [],
        userName: '',
    },
    totalRooms: [],
    game: {},
};

function reducer (state = initialValues, action) {
    switch (action.type) {
        case USER_INFO:
            return {
                ...state,
                userInfo: action.payload,
            };
        case TOTAL_ROOMS:
            return {
                ...state,
                totalRooms: action.payload,
            };
        case GAME:
            return {
                ...state,
                game: action.payload,
            };
        default:
            return state;
    }
}

export default reducer;
