import { supabaseAdmin } from "../../lib/supabaseAdmin";
import crypto from "crypto";

//create route for creating an order from orders table ensuring try catch block for error handling
export async function POST(request) {
  try {
    const { product_name, price } = await request.json();

    const { data, error } = await supabaseAdmin
      .from("orders")
      .insert([{ product_name, price, status: "pending" }])
      .select()
      .single();

    if (error) {
      throw error;
    }

    const orderId = data.id;

    const key = process.env.PAYU_KEY;
    const salt = process.env.PAYU_SALT;

    const hashString = `${key}|${orderId}|${price}|${product_name}|Demo|demo@example.com|||||||||||${salt}`;
    const hash = crypto.createHash("sha512").update(hashString).digest("hex");

    return new Response(JSON.stringify({ orderId, hash, key }), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error creating order:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}       
