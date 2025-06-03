import styles from './Item.module.scss';
import { useAppSelector } from '../../Store/hooks';
import { CheckBox } from '../Checkbox/Checkbox';

interface IItem {
    todo: ITodo;
}

export const Item = ({todo}: IItem) => {
    const listIsOpen = useAppSelector((state) => state.todos.isOpen);

    return (
        <li className={`${styles.item} ${listIsOpen ? styles.active : ''}`}>
            <CheckBox todo={todo} />
            <span className={`${styles.item__text} ${todo.completed ? styles.completed : ''}`}>{todo.text}</span>
        </li>
    );
};