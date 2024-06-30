import Sidebar from '@/components/Sidebar';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { ReactNode } from 'react';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Yose Tracking',
  description: 'Yose Tracking',
  icons: {
    icon: '/vercel.svg',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <div className='flex h-full'>
          <div className='h-screen w-1/6 m-0 p-0'>
            <Sidebar />
          </div>
          <div className='h-screen w-5/6 m-0 p-0'>{children}</div>
        </div>
      </body>
    </html>
  );
}
