import {RootState} from "../../../rootReducer";

export const goodsListSelector = (state: RootState) => state.goods.goodsList;
export const goodsErrorSelector = (state: RootState) => state.goods.error;
export const goodsLoadingStatusSelector
  = (state: RootState) => state.goods.loading;
