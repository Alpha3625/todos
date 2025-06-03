import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ITodosState {
    list: ITodo[];
    isOpen: boolean;
    filterStatus: string;
    field: string
}

const initialState: ITodosState = {
    list: JSON.parse(localStorage.getItem('list') || '[]'),
    isOpen: JSON.parse(localStorage.getItem('listIsOpen') || 'false'),
    filterStatus: JSON.parse(localStorage.getItem('filterStatus') || '"all"'),
    field: '',
}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            const newTodo: ITodo = {
                id: Date.now(),
                text: action.payload,
                completed: false,
            };
            state.list = [...state.list, newTodo];
        },
        completeTodo: (state, action: PayloadAction<number>) => {
            state.list = state.list.map(item => 
                item.id === action.payload ? {...item, completed: !item.completed} : item
            );
        },
        clearCompleted: (state) => {
            state.list = state.list.filter(item => !item.completed);
        },
        listToggle: (state) => {
            state.isOpen = !state.isOpen;
        },
        listFilter: (state, action: PayloadAction<string>) => {
            state.filterStatus = action.payload;
        },
        setField: (state, action: PayloadAction<string>) => {
            state.field = action.payload;
        },
    },
});

export const { addTodo, completeTodo, clearCompleted, listToggle, listFilter, setField } = todosSlice.actions;
export default todosSlice.reducer;