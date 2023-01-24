import React from 'react';
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import Link from 'next/link';
import { useRouter } from 'next/router';

import Image from 'next/image';

const AppointmentDialog = () => {
    const [showDialog, setShowDialog] = React.useState(false);
    const open = () => setShowDialog(true);
    const close = () => setShowDialog(false);

    const handleAppointmentSubmission=()=>{

    }
  const router = useRouter();
    return (
      <div>
        <button 
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        onClick={open} >
          Schedule An Appointment
        </button>
  
        <Dialog isOpen={showDialog} onDismiss={close} className='bg-white rounded-lg'>
          <>
          <h2 className='text-4xl  mb-10 text-center'>Appointment Request Form</h2>
          <div className='flex justify-center mx-16'>
          <Image className='text-4xl mr-10 mb-10' src={''} height={200} width={200}/>
          <p className='italic text-center'>Thanks for trusting Downey Tax Company! We look forward to helping you with all of your 2022 tax needs this year! We offer Remote and In House Tax Preparation Appointments.</p>
          </div>
          <div className="items-center mt-10 justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
        <Link href="/schedule/remote" className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">       </Link>
                <div className="flex">
                <button className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700" onClick={()=>router.push('/schedule/remote')}>

                <Image src={''} height={30} width={30} />
                <div className="text-left ml-3">
                <div className="mb-1 text-xs">Schedule </div>
                <div className="-mt-1 font-sans text-sm font-semibold">Remote Appointment</div>
                </div>
                </button>

            </div>
        <Link href="/schedule/office" className="w-full sm:w-auto bg-neutral-400 hover:bg-slate-200 focus:ring-4 focus:outline-none focus:ring-gray-300 text-black border-black rounded-lg inline-flex items-center justify-center px-4 py-2.5">        </Link>

        <div className="flex ">
        <button className="w-full sm:w-auto bg-white hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-black rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700" onClick={()=>router.push('/schedule/remote')}>
                <Image src={''} height={30} width={30} />
        <div className="text-left ml-3">
                <div className="mb-1 text-xs font-black">Schedule</div>
                <div className="-mt-1 font-sans text-sm font-semibold">In-Office Appointment</div>
            </div>
            </button>
            </div>
    </div>
                    </>
        </Dialog>
      </div>
    );

  };

export default AppointmentDialog ;