import {all} from 'redux-saga/effects';

import indentificationSaga from '../modules/indentification/saga/indentificationSaga';

export default function* watchMany() {
    yield all([
        indentificationSaga(),
    ]);
};