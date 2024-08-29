import Link from 'next/link';

const Products = async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();

  return (
    <div className="bg-gray-100 min-h-screen pt-20 p-6">
      <h1 className="text-center text-4xl font-bold text-black mb-10 p-2">Products</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product: any) => (
          <li
            key={product.id}
            className="bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{product.title}</h2>
              <p className="text-gray-400 mt-2">${product.price}</p>
              <Link href={`/products/${product.id}`}>
                <span className="text-blue-400 mt-4 block text-center hover:underline cursor-pointer">
                  View Details
                </span>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
