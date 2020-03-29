import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* getUsers() {
  try {
    console.log('from sagas getUsers');
    const userResponse = yield axios.get('/admin')
    console.log('in the GET getUsers', userResponse)
    yield put({
      type: 'SET_USERS',
      payload: userResponse.data
    })
  } catch (error) {
    console.log("error in getUsers Sagas", error);
  }
}
function* deleteUser(action) {
  console.log('in delete user', action.payload);
    yield axios.delete(`/admin/${action.payload}`)
        .catch((error) => {
            console.log(error);
        });
    yield put({ type: 'GET_USERS' });
}


function* adminSaga() {
  yield takeEvery('GET_USERS', getUsers);
  yield takeEvery ('DELETE_USER', deleteUser);
}

export default adminSaga;