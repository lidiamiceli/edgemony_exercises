import './globals.css';
import Navbar from './navbar';
import Footer from './footer'; 

export const metadata = {
  title: 'Admin Dashboard',
  description: 'A simple admin dashboard created with Next.js and TypeScript.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-100">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer /> 
      </body>
    </html>
  );
}
