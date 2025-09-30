"use client";
import { useRef } from "react";
import styles from "./page.module.css";

export default function BuyButton({ product }) {
  const formRef = useRef(null);

  const handlePlaceOrder = async () => {
    try {
      const res = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ product_name: product.name, price: product.price }),
      });

      const data = await res.json();

      if (data.orderId) {
        formRef.current.key.value = data.key;
        formRef.current.txnid.value = data.orderId;
        formRef.current.amount.value = product.price;
        formRef.current.productinfo.value = product.name;
        formRef.current.hash.value = data.hash;
        localStorage.setItem("currentTxnid", data.orderId);
        formRef.current.submit();
      } else {
        alert("Failed to generate payment link");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <>
      <button onClick={handlePlaceOrder} className={styles.buyButton}>
        Place order
      </button>
      <form
        ref={formRef}
        action="https://test.payu.in/_payment"
        method="POST"
        style={{ display: "none" }}
      >
        <input type="hidden" name="key" value="YOUR_PAYU_KEY" />
        <input type="hidden" name="txnid" />
        <input type="hidden" name="amount" />
        <input type="hidden" name="productinfo" />
        <input type="hidden" name="firstname" value="Demo" />
        <input type="hidden" name="email" value="demo@example.com" />
        <input type="hidden" name="surl" value="https://order-and-pay-demo.vercel.app/success" />
        <input type="hidden" name="furl" value="https://order-and-pay-demo.vercel.app/failure" />
        <input type="hidden" name="hash" />
      </form>
    </>
  );
}
