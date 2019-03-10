import {call, put} from 'redux-saga/effects';

const defaultSettings = {
    callSuccessFunction: false
};

export default function* apiSaga(fn, parameter, success, successMessageKey, failure, failureMessageKey, settings = {}) {
    const config = {...defaultSettings, ...settings};
    const {callSuccessFunction} = config;

    try {
        const response = yield call(fn, parameter);
        const data = response ? response.data : {};
        debugger;
        if (success) {
            yield (callSuccessFunction ? call(success, data) : put(success(data)));
        }
    } catch (error) {
        if (failure) {
            yield put(failure(error));
        }
    } 
}