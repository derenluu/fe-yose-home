'use client';

import Logo from '@/public/logo.svg';
import Avatar from '@/public/profile-picture-5.jpg';
import GridViewIcon from '@mui/icons-material/GridView';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  const [menuUser, setMenuUser] = useState(false);
  const [menuSidebar, setMenuSidebar] = useState(false);

  const toggleMenuSidebar = () => setMenuSidebar(!menuSidebar);
  const toggleMenuUser = () => setMenuUser(!menuUser);

  return (
    <>
      <nav className='fixed top-0 z-50 w-full bg-white border-b border-gray-200'>
        <div className='px-3 py-3 lg:px-5 lg:pl-3'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center justify-start rtl:justify-end'>
              <button
                type='button'
                className='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200'
                onClick={toggleMenuSidebar}>
                <MenuIcon />
              </button>

              <a
                href='/'
                className='flex ms-2 md:me-24'>
                <Image
                  src={Logo}
                  alt='Logo'
                  height={32}
                  className='me-3'
                />
                <span className='self-center text-xl font-semibold sm:text-2xl whitespace-nowrap'>Yose Home</span>
              </a>
            </div>

            <div className='flex items-center'>
              <div className='flex items-center ms-3'>
                <div>
                  <button
                    type='button'
                    className='flex text-sm rounded-full focus:ring-4 focus:ring-gray-300'
                    onClick={toggleMenuUser}>
                      <Image src={Avatar} alt="AvatarUser" width={32} height={32} className='rounded-full' />
                  </button>
                </div>

                <div
                  className={`absolute top-10 -right-1 mt-2 w-48 bg-white border rounded-md shadow-lg py-1 z-50 transition-all duration-300 transform ${
                    menuUser ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                  }`}
                  style={{ transitionProperty: 'transform, opacity' }}>
                  <div className='px-4 py-3'>
                    <p className='text-sm font-semibold text-gray-900'>Danh DL</p>
                  </div>
                  <hr />
                  <ul className='py-1'>
                    <li>
                      <a
                        href='/profile'
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
                        Profile
                      </a>
                    </li>
                    <li>
                      <a
                        href='/'
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
                        Sign Out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        className={`fixed top-0 left-0 z-40 w-52 h-screen pt-20 lg:pt-16 transition-transform ${
          menuSidebar ? 'translate-x-0' : '-translate-x-full'
        } bg-white border-r border-gray-200 lg:translate-x-0`}>
        <div className='h-full px-3 pb-4 overflow-y-auto bg-white'>
          <ul className='space-y-2 font-medium'>
            <li>
              <a
                href='/dashboard'
                className='flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100'>
                <GridViewIcon />
                <span className='ms-3'>Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href='/setting'
                className='flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100'>
                <SettingsIcon />
                <span className='flex-1 ms-3 whitespace-nowrap'>Setting</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
