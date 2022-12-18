import {call, put} from "redux-saga/effects";
import {getProducts} from "../../../../api/getGoods";
import {LOAD_GOODS_FAILED, LOAD_GOODS_SUCCESS} from "../actions";
import {Product} from "../../../../types/Product";

export function* loadGoodsSaga() {
  try {
    const goods: Product[] = yield call(getProducts);

    yield put({type: LOAD_GOODS_SUCCESS, payload: goods});
  } catch {
    const failedData = 'Load goods Error!';
    yield put({type: LOAD_GOODS_FAILED, payload: failedData});
  }
}
