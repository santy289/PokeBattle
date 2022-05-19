import {
    USER_INFO,
    TOTAL_ROOMS,
} from './types';

import {
    getAllDocs,
    getDocById,
} from '../utils/services';

export const infoUser = (info) => ({ type: USER_INFO, payload: info });
export const totalRooms = (info) => ({ type: TOTAL_ROOMS, payload: info})

export const getinfo = (id) => async (dispatch) => {
    try {
        const info = await getDocById('users', id);
        dispatch(infoUser(info));
    } catch (error) {
        throw new Error(error);
    }
}
export const getRooms = (id) => async (dispatch) => {
    try {
        const info = await getAllDocs(id);
        dispatch(totalRooms(info));
    } catch (error) {
        throw new Error(error);
    }
}