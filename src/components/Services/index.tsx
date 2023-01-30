import React from 'react'
import ServicesCard from './ServicesCards';
import {BUYING_ENGLISH, SELLING_ENGLISH, REFINANCING_ENGLISH} from './config';
import * as buying from '../../public/buying.gif';
import * as sold from '../../public/sold.gif';
import ServicesHeader from './ServicesHeader';



const ServicesMainCard = () => {
  return (
    <div className='flex justify-center mt-20 lg:mt-20'>
      <div className='flex justify-center'>
        <ServicesHeader/>
      </div>

    </div>
  )
};

export default ServicesMainCard;
