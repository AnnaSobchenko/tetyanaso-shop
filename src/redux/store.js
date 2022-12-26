import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import productsReducer from "./products/productsSlice";


const productsPersistConfig = {
  key: "arts",
  storage,
//   whitelist: [],
};

const productsPersistedReducer = persistReducer(
    productsPersistConfig,
    productsReducer
);

const store = configureStore({
  reducer: {    
    arts: productsPersistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  //   devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);

export default store;