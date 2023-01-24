import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';
import * as tax from '../../public/taxdtco.png';

interface Props {
  frontPage: boolean;
}

const Landing = ({ frontPage }: Props) => {
  return (
    <div className="bg-gray">
      <section className="container items-center px-4 pb-12 mx-auto mt-20 lg:flex md:px-40">
        <div className="flex-1 space-y-4 sm:text-center lg:text-left">
          <h1 className="text-5xl font-bold text-black">
            Downey <br></br>Tax Company
          </h1>
          <p className="max-w-xl italic leading-relaxed text-gray-500 sm:mx-auto lg:ml-0">
            We are now scheduling remote and in-house appointments!{' '}
          </p>
          <div className="items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
            <a
              href="/schedule/remote"
              className="block px-6 py-2 text-center text-white bg-yellow-600 rounded-md"
            >
              Schedule An Appointment
            </a>
            <a
              href="/forms"
              className="block px-6 py-2 text-center text-gray-500 bg-white rounded-md"
            >
              Forms & Documents
            </a>
          </div>
        </div>
        <div className='flex justify-center mt-10'>
          <Image
            src={tax}
            width={300}
            height={300}
            className="w-16 mx-auto mt-6 justify-center"
          />
        </div>
      </section>
    </div>
  );
};

export default Landing;
