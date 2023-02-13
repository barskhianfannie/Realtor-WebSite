
import { useMemo, useState } from 'react';
import Image from 'next/image';
import * as help from '../../public/help.png';
import {PersonObject, EventObject } from '../../types/index';
import { useRouter,  } from 'next/router';

      


/*
This component is what you see on the /contact page. It will handle the form functionality. 
*/
const ScheduleCard = () => {
  const API_KEY = process.env.NEXT_PUBLIC_FOLLOW_UP_BOSS;
  // This state is the object used to capture what the user is inputting into the contact form. 
  const [requestProps, setRequestProps] = useState<EventObject>({
    source:'Website',
    type:'',
    person: {firstName:'', lastName:'', emails:[{value:''}], phones:[{value:''}]} as PersonObject,
  });

  const options = {
    method: 'PUT',
    headers: {accept: 'application/json', Authorization:`Basic ${API_KEY}:`},
  
    query: JSON.stringify({source: 'Website', type:requestProps.type, person:{firstName: requestProps.person.firstName, lastName:requestProps.person.lastName, stage:'LEAD', source:'Website', email:{value: requestProps.person.emails[0].value}, phone:{value:requestProps.person.phones[0].value}}})
  };
  const router = useRouter();
  const submitRequest =async ()=>{
    const response = await  fetch('https://api.followupboss.com/v1/events');
  }
  return (
    <div className="md:mx-10 lg:mx-40">
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="first-name"
            className="block mb-2  text-sm font-medium text-gray-900 dark:text-white"
          >
            First Name
          </label>
          <input
            type="text"
            value={requestProps.person.firstName}
            onInput={(e) => {
              setRequestProps({ ...requestProps, person:{...requestProps.person, firstName: e.currentTarget.value }});
            }}
            id="first-name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="First Name*"
            required
          />
        </div>
        <div>
          <label
            htmlFor="last-name"
            className="block mb-2  text-sm font-medium text-gray-900 dark:text-white"
          >
            Last Name
          </label>
          <input
            type="text"
            value={requestProps.person.lastName}
            onInput={(e) => {
              setRequestProps({ ...requestProps, person:{...requestProps.person, lastName: e.currentTarget.value }});
            }}
            id="last-name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Last Name*"
            required
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Phone number
          </label>
          <input
            type="number"
            onInput={(e) => {
              setRequestProps({ ...requestProps, person:{...requestProps.person, phones: [{value: e.currentTarget.value, type:'', isPrimary:true }]}});
            }}
            value={requestProps.person.phones[0].value}
            id="phone"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Phone Number*"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
          />
        </div>

        <div className="mb-2  m  md:block lg:block">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Email address
        </label>
        <input
          type="email"
          onInput={(e) => {
            setRequestProps({ ...requestProps, person:{...requestProps.person, emails: [{value: e.currentTarget.value, type:'', isPrimary:true }]}});
          }}
          value={requestProps.person.emails[0].value}
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Email*"
          required
        />
      </div>
      </div>
      <div className='w-full flex justify-center'>
      <Image src={help} height={100} width={300}/>

      </div>
      <div className='w-full flex justify-center'>
      <div className='w-1/2 ml'>
      {/* Each input here is of type checkbox. This is what allows the  */}
      <div id={'inquirytype'} className="flex  mb-2 mt-5  mx-auto ml-2 md:flex lg:flex">

          <input
            id="selling"
            type="checkbox"
            checked={requestProps.type === 'Selling'}
            onChange={() => {
              setRequestProps({
                ...requestProps,
                 type: requestProps.type === 'Free PVR' ? 'Selling(PVR)' : 'Selling',
              });
            }}
            className="  w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
            required
          />
          <label
            htmlFor="selling"
            className="ml-1 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Selling Inquiry
          </label>
      </div>
      <div className="flex items-start mb-2 ml-2">
          <input
            id="refinance"
            type="checkbox"
            checked={requestProps.type === 'Refinance'}
            onChange={() => {
              setRequestProps({
                ...requestProps,
                type: requestProps.type === 'Free PVR' ? 'Refinance(PVR)' : 'Refinance',
              });
            }}
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
            required
          />
          <label
            htmlFor="refinance"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Refinancing Inquiry
          </label>
      </div>
      <div className="flex items-start mb-2 ml-2">
          <input
            id="buying"
            type="checkbox"
            checked={requestProps.type === 'Buying'}
            onChange={() => {
              setRequestProps({
                ...requestProps,
                type: requestProps.type === 'Free PVR' ? 'Buying(PVR)' : 'Buying',
              });
            }}
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
            required
          />
          <label
            htmlFor="buying"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Buying Inquiry
          </label>
      </div>

      <div className="flex items-start mb-2  ml-2">
          <input
            id="report"
            type="checkbox"
            checked={requestProps.type === 'Selling(PVR)' ||requestProps.type === 'Buying(PVR)' || requestProps.type == 'Free PVR' || requestProps.type == 'Refinancing(PVR)'  }
            onChange={() => {
              setRequestProps({ ...requestProps, type: requestProps.type === '' ? 'Free PVR' : requestProps.type === 'Selling' ? 'Selling(PVR)' : requestProps.type === 'Buying' ?  'Buying(PVR)' : requestProps.type === 'Refinancing' ?  'Refinancing(PVR)' : ''});
            }}
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
            required
          />
          <label
            htmlFor="report"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Free Property Valuation Report
          </label>
      </div>
      </div>
      </div>
      <div className="mx-auto w-1/2 lg:w-1/4">
      <button className="uppercase text-sm font-bold tracking-wide bg-gray-500 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline" onClick={()=>{submitRequest()}}>
                        Submit Contact Request
            </button>
      </div>
    </div>
  );
};

export default ScheduleCard;
