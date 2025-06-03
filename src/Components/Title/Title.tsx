import styles from './Title.module.scss';

interface ITitle {
    props: React.ReactNode;
}

export const Title = ({props}: ITitle) => {
    return (
        <h1 className={styles.title}>{props}</h1>
    );
};