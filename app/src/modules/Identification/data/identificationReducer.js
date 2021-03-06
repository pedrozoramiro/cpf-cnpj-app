import { createAction, handleActions } from 'redux-actions';


/* Actions Types */
const GET_ALL_IDENTIFICATIONS_REQUEST = 'cpf-cnpj-app/idenfication/GET_ALL_IDENTIFICATIONS_REQUEST';
const GET_ALL_IDENTIFICATIONS_SUCCESS = 'cpf-cnpj-app/idenfication/GET_ALL_IDENTIFICATIONS_SUCCESS';
const NEW_IDENTIFICATION_REQUEST = 'cpf-cnpj-app/idenfication/NEW_IDENTIFICATION_REQUEST';
const UPDATE_IDENTIFICATION_REQUEST = 'cpf-cnpj-app/idenfication/UPDATE_IDENTIFICATION_REQUEST';
const DELETE_IDENTIFICATION_REQUEST = 'cpf-cnpj-app/idenfication/DELETE_IDENTIFICATION_REQUEST';
const DELETE_IDENTIFICATION_SUCCESS = 'cpf-cnpj-app/idenfication/DELETE_IDENTIFICATION_SUCCESS';
const NEW_IDENTIFICATION_SUCCESS = 'cpf-cnpj-app/idenfication/NEW_IDENTIFICATION_SUCCESS';
const UPDATE_IDENTIFICATION_SUCCESS = 'cpf-cnpj-app/idenfication/UPDATE_IDENTIFICATION_SUCCESS';


export const types = {
    GET_ALL_IDENTIFICATIONS_REQUEST: GET_ALL_IDENTIFICATIONS_REQUEST,
    GET_ALL_IDENTIFICATIONS_SUCCESS: GET_ALL_IDENTIFICATIONS_SUCCESS,
    NEW_IDENTIFICATION_REQUEST: NEW_IDENTIFICATION_REQUEST,
    UPDATE_IDENTIFICATION_REQUEST: UPDATE_IDENTIFICATION_REQUEST,
    NEW_IDENTIFICATION_SUCCESS: NEW_IDENTIFICATION_SUCCESS,
    UPDATE_IDENTIFICATION_SUCCESS: UPDATE_IDENTIFICATION_SUCCESS,
    DELETE_IDENTIFICATION_REQUEST: DELETE_IDENTIFICATION_REQUEST,
    DELETE_IDENTIFICATION_SUCCESS:DELETE_IDENTIFICATION_SUCCESS

};

/* Actions */
const newIdentification = createAction(NEW_IDENTIFICATION_REQUEST);
const updateIdentification = createAction(UPDATE_IDENTIFICATION_REQUEST);
const getAllIdenfications = createAction(GET_ALL_IDENTIFICATIONS_REQUEST);
const deleteIdentification = createAction(DELETE_IDENTIFICATION_REQUEST);

const storageIdenfications = createAction(GET_ALL_IDENTIFICATIONS_SUCCESS);
const storageNewIdenfication = createAction(NEW_IDENTIFICATION_SUCCESS);
const storageUpdateIdenfication = createAction(UPDATE_IDENTIFICATION_SUCCESS);
const storageDeleteIdenfication = createAction(DELETE_IDENTIFICATION_SUCCESS);

export const actions = {
    getAllIdenfications,
    newIdentification,
    updateIdentification,
    deleteIdentification,

    storageIdenfications,
    storageNewIdenfication,
    storageUpdateIdenfication,
    storageDeleteIdenfication
};

/* State */
const initialState = [];

/* Reducers */
export default handleActions({
    [GET_ALL_IDENTIFICATIONS_SUCCESS]: (state, action) => ([
        ...action.payload.identifications
    ]),
    [NEW_IDENTIFICATION_SUCCESS]: (state, action) => {
        return insertItem(state, action.payload);
    },
    [UPDATE_IDENTIFICATION_SUCCESS]: (state, action) => {
        return updateItemInArray(state, action.payload.id, () => {
            return action.payload;
        })
    },
    [DELETE_IDENTIFICATION_SUCCESS]: (state, action) => {
        return removeItem(state, action.payload);
    },
}, initialState);


//https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns
export function updateItemInArray(array, itemId, updateItemCallback) {
    let retorno = array.map(item => {
        if (item.id !== itemId) {
            // Since we only want to update one item, preserve all others as they are now
            return item;
        }
        // Use the provided callback to create an updated item
        return updateItemCallback(item);
    });

    return retorno;
}

function removeItem(array, itemId) {
    return array.filter(item=>item.id !== itemId.id)
  }
  
function insertItem(array, item) {
    let newArray = array.slice()
    newArray.splice(array.indexOf(item), 0, item)
    return newArray
}



/* Selectors */
const getIdentifications = state => state.identifications;

export const selectors = {
    getIdentifications
};