import styles from "../page.module.css";
import Link from "next/link";

export default function Failure() {
  return (
    <div className={styles.messagePage}>
      <h1 className={styles.failureMessage}>Payment Failed</h1>
      <p className={styles.infoText}>Unfortunately, your payment could not be processed.</p>
      <Link href="/" className={styles.homeButton}>Go to Home</Link>
    </div>
  );
}