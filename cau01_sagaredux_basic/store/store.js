// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import todoReducer from './toDoSlice';

// Tạo Saga middleware
const sagaMiddleware = createSagaMiddleware();

// Tạo Store
const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

// Chạy Saga
sagaMiddleware.run(rootSaga);

export default store;
