# Desh Realty

A modern, responsive real estate platform for Bangladesh built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

![Bangladesh Colors](https://img.shields.io/badge/Bangladesh-Red%20%26%20Orange-D32F2F?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🏡 About

Desh Realty is a comprehensive real estate platform designed to help people in Bangladesh find their dream properties. Whether you're looking to buy, rent, or invest in land, houses, or apartments, Desh Realty provides a user-friendly interface with powerful filtering capabilities.

## ✨ Features

- **Modern UI/UX**: Clean, responsive design with Bangladesh-inspired color scheme
- **Property Listings**: Browse houses, apartments, and land for sale or rent
- **Advanced Filtering**: Filter properties by type, category, and furnishing status
- **Mobile Responsive**: Fully responsive design with hamburger menu for mobile devices
- **About Section**: Learn about our company, mission, vision, and leadership (CEO Moammir Chowdhury)
- **Property Details**: View comprehensive property information including price, location, features, and more

## 🎨 Design System

### Color Palette
- **Primary (Bangladesh Red)**: `#D32F2F` - Represents the national flag
- **Secondary (Orange)**: `#FFA500` - Complementary accent color
- **Dark Background**: `#1A1A1A` - Used for navbar and footer

### Typography
- System fonts with fallbacks for optimal performance
- Responsive font sizes for different screen sizes

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript 5.7](https://www.typescriptlang.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: Optimized for [Vercel](https://vercel.com/)

## 📦 Installation

### Prerequisites
- Node.js 18.x or higher
- npm, yarn, or pnpm

### Steps

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

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Project Structure

```
desh-realty/
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx          # About Us page
│   │   ├── services/
│   │   │   └── page.tsx          # Services/Properties page
│   │   ├── layout.tsx            # Root layout with Navbar & Footer
│   │   ├── page.tsx              # Landing page
│   │   └── globals.css           # Global styles
│   ├── components/
│   │   ├── Navbar.tsx            # Responsive navigation
│   │   └── Footer.tsx            # Footer component
│   └── data/
│       └── properties.ts         # Property data & interfaces
├── public/                       # Static assets
├── .gitignore                    # Git ignore rules
├── next.config.ts                # Next.js configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
├── postcss.config.js             # PostCSS configuration
├── package.json                  # Dependencies & scripts
└── README.md                     # Project documentation
```

## 📄 Pages

### Home (`/`)
- Hero section with call-to-action
- Feature highlights (Wide Selection, Trusted Service, Best Deals, Expert Team)
- Featured properties showcase

### About Us (`/about`)
- CEO Moammir Chowdhury profile
- Company mission and vision
- Core values (Integrity, Excellence, Customer Focus)
- Company statistics

### Services (`/services`)
- Complete property listings
- Advanced filtering by:
  - Type (Sale/Rent)
  - Category (Land/House/Apartment)
  - Furnishing status
- Property cards with detailed information

## 🔧 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 768px (Hamburger menu)
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy"

### Manual Deployment

```bash
npm run build
npm run start
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For any inquiries or support:
- **Email**: info@deshrealty.com
- **Phone**: +880 1234-567890
- **Location**: Dhaka, Bangladesh

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💼 Leadership

**Moammir Chowdhury** - Chief Executive Officer

With over 15 years of experience in Bangladesh's real estate industry, Moammir Chowdhury leads Desh Realty with a vision to make quality housing accessible to every Bangladeshi family.

---

Made with ❤️ in Bangladesh 🇧🇩
