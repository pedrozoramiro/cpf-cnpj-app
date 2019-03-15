import {takeEvery} from 'redux-saga/effects';

import {types as identificationTypes, actions as identificationActions} from './identificationReducer';

import apiSaga from '../../../commons/util/apiSaga';
import identificationServices from './identificationServices';


function* getAllIdentifications(filter) {
    yield* apiSaga(
        identificationServices.query,
        filter ? filter : {},
        identificationActions.storageIdenfications
    );
}


function* newIdentification(identification) {
    yield* apiSaga(
        identificationServices.newIdentification,
        identification,
        identificationActions.storageNewIdenfication,
    );
}

function* updateIdentification(identification) {
    yield* apiSaga(
        identificationServices.updateIdentification,
        identification,
        identificationActions.storageUpdateIdenfication
    );
}

function* removeIdentification(identification) {
    yield* apiSaga(
        identificationServices.deleteIdentification,
        identification,
        identificationActions.storageDeleteIdenfication
    );
}

export default function* identificationSaga() {
    yield takeEvery(identificationTypes.GET_ALL_IDENTIFICATIONS_REQUEST, getAllIdentifications);
    yield takeEvery(identificationTypes.NEW_IDENTIFICATION_REQUEST, newIdentification);
    yield takeEvery(identificationTypes.UPDATE_IDENTIFICATION_REQUEST, updateIdentification);
    yield takeEvery(identificationTypes.DELETE_IDENTIFICATION_REQUEST, removeIdentification);
}