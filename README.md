# Simple Product Ordering & Payment Demo

This is a small Next.js project demonstrating a product ordering system integrated with **Supabase** and **PayU sandbox** payments.  

The project allows users to:  
- Browse a list of products.  
- Place an order.  
- Pay using PayU sandbox.  
- Automatically update order status in Supabase.  
- See a success or failure message after payment.  

---

## Features

1. **Product List**  
   - Three demo products with images, name, description, and price.  
   - "Place Order" button for each product.

2. **Payment Integration (PayU Sandbox)**  
   - Generates a secure payment link via server-side API.  
   - Handles order creation in Supabase.  
   - Updates order status (`paid` or `failed`) based on PayU response.  

3. **Server-Side API Routes**  
   - `api/create-order` → Creates a new order in Supabase and returns the payment link.  
   - `api/payment-status-update` → Receives PayU webhook POST request and updates the order status.  

4. **Frontend Pages**  
   - `/` → Product list with order buttons.  
   - `/success` → Payment success confirmation page.  
   - `/failure` → Payment failure page.

---

## Tech Stack

- **Next.js 13** (App Router)  
- **React** (Client components for interaction)  
- **Supabase** (Database for storing orders)  
- **PayU Sandbox** (Payment gateway)  
- **CSS Modules** (Styling)

---

## Environment Variables

The following keys are used in `.env.local` (do not commit this file):

