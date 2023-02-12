

import LogoSection from '@components/Sections/logo';
import Image from 'next/image';
import * as forsale from '../../../public/forsale.png';
import ServicesCard from '../ServicesCards';
import {BUYING_ENGLISH, SELLING_ENGLISH, REFINANCING_ENGLISH, BUYING_SP, SELLING_SP, REFINANCING_SP, ENGLISH_HEADER, SPANISH_HEADER, ENGLISH_CTA, SPANISH_CTA} from '../config';
import * as buying from '../../public/buying.gif';
import * as sold from '../../public/sold.gif';
import { useContext } from 'react';

import { PageContext } from '@utils/contexts';
import { ENGLISH_NAV, SPANISH_NAV } from '@config/header';



const ServicesHeader = () => {

  const { language:{language}, setLanguage } = useContext(PageContext);
  const BUYING = language === 'English' ? BUYING_ENGLISH : BUYING_SP;
  const SELLING = language === 'English' ? SELLING_ENGLISH : SELLING_SP;
  const REFINANCING = language === 'English' ? REFINANCING_ENGLISH : REFINANCING_SP;
  const HEADER =language === 'English' ? ENGLISH_HEADER : SPANISH_HEADER;
  const CTA = language === 'English' ? ENGLISH_CTA : SPANISH_CTA;

  return (
    <section className="bg-white dark:bg-gray-900">
    <div className="grid  px-0 py-4  lg:gap-8 xl:gap-0 lg:py-16 lg:px-4 lg:grid-cols-8">
        <div className="mr-auto place-self-center lg:col-span-5">
            <h1 className="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-4xl dark:text-white">{HEADER}</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-lg dark:text-gray-400">{CTA}</p>
           
        </div>
        <div className=" opacity-80 rounded-xl  lg:mt-0 lg:col-span-3 lg:flex">
            <Image src={forsale} className={'rounded-3xl'} height={200} width={400}  />
        </div>                
    </div>
    <div id="#buying"  className='flex justify-center'>
        <ServicesCard header={BUYING.header} description={BUYING.description}  url={BUYING.url} flipped={false} image={BUYING.image} buttonText={BUYING.buttontext}/>
      </div>
      <div id="#selling"  className='flex justify-center'>
      <ServicesCard header={SELLING.header} description={SELLING.description}  url={SELLING.url} flipped={true} image={SELLING.image} buttonText={SELLING.buttontext}/>
      </div>
      <div  id="#refinancing" className='flex justify-center'>
      <ServicesCard header={REFINANCING.header} description={REFINANCING.description}  url={REFINANCING.url} flipped={false} image={REFINANCING.image} buttonText={REFINANCING.buttontext}/>
      </div>
</section>
  );
};

export default ServicesHeader;
