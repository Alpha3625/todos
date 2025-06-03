import { Control } from '../Control/Control';
import { Field } from '../Field/Field';
import { List } from '../List/List';
import styles from './TodosApp.module.scss';

export const TodosApp = () => {
    return (
        <div className={styles.todosApp}>
            <Field />
            <List />
            <Control />
        </div>
    );
};