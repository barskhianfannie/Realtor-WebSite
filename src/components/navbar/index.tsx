import React from 'react';
import * as navlogo from '../../public/ydblack.png';
import Image from 'next/image';
import { useContext } from 'react';
import Link from 'next/link';
import { PageContext } from '../../utils/contexts';
import { ENGLISH_NAV, SPANISH_NAV } from '../../config/header';
import { LanguageController } from './LanguageToggle';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const { language :{language}, setLanguage } = useContext(PageContext);
  const showcss = navbarOpen ? '' : 'hidden';
  const configuredLanguageContent = language === 'English' ? ENGLISH_NAV : SPANISH_NAV;
    return (
      <>
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
          <div className="container flex flex-wrap items-center justify-between mx-auto">
            <Link href="/" className="flex items-center">
              <Image
                src={navlogo}
                className="h-6 mr-3 sm:h-9"
                height={50}
                width={50}
                alt="yd"
              />
            </Link>
            <div className="flex items-center md:order-2">
              <LanguageController/>
            </div>
            <div
              className={`items-center justify-between ${showcss} w-full md:flex md:w-auto md:order-1`}
              id="mobile-menu-language-select"
            >
              <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link
                    href="/"
                    className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    {configuredLanguageContent[0]}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    {configuredLanguageContent[1]}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    {configuredLanguageContent[2]}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
}
