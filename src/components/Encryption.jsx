import styles from "../components/home.module.css";
import enc from "../images/encryption.jpg";
export default function Encryption() {
  return (
    <>
      <div className={styles.encryption}>
        <div className={styles.whatisenc}>What is Encryption?</div>
        <div className={styles.enc}>
          <img src={enc} alt="enc image" className={styles.encimages} />
          <div className={styles.enctheory}>
            <div className={styles.enctext}>
              Encryption is a process of converting data or information into a
              form that is unintelligible to unauthorized parties. It's a
              fundamental aspect of modern computing and information security,
              used to protect sensitive data from being accessed by unauthorized
              users.
            </div>
            <div className={styles.advantageous}>
              <p>
                <span>Confidentiality:</span> Encryption ensures only authorized
                users can access data.
              </p>
              <p>
                <span>Data Integrity:</span> Encrypting data detects
                unauthorized changes or tampering.
              </p>
              <p>
                <span>Privacy Protection:</span> Encryption safeguards sensitive
                information from unauthorized access.
              </p>
              <p>
                <span>Compliance:</span>
                Encryption helps meet regulatory requirements for data
                protection.
              </p>
              <p>
                <span>Secure Communication:</span> Encryption secures online
                transactions and communication channel
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
