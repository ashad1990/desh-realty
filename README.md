# Desh Realty

A modern real estate platform for Bangladesh built with Next.js 15, React, TypeScript, and Tailwind CSS.

## Features

- 🏠 Property listings for sale (Land & Houses)
- 🔑 Property rentals (Furnished & Non-furnished)
- 📱 Mobile-first responsive design
- 🎨 Bangladesh-inspired color scheme
- ⚡ Built with Next.js 15 for optimal performance
- 🔍 Property filtering and search

## Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Deployment:** Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ashad1990/desh-realty.git
cd desh-realty
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Build for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## Project Structure

```
desh-realty/
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx          # About Us page
│   │   ├── services/
│   │   │   └── page.tsx          # Services page with filtering
│   │   ├── layout.tsx            # Root layout
│   │   ├── page.tsx              # Landing page
│   │   └── globals.css           # Global styles
│   ├── components/
│   │   ├── Navbar.tsx            # Navigation component
│   │   └── Footer.tsx            # Footer component
│   └── data/
│       └── properties.ts         # Sample property data
├── public/                       # Static assets
├── next.config.ts               # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies and scripts
```

## Deployment

This project is ready for deployment on Vercel:

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Deploy with one click

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ashad1990/desh-realty)

## Design Theme

- **Primary Color:** #D32F2F (Red - Bangladesh flag inspired)
- **Secondary Color:** #FFA500 (Orange)
- **Dark Color:** #1A1A1A

## Services Offered

### For Sale
- **Land:** Residential and commercial plots
- **Houses:** Modern villas and apartments

### For Rent
- **Furnished:** Fully equipped apartments
- **Non-Furnished:** Customizable rental spaces

## About

Led by CEO Moammir Chowdhury, Desh Realty is committed to providing exceptional real estate services across Bangladesh. We aim to make property buying, selling, and renting transparent and accessible.

## License

This project is private and proprietary.

## Contact

For inquiries, please contact us at info@deshrealty.com
