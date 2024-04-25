import { useState } from "react";
import styles from "../components/caesar.module.css";
import mono1 from "../images/mono1.jpg";
import questions from "../components/monoquestions";
import Quizz1 from "./Quizz1";
import { NavLink } from "react-router-dom";
export default function Monoalphabetic() {
  const [plaintext, setplaintext] = useState("");
  const [decrypttext, setdecrypttext] = useState("");
  const [ciphertext, setciphertext] = useState(" ");
  const [decryptresult, setDecryptResult] = useState("");
  const encryptionKey = {
    A: "Q",
    B: "W",
    C: "E",
    D: "R",
    E: "T",
    F: "Y",
    G: "U",
    H: "I",
    I: "O",
    J: "P",
    K: "A",
    L: "S",
    M: "D",
    N: "F",
    O: "G",
    P: "H",
    Q: "J",
    R: "K",
    S: "L",
    T: "Z",
    U: "X",
    V: "C",
    W: "V",
    X: "B",
    Y: "N",
    Z: "M",
  };

  const encrypt = () => {
    const plaintextUpperCase = plaintext.toUpperCase();
    let result = "";
    for (let i = 0; i < plaintextUpperCase.length; i++) {
      const currentLetter = plaintextUpperCase[i];
      result += encryptionKey[currentLetter] || currentLetter;
    }
    setciphertext("Encrypted message is:" + result);
  };
  const decrypt = () => {
    let result = "";
    for (let i = 0; i < decrypttext.length; i++) {
      const currentLetter = decrypttext[i];
      const plaintextLetter = Object.keys(encryptionKey).find(
        (key) => encryptionKey[key] === currentLetter
      );
      result += plaintextLetter || currentLetter;
    }
    setDecryptResult("Decrypted message is: " + result);
  };
  return (
    <div className={`container ${styles.monocontainer}`}>
      <div className={styles.definitionimage}>
        <div className={styles.def}>Definition</div>
        <div className={styles.defcontent}>
          The Monoalphabetic Cipher is a basic substitution cipher where each
          letter in the plaintext is consistently replaced by a corresponding
          letter in the ciphertext. It operates on the principle of a fixed
          mapping between plaintext and ciphertext characters, preserving the
          order of letters in the alphabet. Despite its simplicity and ease of
          implementation, the Monoalphabetic Cipher is vulnerable to various
          cryptanalysis techniques, such as frequency analysis, due to its
          predictable letter substitutions. It is historically significant and
          serves educational purposes, but its weak security makes it unsuitable
          for modern encryption needs.
        </div>
        <div className={styles.image}>
          <img src={mono1} alt="image" className={styles.images} />
        </div>
      </div>
      <div className={styles.algorithm}>
        <div className={styles.algohead}>Using a Monoalphabetic Cipher</div>
        <div className={styles.steps}>
          <ul>
            <li>
              <span>Key Generation:</span> Create a fixed mapping between
              plaintext and ciphertext letters. This mapping constitutes the
              encryption and decryption key.{" "}
            </li>
            <li>
              <span>Encryption:</span> For each letter in the plaintext,
              substitute it with the corresponding letter from the ciphertext
              according to the chosen mapping. Maintain the case of the letters
              (uppercase or lowercase).
            </li>
            <li>
              <span>Decryption: </span>
              Given the ciphertext, reverse the mapping to find the original
              plaintext.
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.adv}>
        <div className={styles.advcontent}>Advantages</div>
        <div className={styles.advpoints}>
          <ol>
            <li>
              <span>Simplicity:</span> The Monoalphabetic Cipher is easy to
              understand and implement, making it accessible for beginners and
              educational purposes.
            </li>
            <li>
              <span>Historical Significance:</span> It has historical
              significance and was used in various historical contexts, making
              it interesting for educational and historical studies.
            </li>
            <li>
              <span>Flexibility:</span> The encryption key (letter mapping) can
              be easily modified to create different versions of the cipher,
              providing some level of customization for specific use cases.
            </li>
            <li>
              <span>Minimal Resources:</span> It requires minimal computational
              resources and can be performed manually without the need for
              complex machinery, making it suitable for simple encryption tasks.
            </li>
            <li>
              <span>Ease of Memorization:</span> The encryption and decryption
              key (letter mapping) can be easily memorized, facilitating
              communication among users without the need for extensive
              documentation or complex procedures.
            </li>
          </ol>
        </div>
      </div>
      <div className={styles.dis}>
        <div className={styles.discontent}>Disadvantages</div>
        <div className={styles.dispoints}>
          <ol>
            <li>
              {" "}
              <span>Weak Security: </span>
              The Monoalphabetic Cipher is relatively weak compared to modern
              encryption methods. Its predictable letter substitutions make it
              vulnerable to various cryptanalysis techniques, such as frequency
              analysis and known-plaintext attacks.
            </li>
            <li>
              <span>Limited Key Space:</span> The number of possible keys (26!
              for the English alphabet) is relatively small, making brute-force
              attacks feasible with modern computing resources. This limited key
              space reduces the strength of the encryption and increases the
              likelihood of successful attacks.
            </li>
            <li>
              <span>Preservation of Letter Frequency: </span>
              The frequency of letters in the plaintext is preserved in the
              ciphertext, which can aid cryptanalysts in breaking the cipher.
              This lack of randomness makes the Monoalphabetic Cipher easier to
              crack using statistical analysis.
            </li>
            <li>
              <span>Vulnerability to Frequency Analysis: </span>
              Since each plaintext letter always maps to the same ciphertext
              letter, the Monoalphabetic Cipher is susceptible to frequency
              analysis. By analyzing the frequency of letters in the ciphertext,
              attackers can infer the mapping and decrypt the message.
            </li>
            <li>
              <span>Lack of Adaptability:</span> The fixed mapping between
              plaintext and ciphertext letters remains constant throughout the
              encryption and decryption process. This lack of adaptability
              limits the cipher is ability to withstand sophisticated attacks
              and adapt to changing security requirements.
            </li>
          </ol>
        </div>
      </div>

      <div className={styles.rules}>
        <div className={styles.rulescontent}> Rules for the Caesar Cipher</div>
        <div className={styles.rulespoints}>
          <ol>
            <li>
              <span>One-to-One Mapping:</span> Each letter in the plaintext is
              mapped to exactly one letter in the ciphertext, and vice versa.
              This ensures that each letter is uniquely substituted during
              encryption and decrypted back to its original letter during
              decryption.
            </li>
            <li>
              <span> Fixed Mapping: </span> The mapping between plaintext and
              ciphertext letters remains constant throughout the encryption and
              decryption process. This fixed mapping ensures consistency in the
              encryption and decryption procedures and simplifies the
              cryptographic algorithm.
            </li>
            <li>
              <span>Character Preservation: </span> Alphabetic characters are
              typically encrypted while preserving their case (uppercase or
              lowercase), while non-alphabetic characters remain unchanged. This
              preserves the structure and format of the original message and
              ensures readability of the decrypted message.
            </li>
            <li>
              <span>Alphabetic Characters Only:</span> Typically, only
              alphabetic characters are encrypted using the Monoalphabetic
              Cipher, while punctuation, spaces, and numbers remain unchanged.
              This simplifies the encryption and decryption process and reduces
              the complexity of the cipher.
            </li>
            <li>
              <span>Key Security: </span> The security of the Monoalphabetic
              Cipher relies on the secrecy of the key, which is the mapping
              between plaintext and ciphertext letters. It is essential to keep
              the key secret to prevent attackers from deciphering encrypted
              messages. Regularly changing the key and using strong, random
              mappings can enhance the security of the cipher.
            </li>
          </ol>
        </div>
      </div>

      <div className={styles.usecipher}>
        <div className={styles.useencrypt}>
          <input
            className={styles.input}
            type="text"
            placeholder="Enter your plain text here."
            onChange={(e) => setplaintext(e.target.value)}
          />

          <button className={styles.encryptbut} onClick={encrypt}>
            Encrypt
          </button>
          <div className={styles.result}>{ciphertext}</div>
        </div>
        <div className={styles.useencrypt}>
          <input
            className={styles.input}
            type="text"
            placeholder="Enter your cipher text here."
            onChange={(e) => setdecrypttext(e.target.value)}
          />

          <button className={styles.encryptbut} onClick={decrypt}>
            Decrypt
          </button>
          <div className={styles.result}>{decryptresult}</div>
        </div>
      </div>
      <Quizz1 questions={questions} />
      <div className={styles.gohome}>
        <NavLink to="/home" className={styles.gotohome}>
          Go to Home
        </NavLink>
      </div>
    </div>
  );
}
