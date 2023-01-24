import * as world from '../../public/taxdayanimated.png';
import * as man from '../../public/2023man.png';
import * as remote from '../../public/computer.png';
import * as business from '../../public/building.png';

import Link from 'next/link';

import Image from 'next/image';
import { JesseCard, LizCard } from '../Cards/founders';
const Services = () => {
  return (
    <section className=" border-b-2  w-full p-2 mb-10 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-2 dark:bg-gray-800 dark:border-gray-700">
      <div className="py-2 px-1 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <a
          href="#"
          className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
          role="alert"
        >
          <span className="text-xs bg-primary-600 rounded-full shadow-sm text-red-500 px-4 py-1.5 mr-3">
            2022
          </span>{' '}
          <span className="text-sm font-medium italic">
            Tax Season Has Started!
          </span>
          <svg
            className="ml-2 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Scheduling Remote and In-House Appointments Now!
        </h1>
        <p className="mb-1 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Downey Tax Company utilizes registered and licensed tax professionals
          for both in-house and remote tax preparation. Our office is located in
          Downey, CA and we are available for remote tax preparation to anyone
          across the United States. With integrity, dedication and
          professionalism, Downey Tax Company is committed to providing
          outstanding service.
        </p>
      </div>
    </section>
  );
};
export default Services;
