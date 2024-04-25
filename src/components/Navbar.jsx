import styles from "../components/navbar.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
  return (
    <div className={`container-fluid ${styles.container}`}>
      <div className={`container ${styles.messagecontainer}`}>
        Encryption and Decryption
      </div>
    </div>
  );
}
