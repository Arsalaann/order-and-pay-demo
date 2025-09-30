import styles from "../page.module.css";
import Link from "next/link";

export default function Success() {
  return (
    <div className={styles.messagePage}>
      <h1 className={styles.successMessage}>Payment Successful</h1>
      <p className={styles.infoText}>Your payment was processed successfully.</p>
      <Link href="/" className={styles.homeButton}>Go to Home</Link>
    </div>
  );
}   