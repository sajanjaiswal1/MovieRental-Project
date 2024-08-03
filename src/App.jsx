import "./App.css";
import MyRoutes from "./MyRoutes";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { PersistGate } from "redux-persist/integration/react";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { movieReducer } from "./assets/Redux/movieReducer";
import { cartReducer } from "./assets/Redux/cartReducers";
import { Provider, useDispatch } from "react-redux";
import { useEffect } from "react";
import { thunk } from "redux-thunk";
import userInfoReducer from "./assets/Redux/userInfoReducer";

function App() {
  const rootReducer = combineReducers({
    movieStore: movieReducer,
    cartStore: cartReducer,
    userInfoStore:userInfoReducer 
  });

  const persistConfig = {
    key: "root",
    storage,
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  let store = createStore(persistedReducer, applyMiddleware(thunk));
  let persistor = persistStore(store);

 

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MyRoutes />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
