import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Error.module.css";

export default function Error() {
  return (
    <div className={styles.container}>
      <h1 className={styles.error_heading}>Something went wrong!</h1>
      <p className={styles.error_message}>We apologize for the inconvenience.</p>
      <Link to="/" className={styles.link}>
        Go to Home
      </Link>
    </div>
  );
}
