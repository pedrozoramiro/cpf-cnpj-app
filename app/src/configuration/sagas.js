import {all} from 'redux-saga/effects';

import identificationSaga from '../modules/Identification/data/identificationSaga';

export default function* watchMany() {
    yield all([
        identificationSaga(),
    ]);
};