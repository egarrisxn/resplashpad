# Resplashpad

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) ![GitHub repo size](https://img.shields.io/github/repo-size/egarrisxn/resplashpad) ![GitHub last commit](https://img.shields.io/github/last-commit/egarrisxn/resplashpad)

![opengraph-image](https://github.com/user-attachments/assets/aa1ebfbd-235f-4646-9a52-570fccd43a7f)

## **Overview**

Resplashpad is a blazing fast photo gallery app powered by React & Unsplash.

## **Technologies**

This app leverages a modern tech stack for a smooth developer experience:

- **Programming Language**: [TypeScript](https://www.typescriptlang.org/) – Ensures type safety and better maintainability.
- **Framework**: [React](https://react.dev/) – The library for web and native user interfaces.
- **Deployment**: [Vercel](https://vercel.com) – Optimized for seamless, serverless deployment.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS for rapid styling.
- **Linting & Formatting**:
  - [ESLint](https://eslint.org/) – Enforces code quality and best practices.
  - [Prettier](https://prettier.io/) – Automatic code formatting for consistency.
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) – A flexible, customizable UI component library.
- **Icons**: [lucide-react](https://lucide.dev/) – Crisp, open-source React icons.

## **Before You Begin**

This app uses [pnpm](https://pnpm.io) as the default package manager for faster dependency resolution and disk space efficiency. However, you can switch to `npm`, `yarn`, or `bun` if preferred.

### Updataing Package Manager

By default, this app enforces `pnpm`. To use another package manager, follow these steps:

#### 1. Remove `pnpm` Enforcement

Open `package.json` and modify or remove the following lines:

```json
"preinstall": "npx only-allow pnpm",
"prebuild": "pnpm run lint"
```

#### 2. Install Dependencies Using Your Preferred Manager

Run one of the following commands:

```bash
npm install  # or yarn install, bun install
```

Now you're ready to start building! 🚀

## **Getting Started**

#### 1. Clone the Repository

First, clone the repository onto your local machine:

```bash
git clone https://github.com/egarrisxn/resplashpad.git 
cd resplashpad
```

#### 2. Install Dependencies

Run the following command to install dependencies:

```bash
pnpm install
```

#### 3. Start the Development Server

Launch the local development server:

```bash
pnpm dev
```

#### 4. Open in Your Browser

Once the server is running, open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. TThe page will auto-update as you edit the file. Now, get to building! 🚀

## **Deployment**

For a seamless deployment experience, use the **Deploy** button below to launch your project on Vercel.

Note: You are not limited to Vercel and may deploy this app on any platform that supports Next.js. However, in my experience, Vercel provides the fastest and most convenient setup.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fegarrisxn%2Fresplashpad)

## **Learn More**

To explore more about Next.js, check out these resources:

- 📖 [Next.js Documentation](https://nextjs.org/docs) – Official docs covering features and best practices.
- 🛠️ [Next.js GitHub](https://github.com/vercel/next.js) – Browse the source code and contribute.

## **License**

This project is licensed under the [MIT license](https://opensource.org/licenses/MIT).

## **Contact**

If you have any questions or need further assistance, feel free to reach out to me at [github.com/garrisxn](https://github.com/egarrisxn) or send an email to [egarrisxn@gmail.com](mailto:egarrisxn@gmail.com) and I'll get back to you as soon as possible!