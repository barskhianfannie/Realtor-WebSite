
import { useMemo, useState } from 'react';
import MailButton from '@components/MailButton';
import Image from 'next/image';
import * as help from '../../public/help.png';

// This is our type
interface ContactParams {
  firstName: string;
  lastName:string;
  phone: string;
  email: string;
  selling: boolean;
  refinancing: boolean;
  report: boolean;
  other: boolean;
}

/*
This component is what you see on the /contact page. It will handle the form functionality. 
*/
const ScheduleCard = () => {
  // This state is the object used to capture what the user is inputting into the contact form. 
  const [request, setRequest] = useState<ContactParams>({
    firstName: '',
    lastName:'',
    phone: '',
    email: '',
    selling: false,
    refinancing: false,
    report: false,
    other: false,
  });

  const ContactTypeStringForEmail = useMemo(()=>{
    if (request.selling && request.refinancing && request.report) {
      return 'Selling Inquiry with Free Valuation Report';
    } else if (request.refinancing && request.report) {
      return 'Refinancing Inquiry with Free Valuation Report';
    } else if (request.refinancing && request.selling) {
      return 'Selling and Refinancing Inquiry';
    } else if (request.report) {
      return 'Free Valuation Report Only';
    } else if (request.refinancing) {
      return 'Refinancing Inquiry Only';
    } else if (request.selling) {
      return 'Selling Inquiry Only';
    } else if (request.other) {
      return 'Other Inquiry Only';
    }
  },[request.selling, request.refinancing, request.report, request.other]);

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
            value={request.firstName}
            onInput={(e) => {
              setRequest({ ...request, firstName: e.currentTarget.value });
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
            value={request.lastName}
            onInput={(e) => {
              setRequest({ ...request, lastName: e.currentTarget.value });
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
              setRequest({ ...request, phone: e.currentTarget.value });
            }}
            value={request.phone}
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
            setRequest({ ...request, email: e.currentTarget.value });
          }}
          value={request.email}
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
            checked={request.selling}
            onChange={() => {
              setRequest({
                ...request,
                selling: request.selling ? false : true,
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
            checked={request.refinancing}
            onChange={() => {
              setRequest({
                ...request,
                refinancing: request.refinancing ? false : true,
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

      <div className="flex items-start mb-2  ml-2">
          <input
            id="report"
            type="checkbox"
            checked={request.report}
            onChange={() => {
              setRequest({ ...request, report: request.report ? false : true });
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
      <div className="flex items-start mb-2  ml-2">
          <input
            id="other"
            type="checkbox"
            checked={request.other}
            onChange={() => {
              setRequest({ ...request, other: request.other ? false : true });
            }}
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
            required
          />
          <label
            htmlFor="other"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Other
          </label>
      </div>
      </div>
      </div>
      <div className="mx-auto w-1/2 lg:w-1/4">
        <MailButton
          firstName={request.firstName}
          lastName={request.lastName}
          phone={request.phone}
          emailUser={request.email}
          type={ContactTypeStringForEmail}
          subject={'Contact Request'}
          buttonText={'Contact Me'}
        />
      </div>
    </div>
  );
};

export default ScheduleCard;
