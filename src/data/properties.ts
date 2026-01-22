export interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  type: "sale" | "rent";
  category: "land" | "house" | "apartment";
  furnished: boolean;
  bedrooms?: number;
  bathrooms?: number;
  area: number; // in square feet
  description: string;
  image: string;
  features: string[];
}

export const properties: Property[] = [
  {
    id: 1,
    title: "Luxury Villa in Gulshan",
    location: "Gulshan, Dhaka",
    price: 45000000,
    type: "sale",
    category: "house",
    furnished: true,
    bedrooms: 5,
    bathrooms: 4,
    area: 3500,
    description: "Stunning luxury villa with modern amenities in the heart of Gulshan",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    features: ["Swimming Pool", "Garden", "Parking", "Security", "Generator"],
  },
  {
    id: 2,
    title: "Modern Apartment in Banani",
    location: "Banani, Dhaka",
    price: 35000,
    type: "rent",
    category: "apartment",
    furnished: true,
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    description: "Fully furnished modern apartment with city views",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
    features: ["Gym", "Elevator", "Parking", "24/7 Security"],
  },
  {
    id: 3,
    title: "Commercial Land in Uttara",
    location: "Uttara, Dhaka",
    price: 25000000,
    type: "sale",
    category: "land",
    furnished: false,
    area: 5000,
    description: "Prime commercial land perfect for development",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800",
    features: ["Corner Plot", "Main Road Access", "All Utilities Available"],
  },
  {
    id: 4,
    title: "Family House in Dhanmondi",
    location: "Dhanmondi, Dhaka",
    price: 60000,
    type: "rent",
    category: "house",
    furnished: false,
    bedrooms: 4,
    bathrooms: 3,
    area: 2500,
    description: "Spacious family house in a quiet neighborhood",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
    features: ["Rooftop", "Garage", "Garden", "Prayer Room"],
  },
  {
    id: 5,
    title: "Studio Apartment in Bashundhara",
    location: "Bashundhara R/A, Dhaka",
    price: 18000,
    type: "rent",
    category: "apartment",
    furnished: true,
    bedrooms: 1,
    bathrooms: 1,
    area: 650,
    description: "Cozy furnished studio apartment for professionals",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
    features: ["Furnished", "Wi-Fi", "AC", "Modern Kitchen"],
  },
  {
    id: 6,
    title: "Residential Land in Purbachal",
    location: "Purbachal, Dhaka",
    price: 8500000,
    type: "sale",
    category: "land",
    furnished: false,
    area: 3000,
    description: "Beautiful plot in the planned city of Purbachal",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800",
    features: ["Gated Community", "Lake View", "Planned Infrastructure"],
  },
];
