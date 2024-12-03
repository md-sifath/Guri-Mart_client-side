import { useState } from 'react';
import { HiOutlineHome, HiOutlineLogout } from 'react-icons/hi';
import {
  HiOutlineShoppingBag,
  HiOutlineShoppingCart,
  HiOutlineSquaresPlus,
} from 'react-icons/hi2';

import { NavLink } from 'react-router-dom';
import { useGetUser } from '../Hooks/useGetUser';
import { useLogout } from '../Hooks/useLogout';
import { useCart } from '../Hooks/useCart';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isLoading } = useGetUser();

  const { logOut, isPending } = useLogout();
  const { cartData } = useCart();

  function toggleMenu() {
    setIsOpen((menu) => !menu);
  }

  return (
    <nav className="bg-[#1AB293]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-start justify-between py-4">
          <div className="flex-shrink-0">
            <NavLink
              onClick={() => setIsOpen(false)}
              to="/"
              className="text-2xl font-bold text-white"
            >
              <p className="font-dois text-xl">
                <span className="font-dancing text-4xl">G</span>uri
                <span className="font-dancing text-4xl">M</span>art
              </p>
            </NavLink>
          </div>

          <div className="hidden items-center space-x-4 lg:flex">
            <NavLink
              onClick={() => setIsOpen(false)}
              to="/"
              className="rounded-md px-3 py-1 text-base font-normal text-white hover:bg-blue-500"
            >
              <span className="flex items-center gap-1">
                <HiOutlineHome /> Home
              </span>
            </NavLink>
            <NavLink
              onClick={() => setIsOpen(false)}
              to="/products"
              className="rounded-md px-3 py-1 text-base font-normal text-white hover:bg-blue-500"
            >
              <span className="flex items-center gap-1">
                <HiOutlineShoppingBag /> Products
              </span>
            </NavLink>
            {user && (
              <NavLink
                onClick={() => setIsOpen(false)}
                to="/dashboard"
                className="text-bsae rounded-md px-3 py-1 font-normal text-white hover:bg-blue-500"
              >
                <span className="flex items-center gap-1">
                  <HiOutlineSquaresPlus /> Dashboard
                </span>
              </NavLink>
            )}
            <NavLink
              onClick={() => setIsOpen(false)}
              to="/cart"
              className="rounded-md px-3 py-1 text-base font-medium text-white hover:bg-blue-500"
            >
              <span className="flex items-center gap-1">
                {' '}
                <HiOutlineShoppingCart /> ({cartData?.length})
              </span>
            </NavLink>

            {user?.email ? (
              <button
                onClick={logOut}
                className="rounded-md px-3 py-1 text-base font-normal text-cyan-200 hover:bg-blue-500"
              >
                <span className="flex items-center gap-1">
                  <HiOutlineLogout /> Logout
                </span>
              </button>
            ) : (
              <NavLink
                onClick={() => setIsOpen(false)}
                to="/login"
                className="rounded-md px-3 py-1 text-xl font-medium text-cyan-100 hover:bg-blue-500"
              >
                Login
              </NavLink>
            )}
          </div>

          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-cyan-200 hover:bg-blue-500 focus:bg-blue-500 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            <NavLink
              onClick={() => setIsOpen(false)}
              to="/"
              className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-blue-500"
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => setIsOpen(false)}
              to="/products"
              className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-blue-500"
            >
              Products
            </NavLink>
            <NavLink
              onClick={() => setIsOpen(false)}
              to="/dashboard"
              className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-blue-500"
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/cart"
              className="rounded-md px-3 py-1 text-base font-medium text-white hover:bg-blue-500"
            >
              Cart ({cartData?.length})
            </NavLink>
            {user?.email ? (
              <button
                onClick={logOut}
                className="rounded-md px-3 py-1 text-base font-normal text-cyan-200 hover:bg-blue-500"
              >
                <span className="flex items-center gap-1">
                  <HiOutlineLogout /> Logout
                </span>
              </button>
            ) : (
              <NavLink
                onClick={() => setIsOpen(false)}
                to="/login"
                className="rounded-md px-3 py-1 text-xl font-medium text-cyan-100 hover:bg-blue-500"
              >
                Login
              </NavLink>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
