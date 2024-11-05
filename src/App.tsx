import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import ProductList from "./layouts/ProductList";
import Search from "./fragments/Search";
import { SearchContext } from "./data/Context";

const queryClient = new QueryClient();

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <QueryClientProvider client={queryClient}>
      <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
        <Search />
        <ProductList />
      </SearchContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
