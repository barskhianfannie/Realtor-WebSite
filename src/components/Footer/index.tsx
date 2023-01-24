
import Image from 'next/image';
import * as tax from '../../public/taxdtco.png';
import Link from 'next/link';

const Footer = ()=>{
return (
<footer className="p-4 rounded-lg  md:px-6 md:py-8 dark:bg-gray-900 relative mx-auto  w-5/6">
    <div className="sm:flex sm:items-center sm:justify-between">
        <Link href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">        </Link>
        <div className='flex justify-center'>
        <Image src={tax} height={50} width={50} />
        </div>
        <ul className="flex items-center justify-center my-2 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
            <div className={'mr-4'}>

                <Link href="/forms" className="mr-4 hover:underline md:mr-6 ">Forms</Link>
                </div>

            </li>
            <li>
            <div className={'mr-4'}>

                <Link href="/" className="mr-4 hover:underline md:mr-6">Contact</Link>
                </div>

            </li>

        </ul>
    </div>
    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">©<Link href="/" className="hover:underline">Downey Tax Company</Link>. All Rights Reserved.
    </span>
</footer>

)
}
export default Footer;