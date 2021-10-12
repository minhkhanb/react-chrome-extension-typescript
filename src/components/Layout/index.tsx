import React from 'react';
import { Link, Location } from '@reach/router';
import { HomeIcon, UserIcon } from '@heroicons/react/solid';
import NavLink from '../NavLink';

interface LayoutProps {
  location: Location;
  children?: any;
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header className="bg-gray-500 py-4">
        <div className="container px-4">
          <div className="flex justify-between">
            <h1 className="mb-2 font-medium text-2xl text-white">Extension</h1>
            <button className="w-8 h-8">
              <span className="block w-full h-1 bg-white mb-1" />
              <span className="block w-full h-1 bg-white mb-1" />
              <span className="block w-1/2 h-1 bg-white ml-auto" />
            </button>
          </div>
        </div>
      </header>

      <main className="h-96 bg-white drop-shadow-sm">
        {children}
      </main>

      <footer>
        <div className="footer">
          <ul className="flex bg-gray-400">
            <li>
              <NavLink
                to="/"
                className="block p-4 text-yellow-600"
              >
                <HomeIcon className="w-6 h-6" />
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/profile"
                className="block p-4 border-l text-pink-600"
              >
                <UserIcon className="w-6 h-6" />
              </NavLink>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Layout;
