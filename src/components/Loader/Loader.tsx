import { ThreeDots } from 'react-loader-spinner';
import styles from './Loader.module.scss';

const Loader = () => {
    return (
        <div className={styles.loaderContainer}>
            <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="#204ffe"
                ariaLabel="three-dots-loading"
                visible={true}
            />
        </div>
    );
};

export default Loader;
