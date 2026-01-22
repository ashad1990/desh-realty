export interface Property {
  id: string;
  title: string;
  type: "sale" | "rent";
  category: "land" | "house";
  furnished?:  "furnished" | "non-furnished";
  price: number;
  location: string;
  size: string;
  image:  string;
}

export const properties: Property[] = [
  {
    id:  "1",
    title: "Modern House in Gulshan",
    type: "sale",
    category: "house",
    price: 25000000,
    location: "Gulshan, Dhaka",
    size:  "4000 sqft",
    image: "🏠",
  },
  {
    id:  "2",
    title: "Land Plot in Banani",
    type: "sale",
    category: "land",
    price: 15000000,
    location: "Banani, Dhaka",
    size: "2500 sqft",
    image:  "🏞️",
  },
  {
    id: "3",
    title: "Furnished Apartment in Dhanmondi",
    type:  "rent",
    category: "house",
    furnished: "furnished",
    price: 80000,
    location: "Dhanmondi, Dhaka",
    size: "2000 sqft",
    image: "🏘️",
  },
  {
    id: "4",
    title: "Non-Furnished House in Mirpur",
    type: "rent",
    category: "house",
    furnished: "non-furnished",
    price: 50000,
    location: "Mirpur, Dhaka",
    size: "3000 sqft",
    image: "🏡",
  },
];
