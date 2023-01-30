import Image from 'next/image';
import Link from 'next/link';

interface ServiceCardProps {
  header: string;
  description: string[];
  buttonText: string;
  image: any;
  flipped: boolean;
  url?: string;
}

const ServicesCard = ({
  header,
  description,
  buttonText,
  image,
  flipped,
  url,
}: ServiceCardProps) => {

  const flippedcss = flipped ? 'text-left' : '';
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-4 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      {flipped ? (
          <div className="px-10 py-10 hidden md:flex lg:flex  lg:mt-0 lg:col-span-4 lg:row-span-3 ">
          <Image src={image} alt={`${header} picture`} />
          </div>
        ) : (
          ''
        )}
        {flipped ? (''
         ) : (''
        )}
        <div className="mr-auto place-self-center justify-end lg:col-span-8">
          <h1 className={`max-w-4xl mb-4 text-2xl justify-end ${flippedcss} font-extrabold tracking-tight leading-none md:text-4xl xl:text-4xl dark:text-white`}>
            {header}
          </h1>
          <p className={`max-w-4xl mb-2  text-xs font-light ${flippedcss} text-gray-500 lg:mb-2 md:text-lg lg:text-sm dark:text-gray-400`}>
            {description[0]}
          </p>
          <p className={`max-w-4xl mb-2 font-light  text-xs ${flippedcss} text-gray-500 lg:mb-2 md:text-lg lg:text-sm dark:text-gray-400`}>
            {description[1]}
          </p>
          <p className={`max-w-4xl mb-2  text-xs font-light  ${flippedcss} text-gray-500 lg:mb-2 md:text-lg lg:text-sm dark:text-gray-400`}>
            {description[2]}
          </p>
          <p className={`max-w-4xl mb-2  text-xs font-light  ${flippedcss} text-gray-500 lg:mb-82md:text-lg lg:text-sm dark:text-gray-400`}>
            {description[3]}
          </p>
          <Link
            href={url}
            className="inline-block  items-center mt-10 justify-center px-3 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            <div className=' mt-10 bg-gray-400 text-center text-white min-w-min p-2 rounded-2xl w-32'>
            {buttonText}
            </div>
          </Link>
        </div>
        {!flipped ? (
          <div className="px-10 py-10 hidden md:flex lg:flex  lg:mt-0 lg:col-span-4 lg:row-span-3 ">
            <Image src={image} alt={`${header} picture`} />
          </div>
        ) : (
          ''
        )}
      </div>
    </section>
  );
};

export default ServicesCard;
