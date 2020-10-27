import { takeLatest, put, all, call, take } from 'redux-saga/effects';
import {
  auth,
  createUserProfileDocument,
  getLoggedUser,
  provider,
} from '../../firebase/firebase.utils';
import {
  signInError,
  signInSuccess,
  signOutFailure,
  signOutSuccess,
  signUpError,
  signUpSuccess,
} from './user.actions';
import UserActionTypes from './user.types';

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

function* signUp({ payload }) {
  const { displayName, email, password, confirmPassword } = payload;
  debugger;
  if (password !== confirmPassword) {
    alert("Passwords don't match");
  }

  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    const userRef = yield createUserProfileDocument(user, { displayName });
    const userSnapshot = yield userRef.get();
    yield put(signUpSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signUpError(error));
  }
}

function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    put(signOutFailure(error));
  }
}

function* isUserAuthenticated() {
  try {
    const userAuth = yield getLoggedUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {}
}

function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(provider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    put(signInError(error));
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInError(error));
  }
}

function* getSnapshotFromUserAuth(user) {
  try {
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInError(error));
  }
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
  ]);
}
