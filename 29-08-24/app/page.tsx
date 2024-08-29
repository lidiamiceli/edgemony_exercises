export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center text-gray-900">
      <h1 className="text-center text-5xl font-extrabold mt-10 mb-6 bg-gradient-to-r from-gray-700 via-gray-900 to-black bg-clip-text text-transparent">
        Welcome to Management Site
      </h1>
      <p className="text-center text-lg font-medium mt-2 mb-6 max-w-lg">
        Your one-stop solution for managing and organizing your needs.
      </p>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Get Started
        </h2>
        <p className="text-gray-700 mb-6">
          Start managing your operations efficiently.
        </p>
        <a 
          href="/products" 
          className="text-white bg-gray-800 hover:bg-gray-900 py-2 px-4 rounded-lg transition duration-300 ease-in-out"
        >
          View Products
        </a>
      </div>
    </div>
  );
}
