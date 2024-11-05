import { createContext } from "react";

interface ProductType {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;

};

interface SearchContextType {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

const DataContext = createContext<ProductType[]>([]);

export { DataContext, SearchContext };
export type { ProductType };
