import {all, call, spawn} from 'redux-saga/effects';
import {rootGoodsSaga} from "./modules/Goods/sagas";

export function* rootSaga() {
  console.log('rootSagaStarted');
  const sagas: any[] = [rootGoodsSaga];
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
