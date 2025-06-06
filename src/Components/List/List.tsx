import styles from './List.module.scss';
import { Item } from '../Item/Item';
import { useAppSelector } from '../../Store/hooks';

export const List = () => {
    const list = useAppSelector((state) => state.todos.list);
    const filterStatus = useAppSelector((state) => state.todos.filterStatus);
    const listIsOpen = useAppSelector((state) => state.todos.isOpen);

    const handleFilter = list.filter(item => {
        if (filterStatus === 'active') return !item.completed;
        if (filterStatus === 'completed') return item.completed;
        return true;
    });

    const listHeight = listIsOpen && handleFilter.length < 1 ? 150 
                    : listIsOpen ? Math.min(handleFilter.length < 7 ? handleFilter.length * 50 : 300) 
                    : 0;

    return (
        <ul className={styles.list} style={{
            height: listHeight + 'px',
        }}>
            {handleFilter.length === 0 ? (
                <p className={styles.list__text}>Empty list</p>
            ) : (
                handleFilter.map(item => (
                    <Item key={item.id} todo={item} />
                ))
            )}
        </ul>
    );
};