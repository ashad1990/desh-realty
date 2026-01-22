export interface Property {
  id: number;
  title: string;
  type: 'sale' | 'rent';
  category: 'land' | 'house' | 'furnished' | 'non-furnished';
  price: string;
  location: string;
  area: string;
  bedrooms?: number;
  bathrooms?: number;
  description: string;
  image: string;
}

export const properties: Property[] = [
  // Properties for Sale
  {
    id: 1,
    title: 'Residential Plot in Gulshan',
    type: 'sale',
    category: 'land',
    price: '৳ 2.5 Crore',
    location: 'Gulshan, Dhaka',
    area: '5 Katha',
    description: 'Prime residential plot in Gulshan. Perfect for building your dream home.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800',
  },
  {
    id: 2,
    title: 'Modern House in Dhanmondi',
    type: 'sale',
    category: 'house',
    price: '৳ 4 Crore',
    location: 'Dhanmondi, Dhaka',
    area: '2,500 sq ft',
    bedrooms: 4,
    bathrooms: 3,
    description: 'Beautiful 4-bedroom house with modern amenities in prime Dhanmondi location.',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800',
  },
  {
    id: 3,
    title: 'Commercial Plot in Banani',
    type: 'sale',
    category: 'land',
    price: '৳ 8 Crore',
    location: 'Banani, Dhaka',
    area: '10 Katha',
    description: 'Premium commercial plot in Banani. Ideal for business or commercial building.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800',
  },
  {
    id: 4,
    title: 'Luxury Villa in Bashundhara',
    type: 'sale',
    category: 'house',
    price: '৳ 6 Crore',
    location: 'Bashundhara R/A, Dhaka',
    area: '3,500 sq ft',
    bedrooms: 5,
    bathrooms: 4,
    description: 'Spacious luxury villa with garden and parking. Modern architecture.',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800',
  },

  // Properties for Rent
  {
    id: 5,
    title: 'Furnished Apartment in Gulshan',
    type: 'rent',
    category: 'furnished',
    price: '৳ 60,000/month',
    location: 'Gulshan-2, Dhaka',
    area: '1,800 sq ft',
    bedrooms: 3,
    bathrooms: 2,
    description: 'Fully furnished apartment with modern furniture. Ready to move in.',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
  },
  {
    id: 6,
    title: 'Non-Furnished Flat in Uttara',
    type: 'rent',
    category: 'non-furnished',
    price: '৳ 25,000/month',
    location: 'Uttara Sector 7, Dhaka',
    area: '1,200 sq ft',
    bedrooms: 2,
    bathrooms: 2,
    description: 'Spacious 2-bedroom apartment. Perfect for families.',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
  },
  {
    id: 7,
    title: 'Furnished Studio in Banani',
    type: 'rent',
    category: 'furnished',
    price: '৳ 35,000/month',
    location: 'Banani, Dhaka',
    area: '800 sq ft',
    bedrooms: 1,
    bathrooms: 1,
    description: 'Cozy furnished studio apartment. Ideal for professionals.',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
  },
  {
    id: 8,
    title: 'Non-Furnished House in Mirpur',
    type: 'rent',
    category: 'non-furnished',
    price: '৳ 30,000/month',
    location: 'Mirpur DOHS, Dhaka',
    area: '1,500 sq ft',
    bedrooms: 3,
    bathrooms: 2,
    description: 'Well-maintained house in peaceful DOHS area. Family friendly.',
    image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800',
  },
];
