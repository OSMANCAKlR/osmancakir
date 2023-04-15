import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/Footer.module.css";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer id={styles.footer}>
      <div className="container">
        <div className="row">
          <div className={styles.footer__wrapper}>
            <div className={styles.footer__name}>
              <h3 className={styles.footer__title}>OSMAN CAKIR</h3>
              <p className={styles.footer__para}>
                A Web Developer with a Frontend focus, I specialize in
                constructing the visual and interactive components of Websites
                and Web Applications, playing a crucial role in the triumph of
                the final product.
              </p>
            </div>
            <div className={styles.social__links}>
              <h2 className={styles.social__title}>SOCIALS</h2>
              <a href="https://github.com/OSMANCAKlR" target="_blank">
                <FontAwesomeIcon icon={faGithub} className={styles.icons} />
              </a>
              <a
                href="https://www.linkedin.com/in/osman-cakir1/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedinIn} className={styles.icons} />
              </a>
              <a  target="_blank" rel="no-refferer" href="../assets/OsmanCakirResume.pdf">
                <FontAwesomeIcon icon={faFile} className={styles.icons} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
