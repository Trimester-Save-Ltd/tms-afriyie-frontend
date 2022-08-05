import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./userReducer";


const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["user"], // which reducer want to store
};

const rootReducer = combineReducers({
  user: userReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
