import {call, put} from "redux-saga/effects";
import {getProducts} from "../../../../api/getGoods";
import {LOAD_GOODS_SUCCESS} from "../actions";
import {Product} from "../../../../types/Product";

export function* loadGoodsSaga() {
  console.log('loadGoodsSaga started!');
  const data: Product[] = yield call(getProducts);

  yield put({type: LOAD_GOODS_SUCCESS, payload: data});
}
