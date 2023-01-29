import React, { useState } from "react";

interface MailButtonProps{
  subject:string,
  firstName:string, 
  lastName:string,
  emailUser:string,
  phone:string,
  type:string,
  buttonText:string,
}

const MailButton = ({subject,firstName, lastName, emailUser,phone,type, buttonText}:MailButtonProps) => {
const [message, setMessage] = useState("");
const sendMail = async () => {
    try {
        setMessage("Sending.....");
        const response = await fetch(`http://localhost:3000/api/follow-up/?firstName=${firstName}&lastName=${lastName}&emailUser=${emailUser}&phoneUser=${phone}`);
        const body = await response.json();
        if (body.ok) {
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