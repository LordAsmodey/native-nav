import {Product} from "../../../../types/Product";
import {LOAD_GOODS, LOAD_GOODS_FAILED, LOAD_GOODS_SUCCESS} from "../actions";

interface State {
  loading: boolean,
  error: string | null,
  goodsList: Product[],
}

type Actions = ReturnType<any>;

const INITIAL_STATE: State = {
  loading: false,
  error: null,
  goodsList: [],
};

export const goodsReducer = (state = INITIAL_STATE, action: Actions): State => {
  switch (action.type) {
    case LOAD_GOODS: {
      return {
        ...state,
        loading: true,
      };
    }

    case LOAD_GOODS_SUCCESS: {
      return {
        ...state,
        goodsList: action.payload,
        loading: false,
      };
    }

    case LOAD_GOODS_FAILED: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    }
    default:
      return state;
  }
};
