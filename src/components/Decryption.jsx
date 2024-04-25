import dec from "../images/decryption.jpg";
import styles from "../components/home.module.css";
export default function Decryption() {
  return (
    <>
      <div className={styles.decryption}>
        <div className={styles.whatisdec}>What is Decryption?</div>
        <div className={styles.dec}>
          <div className={styles.dectheory}>
            <p className={styles.dectext}>
              Decryption is the process of converting encrypted data
              (ciphertext) back into its original, readable form (plaintext).
              It's the reverse of encryption, typically performed using a
              decryption algorithm and the correct decryption key. Decryption
              allows authorized users to access and understand encrypted data,
              restoring its original meaning and making it usable for its
              intended purpose.
            </p>
            <div className={styles.advantageous}>
              <p>
                <span>Access to Encrypted Data:</span>Decryption allows
                authorized users to access and use encrypted information
                securely.
              </p>
              <p>
                <span>Data Utilization: </span>Decryption enables users to work
                with encrypted data for productivity and decision-making.
              </p>
              <p>
                <span>Data Integrity Verification:</span>Decryption confirms
                that encrypted data hasn't been tampered with, maintaining its
                trustworthiness.
              </p>
              <p>
                <span>Compliance:</span>
                Decryption helps meet regulatory requirements for secure data
                access.
              </p>
            </div>
          </div>
          <img src={dec} alt="dec image" className={styles.encimages} />
        </div>
      </div>
    </>
  );
}
