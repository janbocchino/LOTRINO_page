# LOTRINO Website

Modern website for LOTRINO - Software Development & Consulting, built with Next.js, React, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Form Handling**: Web3Forms

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file (copy from `.env.local.example`):

```bash
cp .env.local.example .env.local
```

4. Add your Web3Forms API key to `.env.local`:

```
NEXT_PUBLIC_WEB3FORMS_KEY=your_web3forms_access_key_here
```

Get your free API key at [https://web3forms.com/](https://web3forms.com/)

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles and Tailwind config
│   ├── layout.tsx       # Root layout with Header/Footer
│   ├── page.tsx         # Homepage
│   ├── privacy/         # Privacy Policy page
│   └── imprint/         # Imprint page
└── components/
    ├── Header.tsx       # Navigation header
    ├── Footer.tsx       # Site footer
    ├── Hero.tsx         # Hero section
    ├── Services.tsx     # Services grid
    ├── About.tsx        # About section
    └── Contact.tsx      # Contact form with Web3Forms
```

## Features

- Responsive design optimized for all devices
- Modern, technical dark theme aesthetic
- Smooth scroll navigation
- Animated UI elements
- Contact form with Web3Forms integration
- SEO optimized

## Contact Form Setup

The contact form uses [Web3Forms](https://web3forms.com/) for handling submissions:

1. Sign up at Web3Forms and get your access key
2. Add the key to your `.env.local` file
3. Form submissions will be sent to your configured email

## License

All rights reserved © LOTRINO
