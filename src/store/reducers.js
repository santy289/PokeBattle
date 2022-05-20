import {
    USER_INFO,
    TOTAL_ROOMS,
} from './types';

const initialValues = {
    userInfo: {
        avatar: '',
        email: '',
        history: [],
        points: 0,
        hand: [],
        pokemons: [],
        username: '',
    },
    totalRooms: [],
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
        default:
            return state;
    }
}

export default reducer;
