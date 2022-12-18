import {takeEvery} from "redux-saga/effects";
import {SIGN_IN_EMAIL} from "../actions";
import {SignInEmailSaga} from "./signInEmailSaga";

export function* rootAccountSaga() {
  yield takeEvery(SIGN_IN_EMAIL, SignInEmailSaga);
}
