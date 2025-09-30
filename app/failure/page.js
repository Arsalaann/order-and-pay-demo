import { useEffect } from "react";
import styles from "../page.module.css";
import Link from "next/link";

export default function Failure() {
  useEffect(() => {
    const txnid = localStorage.getItem("currentTxnid");
    if (txnid) {
      fetch("/api/payment-status-update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ txnid, status: "success" }),
      });
      localStorage.removeItem("currentTxnid");
    }
  }, []);
  return (
    <div className={styles.messagePage}>
      <h1 className={styles.failureMessage}>Payment Failed</h1>
      <p className={styles.infoText}>Unfortunately, your payment could not be processed.</p>
      <Link href="/" className={styles.homeButton}>Go to Home</Link>
    </div>
  );
}