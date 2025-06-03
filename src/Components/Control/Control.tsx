import styles from './Control.module.scss';
import { useAppSelector, useAppDispatch } from '../../Store/hooks';
import { listFilter, clearCompleted } from '../../Store/Slices/todosSlice';

export const Control = () => {
    const dispatch = useAppDispatch();
    const list = useAppSelector((state) => state.todos.list);
    const filterState = useAppSelector((state) => state.todos.filterStatus);
    const activeTaskCounter = list.filter(item => !item.completed);
    
    return (
        <div className={styles.control}>
            <span className={styles.counter}>{activeTaskCounter.length} items left</span>
            <div className={styles.control__filters}>
                <button
                    className={`${styles.control__filterBtn}
                    ${filterState == 'all' ? styles.active : ''}`}
                    onClick={() => dispatch(listFilter('all'))}>All</button>

                <button
                    className={`${styles.control__filterBtn}
                    ${filterState == 'active' ? styles.active : ''}`}
                    onClick={() => dispatch(listFilter('active'))}>Active</button>

                <button
                    className={`${styles.control__filterBtn}
                    ${filterState == 'completed' ? styles.active : ''}`}
                    onClick={() => dispatch(listFilter('completed'))}>Completed</button>
            </div>
            <button
                className={styles.control__clearBtn}
                onClick={()=> dispatch(clearCompleted())}>Clear completed</button>
        </div>
    );
};