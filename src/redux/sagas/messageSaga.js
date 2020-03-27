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

// function* updatePost(action) {
//     let objectToSend = action.payload;
//     console.log('in updatePost', objectToSend);
//     yield axios.put(`/post/${objectToSend.postId}`, objectToSend)
//     .catch((error) => {
//         console.log(error);
//     });
//     yield put ({ type: 'GET_POSTS' });
// }

// function* deletePost(action) {
//     yield axios.delete(`/post/${action.payload}`)
//         .catch((error) => {
//             console.log(error);
//         });
//     yield put({ type: 'GET_POSTS' });
// }

function* messageSaga() {
    yield takeEvery('SEND_MESSAGE', addMessage);
    yield takeEvery('GET_MESSAGES', getMessages);
    // yield takeEvery('DELETE_POST', deletePost);
    // yield takeEvery('UPDATE_POST', updatePost);

}

export default messageSaga;
