import styles from './CheckBox.module.scss';
import Checkmark from '../../Assets/Checkmark.svg';
import { useAppDispatch } from '../../Store/hooks';
import { completeTodo } from '../../Store/Slices/todosSlice';

interface ICheckBox {
    todo: ITodo;
}

export const CheckBox = ({todo}: ICheckBox) => {
    const dispatch = useAppDispatch();

    return (
        <div
            className={`${styles.checkbox}
            ${todo.completed ? styles.active : ''}`}
            onClick={() => dispatch(completeTodo(todo.id))}>
            <img src={Checkmark} alt="checkmark"/>
        </div>
    );
}; 