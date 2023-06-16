import { configureStore } from '@reduxjs/toolkit';
// import { createStore } from 'redux';
import { reducer } from './reducer';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

// import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// Редьюсер который принимает state и action, перебирает и провереряет по типу(type)
// action'ы по совпадению с case 'type' и возвращает новый объект state который с начала унжно
// распылить, а потом менять то или иное значение которое хранится в action.payload
// reduser обязательно ВОЗВРАЩАЕТ state
// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'plus':
//       return {
//         ...state,
//         number: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// создаём хранилище store где вызываем функцию createStore(которая принимает 2 параметра
// reduser и ОБЪЕКТ state)
// export const store = createStore(reducer, { number: 0, numbers: [] });

// export const store = configureStore({ reducer });

// Обращаемся к хранилищу (store) через функцию dispatch(Аналог setState)
// которая принимает объект action с обязательным полем type - это то
// что мы собираемся изменить и значение payload - на что мы меняем
// store.dispatch({ type: 'plus', payload: 1 });

// console.log(store.getState());

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
