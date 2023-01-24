import React from 'react';
import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog";
import "@reach/dialog/styles.css";
import Image from 'next/image';
import  irs from '../../public/irs.png';

const IRSButton = () => {
    const IRS_URL = "https://irs.gov";
    const open =()=>{
      window.open(IRS_URL, '_blank');
    }
  
    return (
      <div>
        <button 
        className="bg-gray hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        onClick={open} >
          <div className=' flex justify-center'>
          <Image src={irs} height={25} width={35} />
            <span className='flex justify-bottom  ml-3'>IRS Help Page</span>
          </div>
        </button>
      </div>
    );

  };

export default IRSButton ;