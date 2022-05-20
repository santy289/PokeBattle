import {
    USER_INFO,
    TOTAL_ROOMS,
} from './types';

import { emitRealTime } from '../utils/realTime';
import {
    getAllDocs,
    getDocById,
} from '../utils/services';

export const infoUser = (info) => ({ type: USER_INFO, payload: info });
export const totalRoomsfunction = (info) => ({ type: TOTAL_ROOMS, payload: info})

export const getinfo = (id) => async (dispatch) => {
    try {
        const info = await getDocById('users', id);
        dispatch(infoUser(info));
    } catch (error) {
        throw new Error(error);
    }
}
export const getRooms = (id) => async (dispatch, getState) => {
    try {
        const { totalRooms } = getState();
        emitRealTime('rooms', totalRooms);
        const info = await getAllDocs(id);
        dispatch(totalRoomsfunction(info));
    } catch (error) {
        throw new Error(error);
    }
}