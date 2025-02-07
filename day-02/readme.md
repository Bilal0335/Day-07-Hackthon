# E-Commerce Website

## Project Overview

This project is an e-commerce website that allows users to browse products, make purchases, and track their orders. It uses various technologies to manage the frontend, backend, and integrate third-party services.

### Frontend

- **Next.js**: Used to build a dynamic and responsive frontend. It provides fast page loading and a great user experience.

### Backend

- **Sanity CMS**: Handles the product data such as product name, ID, price, and stock information. This API allows us to easily fetch and update the product data.

### Third-Party APIs

- **Shipment Tracking API**: This API helps track the status of orders by shipment ID. It provides real-time updates on the order's status and delivery.
- **Payment Gateway**: A secure system for processing payments during checkout.

---

## How to Run

1. Clone the repository.
2. Install dependencies by running `npm install`.
3. Start the application by running `npm run dev`.
4. Open `http://localhost:3000` in your browser.

---

## Tech Stack

- Frontend: Next.js
- Backend: Sanity CMS
- Payment: Stripe API
- Shipment Tracking: Shippo API
- Email Confirmation: SendGrid API

---

## Features

- Browse and search for products.
- View product details, including price and stock.
- Add products to the cart and proceed to checkout.
- Secure payment through Stripe.
- Track orders in real-time with shipment tracking.
- Receive email confirmations after purchase.

---

## License

This project is licensed under the MIT License.
