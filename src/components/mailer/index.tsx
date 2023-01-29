import React, { useState } from "react";



const MailButton = ({subject,firstName, lastName, emailUser,phone,type, children}:{subject:string, firstName:string, lastName:string, emailUser:string, phone:string, type:string, children:string}) => {
const [message, setMessage] = useState("");

const sendMail = async () => {
    try {
        setMessage("Sending.....");
        const response = await fetch(`http://localhost:3000/api/send-email?subject=${subject}&fullname=${firstName}${lastName}&emailUser=${emailUser}&phone=${phone}&type=${type}`);
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
        <div className={'py-10 flex justify-center mt-20'}>
            <button className="uppercase text-sm font-bold tracking-wide bg-gray-500 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline" onClick={sendMail}>{children}
            </button>
        </div>

        <p className="block">
            {message}
        </p>
    </>
    );
};

export default MailButton;