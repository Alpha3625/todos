import {KeyboardEvent, useCallback} from 'react';
import styles from './Field.module.scss';
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { addTodo, setField } from '../../Store/Slices/todosSlice';
import { ListToggle } from '../ListToggle/ListToggle';

export const Field = () => {
    const dispatch = useAppDispatch();
    const field = useAppSelector((state) => state.todos.field);

    const handleAddTodo = useCallback(() => {
        if (field.trim().length > 0) {
            dispatch(addTodo(field));
            dispatch(setField(''));
        }
    }, [dispatch, field]);

    const handleKeyDown = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Enter') {
            handleAddTodo();
        }
    }, [handleAddTodo]);
    
    return (
        <div className={styles.field}>
            <ListToggle />
            <input
                type="text"
                name="field"
                value={field}
                onChange={(e) => dispatch(setField(e.target.value))}
                placeholder="What needs to be done?"
                onKeyDown={handleKeyDown}/>
            
            <button className={styles.addButton} onClick={handleAddTodo}>add</button>
        </div>
    );
};