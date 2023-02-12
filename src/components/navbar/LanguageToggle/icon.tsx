import Image from 'next/image';
import * as eng from '../../../public/us.png';
import * as mex from '../../../public/mexico.png';


interface IconProps{
  language:string;
}

const LanguageIcon = ({language}:IconProps) => {
  if (language === 'English') {
    return <Image src={eng} height={20} width={20} className='mr-5' />;
  } else {
    return <Image src={mex} height={20} width={20} className='mr-5' />;
  }
};

export default LanguageIcon;
