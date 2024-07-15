# Next.js E-Commerce Project

This is an e-commerce project built with Next.js, Prisma, and Stripe. It includes user authentication, product management, and payment processing.

## Features

- **Next.js** for server-side rendering and static site generation.
- **Prisma** as the ORM for database management.
- **Stripe** for payment processing.

## Getting Started

### Installation

1. Clone the repository:

```bash
git clone https://github.com/No0ne003/e-commerce.git
cd e-commerce
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

Create a `.env` file in the root directory and add the following environment variables:

- `ADMIN_USERNAME`: Username for admin access. 
- `HASHED_ADMIN_PASSWORD`: Hashed password for admin access. (```MQrRaAaNUjjoAOrOv1O3ka39Jy+tvoMnwCcbO9r3fybBdDkEmz4Qmjne1At7ErJ8EUv5UO+h37VmrUl6ii77mQ==```)(the password will be vagabond)
- `DATABASE_URL`: Database connection URL. ("file:./dev.db")
- `STRIPE_SECRET_KEY`: Stripe secret key for processing payments.
- `STRIPE_WEBHOOK_SECRET`: Stripe webhook secret for verifying events.
- `RESEND_API_KEY`: API key for sending emails.
- `SENDER_EMAIL`: Email address used for sending emails.
- `NEXT_PUBLIC_STRIPE_PUBLIC_KEY`: Public key for Stripe.
- `NEXT_PUBLIC_SERVER_URL`: URL of the server. (```http://localhost:3000```)

4. Set up the database:

```env
DATABASE_URL="file:./dev.db"
```

Run the following commands to set up your database:

```bash
npx prisma migrate deploy
npx prisma generate
```

### Running the Application

1. Start the development server:

```bash
npm run dev
```

2. Open your browser and navigate to `http://localhost:3000`.

## Deployment

To deploy the application, ensure that all environment variables are correctly set in your deployment environment (e.g., Vercel, Heroku).

## Technologies Used

- [Next.js](https://nextjs.org/)
- [Prisma](https://www.prisma.io/)
- [Stripe](https://stripe.com/)

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.
> [!NOTE]
> if you know how to deploy this project with the database in prisma please help me (you can change from SQL to postgres prisma provider)

## License

This project is licensed under the MIT License.

## Acknowledgements

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [Stripe Documentation](https://stripe.com/docs)
