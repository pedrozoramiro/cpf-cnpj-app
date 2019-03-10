import {takeEvery} from 'redux-saga/effects';

import {types as identificationTypes, actions as identificationActions} from './identificationReducer';

import apiSaga from '../../../commons/apiSaga';
import identificationServices from './identificationServices';


function* getAllIdentifications() {
    yield* apiSaga(
        identificationServices.query,
        {},
        identificationActions.storageIdenfications
    );
}

export default function* identificationSaga() {
    yield takeEvery(identificationTypes.GET_ALL_IDENTIFICATION_REQUEST, getAllIdentifications);

}