import { useState } from "react";
import styles from "../components/caesar.module.css";
import caesar1 from "../images/caesar1.png";
import caesar2 from "../images/caesar2.png";
import caesar3 from "../images/caesar3.png";
import Quizz1 from "./Quizz1";
import { NavLink } from "react-router-dom";
import questions from "./Caesarquizz";

export default function Caesar() {
  const [plaintext, setplaintext] = useState("");
  const [decrypttext, setdecrypttext] = useState("");
  const [key, setkey] = useState(0);
  const [dkey, setdkey] = useState(0);
  const [ciphertext, setciphertext] = useState(" ");
  const [decryptresult, setDecryptResult] = useState("");

  function caesarCipher(str, shift) {
    return str.replace(/[a-zA-Z]/g, function (char) {
      const code = char.charCodeAt(0);
      let offset = code < 97 ? 65 : 97;
      return String.fromCharCode(((code - offset + shift) % 26) + offset);
    });
  }

  const handleEncrypt = () => {
    const encryptedText = caesarCipher(plaintext, key);
    setplaintext("");
    setkey(0);
    setciphertext("Encrypted text is:" + encryptedText);
  };
  const handleDecrypt = () => {
    const decryptedText = caesarCipher(decrypttext, -dkey); // Negative shift for decryption
    setDecryptResult("Decrypted text is:" + decryptedText);
  };

  return (
    <div className={`container ${styles.caesarcontainer}`}>
      <div className={styles.definitionimage}>
        <div className={styles.def}>Definition</div>
        <div className={styles.defcontent}>
          A Caesar cipher is a simple method of encoding messages. Caesar
          ciphers use a substitution method where letters in the alphabet are
          shifted by some fixed number of spaces to yield an encoding alphabet.
          A Caesar cipher with a shift of 1 1 would encode an A as a B, an M as
          an N, and a Z as an A, and so on. The method is named after Roman
          leader Julius Caesar, who used it in his private correspondence.
        </div>
        <div className={styles.image}>
          <img src={caesar1} alt="image" className={styles.images} />
        </div>
      </div>
      <div className={styles.algorithm}>
        <div className={styles.algohead}>Using a Caesar Cipher</div>
        <div className={styles.steps}>
          <ul>
            <li>Choose a value to shift the alphabet by.</li>
            <li>
              Make a table where the top row contains letters in standard
              alphabetical order, and the bottom row is the new shifted
              alphabet.
            </li>
            <li>
              Encode the message by exchanging each letter in the message with
              the equivalent shifted letter.
            </li>
            <li>
              Make sure that the message’s intended recipient knows the shifting
              scheme you used to encode the message so they can decode it.
            </li>
            <li>
              To decrypt a message encoded with a Caesar cipher, simply take the
              value of 26 minus the shift value, and apply that new value to
              shift the encoded message back to its original form.
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className={styles.examples}>
          <p className={styles.example}>Example-1</p>
          <img src={caesar2} alt="image" className={styles.imgex1} />
        </div>
        <div>
          <p className={styles.example}>Example-2</p>
          <img src={caesar3} alt="image" className={styles.imgex1} />
        </div>
      </div>
      <div className={styles.adv}>
        <div className={styles.advcontent}>Advantages</div>
        <div className={styles.advpoints}>
          <ol>
            <li>
              Easy to implement and use thus, making suitable for beginners to
              learn about encryption.
            </li>
            <li>
              Can be physically implemented, such as with a set of rotating
              disks or a set of cards, known as a scytale, which can be useful
              in certain situations.
            </li>
            <li>Requires only a small set of pre-shared information.</li>
            <li>
              Can be modified easily to create a more secure variant, such as by
              using a multiple shift values or keywords.
            </li>
          </ol>
        </div>
      </div>
      <div className={styles.dis}>
        <div className={styles.discontent}>Disadvantages</div>
        <div className={styles.dispoints}>
          <ol>
            <li> It is not secure against modern decryption methods.</li>
            <li>
              Vulnerable to known-plaintext attacks, where an attacker has
              access to both the encrypted and unencrypted versions of the same
              messages.
            </li>
            <li>
              The small number of possible keys means that an attacker can
              easily try all possible keys until the correct one is found,
              making it vulnerable to a brute force attack.
            </li>
            <li>
              It is not suitable for long text encryption as it would be easy to
              crack.
            </li>
            <li>
              It is not suitable for secure communication as it is easily
              broken.
            </li>
            <li>
              Does not provide confidentiality, integrity, and authenticity in a
              message.
            </li>
          </ol>
        </div>
      </div>

      <div className={styles.rules}>
        <div className={styles.rulescontent}> Rules for the Caesar Cipher</div>
        <div className={styles.rulespoints}>
          <ol>
            <li>
              Choose a number between 1 and 25. This will be your “shift” value.
            </li>
            <li>
              Write down the letters of the alphabet in order, from A to Z.
              Shift each letter of the alphabet by the “shift” value.
            </li>
            <li>
              For example, if the shift value is 3, A would become D, B would
              become E, C would become F, and so on.
            </li>
            <li>
              Encrypt your message by replacing each letter with the
              corresponding shifted letter.
            </li>
            <li>
              For example, if the shift value is 3, the word “hello” would
              become “khoor”.
            </li>
            <li>
              To decrypt the message, simply reverse the process by shifting
              each letter back by the same amount. For example, if the shift
              value is 3, the encrypted message “khoor” would become “hello”.
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
          <input
            className={styles.input}
            type="text"
            placeholder="Enter shift key"
            onChange={(e) => setkey(parseInt(e.target.value))}
          />
          <button
            className={styles.encryptbut}
            onClick={() => handleEncrypt(plaintext, key)}
          >
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
          <input
            className={styles.input}
            type="text"
            placeholder="Enter shift key"
            onChange={(e) => setdkey(parseInt(e.target.value))}
          />
          <button
            className={styles.encryptbut}
            onClick={() => handleDecrypt(decrypttext, dkey)}
          >
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
