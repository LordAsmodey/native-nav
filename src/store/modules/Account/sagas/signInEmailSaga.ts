import {put} from "redux-saga/effects";
import {User} from "../../../../types/User";
import {
  firebaseAuth,
} from "../../../../utils/Firebase/firebaseConfig";
import {SIGN_IN_EMAIL_SUCCESS} from "../actions";

export function* SignInEmailSaga() {
  try {
    const {
      displayName,
      createdAt,
      email,
      phoneNumber,
      photoURL,
      uid,
      stsTokenManager: {
        accessToken,
        expirationTime,
        refreshToken,
      },
    } = yield firebaseAuth.currentUser;

    const user: User = {
      displayName,
      createdAt,
      email,
      phoneNumber,
      photoURL,
      uid,
      stsTokenManager: {
        accessToken,
        expirationTime,
        refreshToken,
      },
    };
    yield put({type: SIGN_IN_EMAIL_SUCCESS, payload: user});
  } catch (e) {
    yield put({type: SIGN_IN_EMAIL_SUCCESS, payload: e});
  }
}
