'use client';

import GridViewIcon from '@mui/icons-material/GridView';
import SettingsIcon from '@mui/icons-material/Settings';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Link from 'next/link';
import { useState } from 'react';

const Sidebar = () => {
  const listMenu = [
    { name: 'Dashboard', linkTo: '/dashboard', icon: <GridViewIcon /> },
    { name: 'Setting', linkTo: '/setting', icon: <SettingsIcon /> },
  ];

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={`${open ? 'w-72' : 'w-16'} bg-black min-h-screen text-gray-100 px-4 transition-all duration-300`}>
        <div className='py-3 flex items-center justify-end'>
          <button
            type='button'
            className='cursor-pointer'
            onClick={() => setOpen(!open)}>
            {open ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </button>
        </div>
        <div className='relative flex flex-col gap-4 mt-4 '>
          {listMenu.map((menu, index) => (
            <Link
              key={index}
              href={menu.linkTo}
              className='flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-100 rounded-md group'>
              {menu.icon}
              <h2
                className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}
                style={{ transitionDelay: `${index + 3}00ms` }}>
                {menu.name}
              </h2>
              <h2
                className={`${
                  open && 'hidden'
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg p-0 w-0 overflow-hidden group-hover:py-1 group-hover:px-2 group-hover:left-14 group-hover:duration-200 group-hover:w-fit`}>
                {menu.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
export default Sidebar;
