'use client';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GridViewIcon from '@mui/icons-material/GridView';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const Sidebar = () => {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    setCurrentPath(pathname); // Lấy đường dẫn hiện tại
  }, [pathname]);

  const listMainMenu = [
    { name: 'Tracking', linkTo: '/home/tracking', icon: <GridViewIcon /> },
    { name: 'Calendar', linkTo: '/home/calendar', icon: <CalendarMonthIcon /> },
    { name: 'Setting', linkTo: '/home/setting', icon: <SettingsIcon /> },
  ];

  const listBottomMenu = [
    { name: 'Profile', linkTo: '/home/profile', icon: <AccountCircleIcon /> },
    { name: 'Logout', linkTo: '/login', icon: <LogoutIcon /> },
  ];

  return (
    <div className='relative flex flex-col h-full w-1/6 bg-[#111827] text-white'>
      <aside className='fixed top-0 left-0 z-40 w-1/6 h-screen transition-transform sm:translate-x-0'>
        <div className='h-full flex flex-col px-4 py-6 overflow-y-auto bg-[#1F2937]'>
          <div className='flex items-center space-x-4'>
            <Image
              src={'/profile-pic.jpg'}
              className='rounded-full'
              width={40}
              height={40}
              alt='Avatar'
            />
            <h3 className='text-lg font-semibold'>Deren Luu</h3>
          </div>

          <ul className='pt-6 mt-6 space-y-2 border-t border-gray-700 flex-grow'>
            {listMainMenu.map((menu, index) => (
              <li key={index}>
                <Link href={menu.linkTo}>
                  <div
                    className={`flex items-center p-2 transition duration-150 rounded-lg hover:bg-gray-700 ${
                      currentPath === menu.linkTo ? 'bg-gray-700' : ''
                    }`}>
                    <div className='flex items-center justify-center w-5 h-5 text-gray-400 transition duration-150 transform group-hover:text-white group-hover:scale-110'>
                      {menu.icon}
                    </div>
                    <span className='ml-3 transition duration-150 group-hover:text-white'>
                      {menu.name}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <ul className='pt-6 mt-6 space-y-2 border-t border-gray-700'>
            {listBottomMenu.map((menu, index) => (
              <li key={index}>
                <Link href={menu.linkTo}>
                  <div
                    className={`flex items-center p-2 transition duration-150 rounded-lg hover:bg-gray-700 ${
                      currentPath === menu.linkTo ? 'bg-gray-700' : ''
                    }`}>
                    <div className='flex items-center justify-center w-5 h-5 text-gray-400 transition duration-150 transform group-hover:text-white group-hover:scale-110'>
                      {menu.icon}
                    </div>
                    <span className='ml-3 transition duration-150 group-hover:text-white'>
                      {menu.name}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
