import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import auth from "./AuthReducer";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";

const Store = () => {
  const persistConfig = {
    key: "root",
    storage: storage,
    whitelist: ["auth", "categories"],
  };
  const pertReducer = persistReducer(
    persistConfig,
    combineReducers({ auth: auth })
  );
  const middleWare = applyMiddleware(thunk);
  return createStore(pertReducer, middleWare);
};

export default Store;
