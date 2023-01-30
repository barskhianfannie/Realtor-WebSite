import React, { useState } from "react";
import { MailerTemplate } from '../mailer/helper';

interface MailButtonProps{
  subject:string,
  firstName:string, 
  lastName:string,
  emailUser:string,
  phoneUser:string,
  type:string,
  buttonText:string,
}

const MailButton = ({subject,firstName, lastName, emailUser,phoneUser,type, buttonText}:MailButtonProps) => {
const [message, setMessage] = useState("");
const sendMail = async () => {
    try {
<<<<<<< HEAD
        const response = await fetch(`/api/follow-up/?firstName=${firstName}&lastName=${lastName}&emailUser=${emailUser}&phoneUser=${phone}`);
        const body = await response.json();
        if (body.ok) {
=======
        const response = await MailerTemplate('barskhianfannie@gmail.com', firstName, lastName, emailUser, phoneUser, type);
        if (response.ok) {
>>>>>>> 008875f (api)
            setMessage("Thanks! I will reach out to you shortly!");
        }
    } catch (error) {
        console.log(error);
        // handle the error
    }
};
    return (
    <>
        <div className={'py-1 flex justify-center my-10'}>
            <button className="uppercase text-sm font-bold tracking-wide bg-gray-500 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline" onClick={sendMail}>{buttonText}
            </button>
        </div>

        <p className="block">
            {message}
        </p>
    </>
    );
};

export default MailButton;