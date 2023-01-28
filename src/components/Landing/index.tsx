import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';
import * as ydmain from '../../public/ydmain.png'
import MainHero from '@components/Hero/main';
import CTAMainSection from '@components/Hero/ctamain';
import SearchBar from '@components/SearchBar';

interface Props {
  frontPage: boolean;
}

const Landing = ({ frontPage }: Props) => {
  return (
    <div className="bg-white min-h-full min-w-full mx-auto">
      <section className="container items-center px-4 pb-4 mx-auto  lg:flex md:px-4">
      <div className='flex justify-center mt-10 w-full h-full'>
          <Image
            src={ydmain}
            width={600}
            height={600}
            className="w-16 min-h-full m-w-full mx-auto mt-6 justify-center"
          />
        </div>
        </section>
        {/* <section className="container items-center px-4 pb-4 mx-auto mt-20 lg:flex md:px-4">
      <div className='flex justify-center mt-10 w-full h-full'>
    <SearchBar/>
        </div>
        </section> */}
        
        <section className="container items-center px-4 pb-4 mx-auto mt-20 lg:flex md:px-40">
      <div className='flex justify-center mt-10 w-full h-full'>
      <MainHero/>
        </div>
        </section>
        <section className="container items-center px-2 pb-4 mx-auto mt-10 lg:flex md:px-40">
      <div className='flex justify-center mt-10 w-full '>
      <CTAMainSection/>
        </div>
        </section>

        </div>
  );
};

export default Landing;
