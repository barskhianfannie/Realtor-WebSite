import React from 'react';
import * as navlogo from '../../public/ydblack.png';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(true);
  const router = useRouter();

  const cssContact = router.pathname === '/contact' ? 'bg-gray-400 text-white' : '';
  const cssServices = router.pathname === '/services' ? 'bg-gray-400 text-white' : '';
  const cssHome = router.pathname !== '/contact' && router.pathname !== '/services' ? 'bg-gray-400 text-white' : '';


if(navbarOpen){
  return (

<nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
  <a href="" className="flex items-center">
      <Image src={navlogo} className="h-6 mr-3 sm:h-1" height={20} width={20} alt="Yesenia Diaz Logo"/>
  </a>
  <div className="flex md:order-2">
      <button type="button" className="text-white hidden bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
      <button onClick={()=>{setNavbarOpen(false)}} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
    </button>
  </div>
  <div className="items-center hidden justify-between  w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
  <ul className="flex flex-col p-2 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="/" className={`block  pl-3 pr-4 ${cssHome}  rounded `}>Home</a>
      </li>
      <li>
        <a href="/services"  className={`block my-3  pl-3 pr-4 ${cssServices}  rounded `} >Services</a>
      </li>
      <li>
        <a href="/contact"  className={`block my-3 pl-3 pr-4 ${cssContact}  rounded `}>Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>

  );
}else{
  return (
<nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
  <a href="" className="flex items-center">
      <Image src={navlogo} className="h-6 mr-3 sm:h-1" height={20} width={20} alt="Yesenia Diaz Logo"/>
  </a>
  <div className="flex md:order-2">
      <button type="button" className="text-white hidden bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
      <button onClick={()=>{setNavbarOpen(true)}} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
    </button>
  </div>
  <div className="items-center justify-between  w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
  <ul className="flex flex-col p-2 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="/" className={`block  pl-3 pr-4 ${cssHome}  rounded `}>Home</a>
      </li>
      <li>
        <a href="/services"  className={`block my-3  pl-3 pr-4 ${cssServices}  rounded `} >Services</a>
      </li>
      <li>
        <a href="/contact"  className={`block my-3 pl-3 pr-4 ${cssContact}  rounded `}>Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>

  );
}
}
