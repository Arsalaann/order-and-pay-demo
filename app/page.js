import styles from "./page.module.css";
import Image from "next/image";
import PlaceOrderButton from "./PlaceOrderButton";
const products = [
  {
    id: 1,
    name: "Calculator",
    imageUrl: "/calculator.jpg",
    price: 500,
    desc: "AB-512 12-Digit Display Basic Calculator(Black). Large, easy-to-read display. Durable plastic keys with tactile feedback."
  },
  {
    id: 2,
    name: "Laptop or Mobile Stand",
    imageUrl: "/stand.jpg",
    price: 300,
    desc: "Adjustable and foldable stand for laptops and mobiles.Equipped with eight grooves to adjust the height to your comfort level"
  },
  {
    id: 3,
    name: "Camera Lens",
    imageUrl: "/lens.jpg",
    price: 800,
    desc: "The Fujifilm GF 32-64mm f/4 R LM WR Lens is a standard zoom lens designed for the G Mount and 43.8 x 32.9mm sensor."
  }
];
export default function Home() {
  return (
    <div className={styles.page}>
      {products.map((product) => (
        <div key={product.id} className={styles.productCard}>
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={200}
            height={200}
            className={styles.productImage}
          />
          <h2 className={styles.productName}>{product.name}</h2>
          <p className={styles.productDesc}>{product.desc}</p>
          <p className={styles.productPrice}>Price: ₹{product.price}</p>
          <PlaceOrderButton product={product}/>
        </div>
      ))}
    </div>
  );

}


