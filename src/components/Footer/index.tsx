import React from 'react';
import * as navlogo from '../../public/ydblack.png';
import Image from 'next/image';

export default function Footer({ fixed }: any) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <>
      <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl text-center">
        <Image
            src={navlogo}
            height={20}
            width={20}
            className="flex justify-center items-center text-gray-900 dark:text-white"
          />
          {/* Usually we dont want to use a tag's but its okay here- im being lazy and dont want to style them. */}
          <ul className="flex flex-wrap justify-center items-center mb-1 text-gray-900 dark:text-white">
          <li>
              <a href="/" className="mr-4 hover:underline md:mr-6 ">
                Home
              </a>
            </li>
            <li>
              <a href="/services" className="mr-4 hover:underline md:mr-6 ">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="mr-4 hover:underline md:mr-6 ">
                Contact
              </a>
            </li>
          </ul>

          <span className="text-sm block text-gray-500 sm:text-center dark:text-gray-400">
          CA DRE #02147940 | 562. 291. 8103
          </span>
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023 Yesenia Diaz
          </span>
        </div>
      </footer>
    </>
  );
}
