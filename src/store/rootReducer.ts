import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import {goodsReducer} from "./modules/Goods/reducer";
import {accountReducer} from "./modules/Account/reducer";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    timeout: 120000,
    whitelist: [],
};

const rootReducer = combineReducers({
    goods: goodsReducer,
    account: accountReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const persistedRootReducer = persistReducer(persistConfig, rootReducer);
