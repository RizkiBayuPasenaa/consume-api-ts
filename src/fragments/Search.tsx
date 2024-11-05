import Input from "../components/Input";
import { useContext } from "react";
import { SearchContext } from "../data/Context";

function Search() {
  const context = useContext(SearchContext);

  if (!context) {
    return null; // Atau bisa mengembalikan elemen lain jika konteks tidak ada
  }

  const { searchTerm, setSearchTerm } = context;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Input
      placeholder="Cari nama produk..."
      type="text"
      value={searchTerm}
      onChange={handleChange}
    />
  );
}

export default Search;
