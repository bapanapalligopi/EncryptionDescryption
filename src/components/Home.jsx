// import React from "react";
import styles from "../components/home.module.css";
import Encryption from "./Encryption";
import Decryption from "./Decryption";
import { NavLink } from "react-router-dom";
export default function Home() {
  return (
    <div className={`container ${styles.homecontainer}`}>
      <Encryption></Encryption>
      <Decryption></Decryption>
      <div className={styles.types}>
        <NavLink to="/caesarcipher" className={styles.buttton}>
          <p className={styles.butcontent}>Go to Caesar Cipher</p>
        </NavLink>
        <NavLink to="/monoalphabetic" className={styles.buttton}>
          <p className={styles.butcontent}>Go to Monoalphabetic Cipher</p>
        </NavLink>
      </div>
    </div>
  );
}
