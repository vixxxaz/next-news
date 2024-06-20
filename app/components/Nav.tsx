// app/components/Nav.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full h-25 bg-tertiary-color p-10 flex justify-between items-center">
      <h1 className="text-m font-bold text-slate-800">Navigate in the site</h1>
      <ul className="flex space-x-4">
        <li>
          <Link href="/" passHref>
            <button className="p-2 w-30 h-13 text-m bg-fifth-color text-white rounded hover:bg-blue-700">
              Home Page
            </button>
          </Link>
        </li>
        <li>
          <Link href="/Home/slug" passHref>
            <button className="p-2 w-30 h-13 text-m bg-fifth-color text-white rounded hover:bg-blue-700">
              New tech article
            </button>
          </Link>
        </li>
        <li>
          <Link href="/Home/news" passHref>
            <button className="p-2 w-30 h-13 text-m bg-fifth-color text-white rounded hover:bg-blue-700">
              New BITCOIN article
            </button>
          </Link>
        </li>
        <li>
          <Link href="/Home/bbc" passHref>
            <button className="p-2 w-30 h-13 text-m bg-fifth-color text-white rounded hover:bg-blue-700">
            New BBC article
            </button>
          </Link>
        </li>
        <li>
          <Link href="/api/auth/signin" passHref>
            <button className="p-2 w-30 h-13 text-m  bg-green-900 text-white rounded hover:bg-blue-700">
              Sign In
            </button>
          </Link>
        </li>
        <li>
          <Link href="/api/auth/signout" passHref>
            <button className="p-2 w-30 h-13 text-m bg-red-800 text-white rounded hover:bg-blue-700">
              Sign Out
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
