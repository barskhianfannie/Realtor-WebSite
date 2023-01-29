

import LogoSection from '@components/Sections/logo';
import Image from 'next/image';
import * as forsale from '../../../public/forsale.png';
import ServicesCard from '../ServicesCards';
import {BUYING_ENGLISH, SELLING_ENGLISH, REFINANCING_ENGLISH} from '../config';
import * as buying from '../../public/buying.gif';
import * as sold from '../../public/sold.gif';
const ServicesHeader = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
    <div className="grid  px-0 py-4  lg:gap-8 xl:gap-0 lg:py-16 lg:px-4 lg:grid-cols-8">
        <div className="mr-auto place-self-center lg:col-span-5">
            <h1 className="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-4xl dark:text-white">Residential Properties</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-lg dark:text-gray-400"> Interested in Buying, Selling, or Refinancing? </p>
            <a href="#buying" className="hidden md:inline-flex  items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
               Buying
            </a> 
            <a href="#selling" className="hidden md:inline-flex items-center ml-2 justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
               Selling
            </a> 
            <a href="#refinance" className="hidden md:inline-flex  items-center ml-2 justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
               Refinance
            </a> 
        </div>
        <div className=" opacity-80 rounded-xl  lg:mt-0 lg:col-span-3 lg:flex">
            <Image src={forsale} className={'rounded-3xl'} height={200} width={400}  />
        </div>                
    </div>
    <div id="#buying"  className='flex justify-center'>
        <ServicesCard header={BUYING_ENGLISH.header} description={BUYING_ENGLISH.description}  url={BUYING_ENGLISH.url} flipped={false} image={BUYING_ENGLISH.image} buttonText={BUYING_ENGLISH.buttontext}/>
      </div>
      <div id="#selling"  className='flex justify-center'>
      <ServicesCard header={SELLING_ENGLISH.header} description={SELLING_ENGLISH.description}  url={SELLING_ENGLISH.url} flipped={true} image={SELLING_ENGLISH.image} buttonText={SELLING_ENGLISH.buttontext}/>
      </div>
      <div  id="#refinancing" className='flex justify-center'>
      <ServicesCard header={REFINANCING_ENGLISH.header} description={REFINANCING_ENGLISH.description}  url={REFINANCING_ENGLISH.url} flipped={false} image={REFINANCING_ENGLISH.image} buttonText={REFINANCING_ENGLISH.buttontext}/>
      </div>
</section>
  );
};

export default ServicesHeader;
