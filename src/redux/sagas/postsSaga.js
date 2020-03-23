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

function* postsSaga() {
  yield takeEvery('GET_POSTS', getPosts);

}

export default postsSaga;