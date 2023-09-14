import styles from './Footer.module.scss';

const Footer: React.FC = () => {
    return (
        <>
            <footer className={styles.footer} aria-label="application footer">
                <p
                    className={styles.developedBy}
                    aria-label="footer-description"
                >
                    Designed by Dexola - 2023
                </p>
                <p className={styles.copywrite} aria-label="footer-description">
                    &#169; All rights reserved
                </p>
            </footer>
        </>
    );
};

export default Footer;
