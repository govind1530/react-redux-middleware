
import {takeLatest,put,delay} from 'redux-saga/effects';

function* addAgeSync(){
    yield delay(1000);
    yield put({type:'add_age_sage',payload:1})
}

export function* watchAddAge(){
    yield takeLatest('add_age',addAgeSync)
}