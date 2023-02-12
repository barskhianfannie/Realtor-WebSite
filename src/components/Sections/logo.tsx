import Image from 'next/image';
import * as ydmain from '../../public/ydmain.png'

const LogoSection = () => {
  return (
      <section className="container items-center px-4 pb-4 mx-auto  lg:flex md:px-4">
      <div className='flex justify-center mt-10 w-full h-full '>
          <Image
            src={ydmain}
            width={600}
            height={600}
            className="w-16 min-h-full m-w-full mx-auto mt-6 justify-center"
          />
        </div>
        </section>
  )
};
export default LogoSection;