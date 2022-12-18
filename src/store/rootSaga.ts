import {all, call, spawn} from 'redux-saga/effects';
import {rootGoodsSaga} from "./modules/Goods/sagas";
import {rootAccountSaga} from "./modules/Account/sagas";

export function* rootSaga() {
  const sagas: any[] = [rootGoodsSaga, rootAccountSaga];

  yield all([
    ...sagas.map(saga =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (error) {
            console.log(error);
          }
        }
      }),
    ),
  ]);
}
