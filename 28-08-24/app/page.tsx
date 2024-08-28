import { fetchProducts } from './api';
import Home from './Home'; 

const Page = async () => {
  const products = await fetchProducts();
  return <Home initialProducts={products} />;
};

export default Page;
