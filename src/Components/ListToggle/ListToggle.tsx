import styles from './ListToggle.module.scss';
import { useAppDispatch, useAppSelector } from '../../Store/hooks';
import { listToggle } from '../../Store/Slices/todosSlice';

export const ListToggle = () => {
    const dispatch = useAppDispatch();
    const listIsOpen = useAppSelector((state) => state.todos.isOpen);

    return (
        <div
            className={`${styles.toggle} ${listIsOpen ? styles.active : ''}`}
            onClick={() => dispatch(listToggle())}>
            <svg
                width="512"
                height="512"
                version="1.1"
                viewBox="0 0 512 512">
                <path
                    d="M256 298.3l174.2-167.2c4.3-4.2 11.4-4.1 15.8.2l30.6 29.9c4.4 4.3 4.5 11.3.2 15.5L264.1 380.9c-2.2 2.2-5.2 3.2-8.1 3-3 .1-5.9-.9-8.1-3L35.2 176.7c-4.3-4.2-4.2-11.2.2-15.5L66 131.3c4.4-4.3 11.5-4.4 15.8-.2L256 298.3z"></path>
            </svg>
        </div>
    );
};