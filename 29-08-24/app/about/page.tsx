export default function About() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center text-gray-900">
      <h1 className="text-center text-4xl font-extrabold mt-10 mb-6 text-gray-800">
        About Us
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Our Mission</h2>
        <p className="text-gray-600 mb-4">
          At [Your Company Name], our mission is to provide an efficient and intuitive management platform tailored to meet the needs of businesses and organizations of all sizes. We are committed to helping you streamline your operations and make informed decisions through our powerful and user-friendly tools.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Easy-to-use interface with customizable features</li>
          <li>Real-time data and analytics for better decision-making</li>
          <li>Seamless integration with other business tools</li>
          <li>Dedicated customer support to assist you whenever needed</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Our Team</h2>
        <p className="text-gray-600 mb-4">
          Our team of experts is passionate about delivering top-notch solutions and ensuring that our users have the best experience possible. With years of experience in the industry, we strive to continuously improve and adapt our platform to meet the evolving needs of our clients.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Contact Us</h2>
        <p className="text-gray-600">
          If you have any questions or need support, feel free to reach out to us at <a href="mailto:support@yourcompany.com" className="text-blue-500 hover:underline">support@yourcompany.com</a>. We are here to help!
        </p>
      </div>
    </div>
  );
}
