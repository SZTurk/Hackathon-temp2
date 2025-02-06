import Link from 'next/link';
;

export default function Navbar() {
  return (
    <nav className="w-full h-39 bg-slate-100 flex justify-between items-center py-4 px-8 border-b">
  
      
      <div className=" flex justify-items-center mx-auto  font-semibold  text-xl space-x-8">
      <Link href="/allproducts" className="text-gray-600 hover:text-gray-900">
      All products
      </Link>
        <Link href="/plant-pots" className="text-gray-600 hover:text-gray-900">
          Plant pots
        </Link>
        <Link href="/ceramics" className="text-gray-600 hover:text-gray-900">
          Ceramics
        </Link>
        <Link href="/tables" className="text-gray-600 hover:text-gray-900">
          Tables
        </Link>
        <Link href="/chairs" className="text-gray-600 hover:text-gray-900">
          Chairs
        </Link>
         <Link href="/crockery" className="text-gray-600 hover:text-gray-900">
          Crockery
        </Link>
        <Link href="/tableware" className="text-gray-600 hover:text-gray-900">
          Tableware
        </Link>
        <Link href="/cutlery" className="text-gray-600 hover:text-gray-900">
          Cutlery
        </Link>
      </div>
      </nav>
       

  );
}