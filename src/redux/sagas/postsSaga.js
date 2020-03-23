import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* getPosts() {
    try {
        console.log('from sagas getPosts');
        const postResponse = yield axios.get('/post')
        console.log('in the GET getPosts', postResponse)
        yield put({
            type: 'SET_POSTS',
            payload: postResponse.data
        })
    } catch (error) {
        console.log("error in getPosts Sagas", error);
    }
}

function* addPost(action) {
    let objectToSend = action.payload;
    yield axios.post('/post', objectToSend)
        .catch((error) => {
            console.log(error);
        });
    yield put({ type: 'GET_POSTS' });
}

function* updatePost(action) {
    let objectToSend = action.payload;
    console.log('in updatePost', objectToSend);
    yield axios.put(`/post/${objectToSend.postId}`, objectToSend)
    .catch((error) => {
        console.log(error);
    });
    yield put ({ type: 'GET_POSTS' });
}

function* deletePost(action) {
    yield axios.delete(`/post/${action.payload}`)
        .catch((error) => {
            console.log(error);
        });
    yield put({ type: 'GET_POSTS' });
}

function* postsSaga() {
    yield takeEvery('GET_POSTS', getPosts);
    yield takeEvery('ADD_POST', addPost);
    yield takeEvery('DELETE_POST', deletePost);
    yield takeEvery('UPDATE_POST', updatePost);

}

export default postsSaga;
