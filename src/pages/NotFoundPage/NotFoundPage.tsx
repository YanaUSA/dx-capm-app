import image from '../NotFoundPage/404_pages.jpg';
import styles from './NotFoundPage.module.scss';

const NotFoundPage: React.FC = () => {
  return (
    <div className={styles. errorContainer}>
      <img src={image} alt="error 404" style={{ borderRadius: '5px' }} />
    </div>
  );
};

export default NotFoundPage;
