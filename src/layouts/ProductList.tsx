import { useQuery } from "@tanstack/react-query";
import Card from "../fragments/Card";
import { ProductType } from "../data/Context";
import { allProducts } from "../services/RQProduct";
import { useContext } from "react";
import { SearchContext } from "../data/Context";

function ProductList() {
  
  const context = useContext(SearchContext);

  const { data: products, isLoading, isError, error } = useQuery<ProductType[]>({
    queryKey: ["products"],
    queryFn: allProducts,
  });

  if (!context) {
    return null;
  }

  const { searchTerm } = context;
  
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  
  const filteredProducts = products?.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-container">
      {filteredProducts?.map((product: ProductType) => (
        <Card
          key={product.id}
          title={product.title}
          description={product.description}
          image={product.image}
          price={product.price}
        />
      ))}
    </div>
  );
}

export default ProductList;
