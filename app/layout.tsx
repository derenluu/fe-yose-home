import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Sidebar from '@/components/Sidebar';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Yose Tracking',
  description: 'Yose Tracking',
  icons: {
    icon: [
      {
        url: '/vercel.svg',
        href: '/vercel.svg',
      },
    ],
  },
};

export default function RootLayout({ children }: any) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        {/* <Navbar /> */}
        <Sidebar />
        <main className=''>{children}</main>
      </body>
    </html>
  );
}
