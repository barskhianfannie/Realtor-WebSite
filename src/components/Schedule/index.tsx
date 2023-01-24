import Image from "next/image";
import * as remote from '../../public/computer.png'
import * as businexx from '../../public/building.png'
import Link from "next/link";


const ScheduleCard=()=>{
  return (
<div className=" border-b-2  w-full p-4 mb-10 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Let</h5>
    <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
        <Link href="/schedule/remote" className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                <div className="flex">
                <Image src={remote} height={10} width={30} />
                <div className="text-left ml-3">
                <div className="mb-1 text-xs">Schedule </div>
                <div className="-mt-1 font-sans text-sm font-semibold">Remote Appointment</div>
                </div>
            </div>
        </Link>
        <a href="/schedule/inhouse" className="w-full sm:w-auto bg-neutral-400 hover:bg-slate-200 focus:ring-4 focus:outline-none focus:ring-gray-300 text-black border-black rounded-lg inline-flex items-center justify-center px-4 py-2.5">
        <div className="flex">
                <Image src={businexx} height={10} width={30} />
        <div className="text-left ml-3">
                <div className="mb-1 text-xs font-black">Schedule</div>
                <div className="-mt-1 font-sans text-sm font-semibold">In-Office Appointment</div>
            </div>
            </div>
        </a>
    </div>
    </div>
  )
};

export { ScheduleCard};