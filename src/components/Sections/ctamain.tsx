import Image from "next/image"; // These are used instead of <img></img> (from regular HTML because Next does auto optimization for Images.)
import Link from "next/link"; // These are used instead of <a></a (from regular HTML because thats how Next framework works.)
import * as zillow from '../../public/zillow.gif';
import * as realtor from '../../public/realtor.png'
import { useRouter } from "next/router";

// Call To Action Section of the Landing Page
const CTAMainSection = () =>{
  const router = useRouter();
  return(
    <section className="bg-white dark:bg-gray-900">
    <div className="py-2 px-2 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Los Angeles Realtor</h1>
        <p className="mb-8 text-sm font-light italic text-gray-500 lg:text-xl sm:px-1 xl:px-20 dark:text-gray-400">
        My business is built upon a foundation of service. I am dedicated to my clients and go above and beyond to meet their needs.
          </p>
          <div className="flex justify-center min-w-min">
            <div className="flex p-3 rounded-3xl shadow flex-col mb-8  bg-gray-100 border-2">
        <Link  href={'/contact'}>
                Contact Me
        </Link>
        </div>
        </div>
        {/* The className attrib. is where you add all of the tailwind css. The md: and lg: indicate what the css should be at diff size screens. You want to think mobile first.  */}
        <div className="px-4 mx-auto text-center md:max-w-screen-sm lg:max-w-screen-sm lg:px-36">
            <span className="font-semibold text-gray-400 uppercase">FIND ME ON</span>
            <div className="flex flex-wrap justify-center items-center mt-8 mx-2 text-gray-500 ">
        {/* The link section href prop will tell us where to route too. This is a 3rd party so we need to make sure it opens in another tab.  */}
        <div className="mr-2">
                <Link href="https://zillow.com" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"> 
                <Image src={zillow} height={50} width={50} className="mr-2"/>                     
                </Link>
                </div>
                <div className="mr-2">

                <Link href="https://realtor.com" className="mr-5 mb-5 mx-1 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                  <Image src={realtor} height={50} width={50} className="rounded-xl mx-1"/>
                </Link>  
                </div>    
            </div>
        </div> 
    </div>
</section>
  )
};

export default CTAMainSection;