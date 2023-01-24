import Image from 'next/image';
import * as jesse from '../../public/jesse.png';
import * as liz from '../../public/liz.png';

const JesseCard = () => {
  return (
    <div className="w-80 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
      <div className="flex flex-col items-center pb-10 pt-10">
        <Image
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={jesse}
          alt="Bonnie image"
          height={100}
          width={100}
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          Jesse Alvarez
        </h5>
        <span className="text-sm italic text-gray-500 dark:text-gray-400">
          10+ years Tax Preparation Experience
        </span>
      </div>
    </div>
  );
};
const LizCard = () => {
  return (
    <div className="w-80 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
      <div className="flex flex-col items-center pb-10 pt-10">
        <Image
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={liz}
          alt="Bonnie image"
          height={100}
          width={100}
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          Lizetth Samaniego
        </h5>
        <span className="text-sm italic text-gray-500 dark:text-gray-400">
          20+ years Tax Preparation Experience
        </span>
      </div>
    </div>
  );
};
export { LizCard, JesseCard };
