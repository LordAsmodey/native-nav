import {takeEvery} from "redux-saga/effects";
import {loadGoodsSaga} from "./getGoodsSaga";
import {LOAD_GOODS} from "../actions";

export function* rootGoodsSaga() {
  yield takeEvery(LOAD_GOODS, loadGoodsSaga);
}
