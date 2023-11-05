import { configureStore } from "@reduxjs/toolkit";
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
import { carsReducer } from "./cars/carsSlice";
import { favReducer } from "./favorites/favSlice";
import { modalRefucer } from "./modal/modalSlice";


const favPersistConfig = {
  key: "favorites",
  storage,
};


export const store = configureStore({
  reducer: {
    cars: carsReducer,
    favorites: persistReducer(favPersistConfig, favReducer),
    modal: modalRefucer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);