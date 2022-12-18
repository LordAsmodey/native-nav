import {User} from "../../../../types/User";
import {AnyAction} from "redux";
import {
  SIGN_IN_EMAIL,
  SIGN_IN_EMAIL_SUCCESS,
  SIGN_IN_EMAIL_FAILED
} from "../actions";

type State = {
  loading: boolean,
  error: string | null,
  user: User | null
};

type Actions = AnyAction;

const INITIAL_STATE: State = {
  loading: false,
  error: null,
  user: null,
};

export const accountReducer = (state = INITIAL_STATE, action: Actions) => {
  switch (action.type){
    case SIGN_IN_EMAIL:
      return {
        ...state,
        loading: true,
      };

    case SIGN_IN_EMAIL_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };

    case SIGN_IN_EMAIL_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }

};
