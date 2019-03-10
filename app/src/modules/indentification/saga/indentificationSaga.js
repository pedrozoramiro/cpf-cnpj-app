import {takeEvery} from 'redux-saga/effects';

import {types as indentificationTypes, actions as indentificationActions} from '../redux/indentification';

import apiSaga from '../../../commons/saga/apiSaga';
import indentificationServices from './indentificationServices';


function* getAllIndentifications() {
    yield* apiSaga(
        indentificationServices.query,
        {},
        indentificationActions.storageIndenfications
    );
}

export default function* indentificationSaga() {
    yield takeEvery(indentificationTypes.GET_ALL_INDENTIFICATION_REQUEST, getAllIndentifications);

}