export interface Property {
  id: number;
  title: string;
  type: 'sale' | 'rent';
  category: 'house' | 'land';
  furnished?: boolean;
  price: number;
  location: string;
  bedrooms?: number;
  bathrooms?: number;
  area: number;
  image: string;
  description: string;
}

export const properties: Property[] = [
  // Houses for Sale
  {
    id: 1,
    title: 'Modern Villa in Gulshan',
    type: 'sale',
    category: 'house',
    price: 25000000,
    location: 'Gulshan 2, Dhaka',
    bedrooms: 5,
    bathrooms: 4,
    area: 3200,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
    description: 'Luxurious modern villa with premium finishes and amenities in the heart of Gulshan.'
  },
  {
    id: 2,
    title: 'Spacious Family Home',
    type: 'sale',
    category: 'house',
    price: 18000000,
    location: 'Banani, Dhaka',
    bedrooms: 4,
    bathrooms: 3,
    area: 2800,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    description: 'Beautiful family home with spacious rooms and modern kitchen facilities.'
  },
  {
    id: 3,
    title: 'Contemporary Duplex',
    type: 'sale',
    category: 'house',
    price: 15000000,
    location: 'Dhanmondi, Dhaka',
    bedrooms: 4,
    bathrooms: 3,
    area: 2500,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
    description: 'Modern duplex with contemporary design and all modern amenities.'
  },
  
  // Land for Sale
  {
    id: 4,
    title: 'Prime Commercial Land',
    type: 'sale',
    category: 'land',
    price: 50000000,
    location: 'Uttara, Dhaka',
    area: 10000,
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800',
    description: 'Prime commercial land in Uttara with excellent road access and utilities.'
  },
  {
    id: 5,
    title: 'Residential Plot',
    type: 'sale',
    category: 'land',
    price: 8000000,
    location: 'Bashundhara, Dhaka',
    area: 5000,
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800',
    description: 'Ready to build residential plot in a planned neighborhood.'
  },
  
  // Furnished Houses for Rent
  {
    id: 6,
    title: 'Fully Furnished Apartment',
    type: 'rent',
    category: 'house',
    furnished: true,
    price: 80000,
    location: 'Gulshan 1, Dhaka',
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
    description: 'Luxury furnished apartment with modern furniture and appliances.'
  },
  {
    id: 7,
    title: 'Executive Studio',
    type: 'rent',
    category: 'house',
    furnished: true,
    price: 45000,
    location: 'Banani, Dhaka',
    bedrooms: 1,
    bathrooms: 1,
    area: 900,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
    description: 'Fully furnished studio apartment perfect for professionals.'
  },
  
  // Non-Furnished Houses for Rent
  {
    id: 8,
    title: 'Spacious 4BR Apartment',
    type: 'rent',
    category: 'house',
    furnished: false,
    price: 60000,
    location: 'Dhanmondi, Dhaka',
    bedrooms: 4,
    bathrooms: 3,
    area: 2200,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
    description: 'Large unfurnished apartment ideal for families.'
  },
  {
    id: 9,
    title: 'Modern 2BR Flat',
    type: 'rent',
    category: 'house',
    furnished: false,
    price: 35000,
    location: 'Mirpur DOHS, Dhaka',
    bedrooms: 2,
    bathrooms: 2,
    area: 1400,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
    description: 'Well-maintained unfurnished flat in a secure residential area.'
  },
  {
    id: 10,
    title: 'Cozy 3BR House',
    type: 'rent',
    category: 'house',
    furnished: false,
    price: 50000,
    location: 'Uttara, Dhaka',
    bedrooms: 3,
    bathrooms: 2,
    area: 1600,
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800',
    description: 'Comfortable unfurnished house with garden space.'
  }
];
