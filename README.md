# Desh Realty

A modern real estate platform for Bangladesh, built with Next.js 15, React 19, and TypeScript.

## 🏠 Overview

Desh Realty is a comprehensive real estate platform designed to help people find their dream properties in Bangladesh. The platform offers an intuitive interface for browsing properties for sale and rent, including houses and land across prime locations.

## ✨ Features

- **Property Listings**: Browse houses and land for sale or rent
- **Advanced Filtering**: Filter properties by type (sale/rent), category (house/land), and furnishing status
- **Responsive Design**: Mobile-first design that works seamlessly on all devices
- **Modern UI**: Clean, simple interface with Bangladesh-themed colors
- **Featured Properties**: Highlighted premium properties on the homepage
- **About Section**: Information about the company, CEO, and core values
- **Contact Information**: Easy access to company contact details

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **React**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Image Optimization**: Next.js Image component

## 🎨 Design System

- **Primary Color**: #D32F2F (Bangladesh red)
- **Secondary Color**: #FFA500 (Orange)
- **Dark Color**: #1A1A1A
- **Typography**: System fonts with fallbacks
- **Layout**: Mobile-first responsive design

## 📁 Project Structure

```
desh-realty/
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx          # About Us page
│   │   ├── services/
│   │   │   └── page.tsx          # Services page with property filtering
│   │   ├── layout.tsx            # Root layout with Navbar and Footer
│   │   ├── page.tsx              # Landing page
│   │   └── globals.css           # Global styles
│   ├── components/
│   │   ├── Navbar.tsx            # Responsive navigation component
│   │   └── Footer.tsx            # Footer component
│   └── data/
│       └── properties.ts         # Property data and TypeScript interface
├── public/                       # Static assets
├── package.json                  # Dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── next.config.ts                # Next.js configuration
├── postcss.config.js             # PostCSS configuration
└── README.md                     # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17.0 or higher
- npm, yarn, or pnpm

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
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📦 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## 🌐 Pages

### Home Page (/)
- Hero section with call-to-action buttons
- Features section highlighting platform benefits
- Featured properties grid (4 properties)
- Call-to-action section

### About Page (/about)
- Company overview
- CEO profile (Moammir Chowdhury)
- Core values section
- Mission and Vision statements

### Services Page (/services)
- Service cards for Sale and Rent
- Property filtering by:
  - Type (Sale/Rent)
  - Category (House/Land)
  - Furnishing status (for rental houses)
- Property listings grid with detailed information

## 🏗️ Building for Production

Build the application:
```bash
npm run build
```

Start the production server:
```bash
npm run start
```

## 🚀 Deployment

### Deploy on Vercel

The easiest way to deploy this Next.js app is using [Vercel](https://vercel.com):

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy"

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ashad1990/desh-realty)

### Other Deployment Options

- **Netlify**: Connect your Git repository and deploy
- **AWS Amplify**: Deploy with AWS Amplify Hosting
- **Digital Ocean**: Deploy using App Platform
- **Self-hosted**: Build and deploy on your own server

## 📝 License

This project is open source and available under the MIT License.

## 👥 Contact

**Desh Realty**
- Location: Dhaka, Bangladesh
- Phone: +880 123 456 789
- Email: info@deshrealty.com

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 💡 Future Enhancements

- User authentication and profiles
- Property search functionality
- Advanced map integration
- Property comparison feature
- Saved favorites
- Contact form for property inquiries
- Admin panel for property management
- Image galleries for properties
- Virtual tours
- Mortgage calculator

---

Built with ❤️ for Bangladesh by Desh Realty
