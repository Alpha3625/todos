import todosReducer, { addTodo, completeTodo, clearCompleted, listToggle, listFilter, setField } from '../Slices/todosSlice.ts';

describe('todosSlice', () => {
  const initialState = {
    list: [],
    isOpen: true,
    filterStatus: 'all',
    field: '',
  };

  it('should return the initial state when no action is provided', () => {
    expect(todosReducer(undefined, { type: '' })).toEqual(initialState);
  });

  it('should handle addTodo', () => {
    const newTodoText = 'New task';
    const action = addTodo(newTodoText);
    const nextState = todosReducer(initialState, action);

    expect(nextState.list.length).toBe(1);
    expect(nextState.list[0].text).toBe(newTodoText);
    expect(nextState.list[0].completed).toBe(false);
  });

  it('should handle completeTodo', () => {
    const initialStateWithTodo = {
      ...initialState,
      list: [{ id: 1, text: 'Test task', completed: false }],
    };
    const action = completeTodo(1);
    const nextState = todosReducer(initialStateWithTodo, action);

    expect(nextState.list[0].completed).toBe(true);
  });

  it('should handle clearCompleted', () => {
    const initialStateWithCompletedTasks = {
      ...initialState,
      list: [
        { id: 1, text: 'Test task 1', completed: true },
        { id: 2, text: 'Test task 2', completed: false },
      ],
    };
    const action = clearCompleted();
    const nextState = todosReducer(initialStateWithCompletedTasks, action);

    expect(nextState.list.length).toBe(1);
    expect(nextState.list[0].text).toBe('Test task 2');
  });

  it('should handle listToggle', () => {
    const action = listToggle();
    const nextState = todosReducer(initialState, action);

    expect(nextState.isOpen).toBe(false);

    const nextToggleState = todosReducer(nextState, action);
    expect(nextToggleState.isOpen).toBe(true);
  });

  it('should handle listFilter', () => {
    const newFilter = 'completed';
    const action = listFilter(newFilter);
    const nextState = todosReducer(initialState, action);

    expect(nextState.filterStatus).toBe(newFilter);
  });

  it('should handle setField', () => {
    const newField = 'Search field';
    const action = setField(newField);
    const nextState = todosReducer(initialState, action);

    expect(nextState.field).toBe(newField);
  });
});
