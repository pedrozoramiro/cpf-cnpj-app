import {createAction, handleActions} from 'redux-actions';


/* Actions Types */
const GET_ALL_INDENTIFICATION_REQUEST = 'cpf-cnpj-app/indenfication/GET_ALL_INDENTIFICATION_REQUEST';
const GET_ALL_INDENTIFICATION_SUCCESS = 'cpf-cnpj-app/indenfication/GET_ALL_INDENTIFICATION_SUCCESS';

export const types = {
    GET_ALL_INDENTIFICATION_REQUEST: GET_ALL_INDENTIFICATION_REQUEST,
    GET_ALL_INDENTIFICATION_SUCCESS: GET_ALL_INDENTIFICATION_SUCCESS
};

/* Actions */
const getAllIndenfications = createAction(GET_ALL_INDENTIFICATION_REQUEST);
const storageIndenfications = createAction(GET_ALL_INDENTIFICATION_SUCCESS);

export const actions = {
    getAllIndenfications,
    storageIndenfications
};

/* State */
const initialState = [];

/* Reducers */
export default handleActions({
    [GET_ALL_INDENTIFICATION_SUCCESS]: (state, action) => { 
        debugger;
        return ([
        ...action.payload.indetfications
    ])}
}, initialState);

/* Selectors */
const getIndentifications = state => state.indetfications;

export const selectors = {
  getIndentifications
};