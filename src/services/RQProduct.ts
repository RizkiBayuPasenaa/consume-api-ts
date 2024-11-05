import axios from 'axios';

const allProducts = async () => {
  const { data }  = await axios.get('https://fakestoreapi.com/products');
  
  return data;
};

export { allProducts };