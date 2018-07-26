import { call, put, takeEvery /* , takeLatest */ } from 'redux-saga/effects';

const Api = {
  fetchUser: () => {
    return setTimeout(() => {
      console.log('ran');
      return { name: 'test user' };
    }, 1000);
  },
};

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
  try {
    const user = yield call(Api.fetchUser, action.payload.userId);
    yield put({ type: 'USER_FETCH_SUCCEEDED', user });
  } catch (error) {
    yield put({ type: 'USER_FETCH_FAILED', message: error.message });
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery('USER_FETCH_REQUESTED', fetchUser);
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.

  function* mySaga() {
    yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
  }

*/

export default mySaga;
