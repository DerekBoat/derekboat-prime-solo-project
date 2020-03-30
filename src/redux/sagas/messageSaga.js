import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* getMessages(action) {
    try {
        console.log('from sagas getMessages');
        const messageResponse = yield axios.get(`/message/${action.payload}`)
        console.log('in the GET getPosts', messageResponse)
        yield put({
            type: 'SET_MESSAGES',
            payload: messageResponse.data
        })
    } catch (error) {
        console.log("error in getPosts Sagas", error);
    }
}

function* addMessage(action) {
    let objectToSend = action.payload;
    console.log("in addMessage Saga", objectToSend);
    yield axios.post('/message', objectToSend)
        .catch((error) => {
            console.log(error);
        });
    // yield put({ type: 'GET_MESSAGES' });
}

function* deleteMessage(action) {
    yield axios.delete(`/message/${action.payload}`)
        .catch((error) => {
            console.log(error);
        });
}

function* messageSaga() {
    yield takeEvery('SEND_MESSAGE', addMessage);
    yield takeEvery('GET_MESSAGES', getMessages);
    yield takeEvery('DELETE_MESSAGE', deleteMessage);


}

export default messageSaga;
