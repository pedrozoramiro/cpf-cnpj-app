import {createAction, handleActions} from 'redux-actions';


/* Actions Types */
const GET_ALL_IDENTIFICATION_REQUEST = 'cpf-cnpj-app/idenfication/GET_ALL_IDENTIFICATION_REQUEST';
const GET_ALL_IDENTIFICATION_SUCCESS = 'cpf-cnpj-app/idenfication/GET_ALL_IDENTIFICATION_SUCCESS';

export const types = {
    GET_ALL_IDENTIFICATION_REQUEST: GET_ALL_IDENTIFICATION_REQUEST,
    GET_ALL_IDENTIFICATION_SUCCESS: GET_ALL_IDENTIFICATION_SUCCESS
};

/* Actions */
const getAllIdenfications = createAction(GET_ALL_IDENTIFICATION_REQUEST);
const storageIdenfications = createAction(GET_ALL_IDENTIFICATION_SUCCESS);

export const actions = {
    getAllIdenfications,
    storageIdenfications
};

/* State */
const initialState = [];

/* Reducers */
export default handleActions({
    [GET_ALL_IDENTIFICATION_SUCCESS]: (state, action) => { 
        debugger;
        return ([
        ...action.payload.identifications
    ])}
}, initialState);

/* Selectors */
const getIdentifications = state => state.identifications;

export const selectors = {
    getIdentifications
};