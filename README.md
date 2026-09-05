# Serein storefront

A responsive React and Tailwind storefront with an AI shopping assistant, browser-persistent sign-in, cash-on-delivery checkout, and order-email handoff.

## Run locally

```bash
npm install
npm run dev
```

## AI and email setup

Copy `.env.example` to `.env.local` and set the values for your verified Resend sending domain and OpenAI key. The Vercel-compatible endpoints are in `api/`:

- `api/assistant.js` uses the OpenAI Responses API to power Aura; the interface uses a helpful local response while the API is unavailable.
- `api/orders.js` accepts cash-on-delivery orders only, creates a tracking ID, and sends separate merchant and customer emails via Resend. The customer email contains an AI-branded invoice and tracking portal link.
- `api/admin-login.js` verifies the admin email and password stored as deployment environment variables. Set `ADMIN_EMAIL` and `ADMIN_PASSWORD` before using the product panel.

## Important production step

Cash on delivery does not need an online payment processor. The admin panel is credential-gated, while products it creates are saved only in the current browser for this starter. Before launch, replace browser-only sign-in with a secure identity provider; store products in a database; and verify customer, admin session, and product prices on the server. On fulfillment, replace the generated tracking ID with the carrier's real tracking number and tracking URL.
