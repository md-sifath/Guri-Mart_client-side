import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {
  HiOutlineClipboardList,
  HiOutlineHome,
  HiOutlineMenu,
  HiOutlineUserCircle,
} from 'react-icons/hi';
import { HiOutlineInboxStack, HiOutlineXMark } from 'react-icons/hi2';

function DashboardLayout() {
  const [isOpen, setIsOpen] = useState();
  return (
    <div className="flex flex-col bg-[#1AB293] text-left">
      <header className="flex items-center justify-between">
        <button
          className={`${isOpen ? 'pl-14' : 'p-0'} md:hidden`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiOutlineXMark size={24} /> : <HiOutlineMenu size={24} />}
        </button>
        <h1 className="p-4 text-2xl font-medium">Dashboard</h1>
      </header>
      <div className="flex h-screen flex-1">
        <div
          className={`${isOpen ? 'w-60' : 'w-0'} flex flex-col bg-[#1AB293] transition-all duration-300 md:w-60`}
        >
          <ul className={`space-y-4 pl-4 ${isOpen ? '' : 'hidden md:block'}`}>
            <li>
              <NavLink
                to="/"
                onClick={() => setIsOpen(!isOpen)}
                className={({ isActive }) =>
                  `flex items-center gap-2 rounded p-2 ${isActive ? 'border-r-4 border-lime-200 bg-gray-50 shadow-sm' : ''}`
                }
              >
                <HiOutlineHome />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                end
                onClick={() => setIsOpen(!isOpen)}
                className={({ isActive }) =>
                  `flex items-center gap-2 rounded p-2 ${isActive ? 'bg-gray-50 shadow-sm' : ''}`
                }
              >
                <HiOutlineInboxStack />
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setIsOpen(!isOpen)}
                to="dashboard/myorder"
                className={({ isActive }) =>
                  `flex items-center gap-2 rounded p-2 ${isActive ? 'bg-gray-50 shadow-sm' : ''}`
                }
              >
                <HiOutlineClipboardList />
                My Order
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setIsOpen(!isOpen)}
                to="/dashboard/profile"
                className={({ isActive }) =>
                  `flex items-center gap-2 rounded p-2 ${isActive ? 'shaodw-sm bg-gray-50' : ''}`
                }
              >
                <HiOutlineUserCircle />
                My Profile
              </NavLink>
            </li>
          </ul>
        </div>
        <main className="min-h-screen w-screen bg-gray-200 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
