import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './Slices/todosSlice';

const store = configureStore({
    reducer: {
        todos: todosReducer,
    },
});

store.subscribe(() => {
    localStorage.setItem('list', JSON.stringify(store.getState().todos.list));
    localStorage.setItem('listIsOpen', JSON.stringify(store.getState().todos.isOpen));
    localStorage.setItem('filterStatus', JSON.stringify(store.getState().todos.filterStatus));
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export default store;