import {RootState} from "../../../rootReducer";

export const goodsListSelector = (state: RootState) => state.goods.goodsList;
