import { useState } from "react";

interface FormType{
  first:string,
  last:string, 
  email:string,
  phone:string,
  message:string,
  appointmentInterest:boolean,
}
const Contact = ()=>{

  const [formFields, setFormFields] = useState<FormType >({first:'', last:'', email:'', phone:'', message:'', appointmentInterest:false});

  const storeUserInput=()=>{
  }

  return (
    <div className="flex justify-center items-center  bg-white ">
	<div className="container mx-auto my-4 px-4 lg:px-20">

		<div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
			<div className="flex">
				<h1 className="font-bold uppercase text-4xl">Contact Us</h1>
			</div>
			<div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
				<input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text" placeholder="First Name*" value={formFields.first}onInput={(e)=>{setFormFields({...formFields, first:e.currentTarget.value})}}/>
				<input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text" placeholder="Last Name*"value={formFields.last} onInput={(e)=>{setFormFields({...formFields, last:e.currentTarget.value})}}/>
				<input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="email" placeholder="Email*" value={formFields.email}onInput={(e)=>{setFormFields({...formFields, email:e.currentTarget.value})}}/>
				<input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="number" placeholder="Phone*" value={formFields.phone} onInput={(e)=>{setFormFields({...formFields, phone:e.currentTarget.value})}}/>
        </div>
				<div className="my-4">
					<textarea placeholder="Message*" onInput={(e)=>{setFormFields({...formFields, message:e.currentTarget.value})}} className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
				</div>
        <div className="my-4">
        <label>
        <input type="checkbox"  onClick={(e)=>{setFormFields({...formFields, appointmentInterest:true})}} className="mr-5 ml-3 italic" />Interested in Scheduling an Appointment?
      </label>
				</div>
				<div className="my-2 w-1/2 lg:w-1/4">
          
					<button className="uppercase text-sm font-bold tracking-wide bg-gray-500 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline" onClick={(e)=>{storeUserInput()}}>
            Send Message
          </button>
				</div>
			</div>

			<div
				className="w-full lg:-mt-60 lg:w-2/6 px-8 py-12 ml-auto bg-gray-500 rounded-2xl">
				<div className="flex flex-col text-white">
					<h1 className="font-bold uppercase text-3xl my-4 sm:text-2xl">In Office Appointments</h1>
					<p className="text-gray-400 italic">We are open for Remote and In Office Tax Preparation services.</p>
					<div className="flex my-4 w-2/3 lg:w-1/2">
						<div className="flex flex-col">
							<i className="fas fa-map-marker-alt pt-2 pr-2" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl">Visit Us</h2>
              <p className="text-gray-400">8409 Florence Ave Suite #204 <br></br>Downey, CA 90240</p>
            </div>
          </div>
          
          <div className="flex my-4 w-2/3 lg:w-1/2">
            <div className="flex flex-col">
              <i className="fas fa-phone-alt pt-2 pr-2" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl">Call Us</h2>
              <p className="text-gray-400">Tel: 562-862-1040</p>
            </div>
          </div>
        
        </div>
      </div>
    </div>
</div>
  )
};
 export default Contact;