interface InquiryType{
  source: string | 'Website',
  type: string | 'Visited Website',
  firstName:string,
  lastName:string,
  stage:string,
  emails: emailphonetype[],
  phones: emailphonetype[]
  pageReferrer?:string

}

interface emailphonetype{
  value:string,
  isPrimary:false
}

import { sendMail } from '../../../components/mailer/helper';
export default async function checkUserAPI(request, response) {

  const {
    query: {
      firstName,
      lastName,
      emailUser,
      phone,
      type
    },
  } = request;

  const result = await sendMail('yeseniadiaz.la@gmail.com', firstName, lastName, emailUser, phone, type);
  response.json(result);
}


// export default async function checkUserAPI(request, response) {
//   const{
//     req:
//     firstName,
//     lastName,
//     emailUser,
//     phoneUser
    
//   }= request;
//   const options = {
//     method: 'POST',
//     headers: {accept: 'application/json', 'content-type': 'application/json'},
//     body: JSON.stringify({person: {contacted: false, source: 'Website', type: 'Website Inquiry', firstName: firstName, lastName: lastName, stage: 'New Lead', 
//     emails:[{value: emailUser, isPrimary:false}], phones: [{value: phoneUser, isPrimary:false}]
//   }})
//   };
//   const result = await fetch('https://api.followupboss.com/v1/events', options);
//   response.json(result);
//   console.log(response);
// }




// import { sendMail } from '../../components/mailer/helper';
// export default async function checkUserAPI(request, response) {

//   const{
//     req:
//     firstName,
//     lastName,
//     emailUser,
//     phoneUser
    
//   }= request;

//   const result = await sendMail('yeseniadiaz.la@gmail.com', firstName, emailUser, phone, type);
//   response.json(result);
// }

// import { Curl } from "node-libcurl";
// import  querystring from "querystring";

// interface InquiryType{
//   source: string | 'Website',
//   type: string | 'Visited Website',
//   firstName:string,
//   lastName:string,
//   stage:string,
//   emails: emailphonetype[],
//   phones: emailphonetype[]
//   pageReferrer?:string

// }

// interface emailphonetype{
//   value:string,
//   isPrimary:false
// }
// const API_KEY = process.env.NEXT_PUBLIC_FOLLOW_IP;

// export default async function checkUserAPI(request, response) {
//   const{
//     req:
//     firstName,
//     lastName,
//     emailUser,
//     phoneUser,
//     type
//   }= request;

// const data =`{
//     "source": "Personal Website",
//     "type": "General Inquiry",
//     "message": "${type}",
//     "person": {
//         "firstName": "${firstName}",
//         "lastName": "${lastName}",
//         "emails": [{"value": "${emailUser}"}],
//         "phones": [{"value": "${phoneUser}"}],
//         "tags": ["Contact Us"]
//     }
// }`;

// console.log(data, '<---datat')


// const curlTest = new Curl();
// const terminate = curlTest.close.bind(curlTest);

// curlTest.setOpt(Curl.option.URL, `https://api.followupboss.com/v1/events/`);
// console.log('here')
// curlTest.setOpt(Curl.option.POST, true);
// curlTest.setOpt(
// 	Curl.option.POSTFIELDS,
// 	querystring.stringify({
// 		API_KEY:API_KEY,
// 		JSON:data,
// 	})
// );

// curlTest.on("end", function (statusCode, data, headers) {
// 	console.info("Status code " + statusCode);
// 	console.info("***");
// 	console.info("Our response: " + data);
// 	console.info("***");
// 	console.info("Length: " + data.length);
// 	console.info("***");
// 	console.info("Total time taken: " + this.getInfo("TOTAL_TIME"));

// 	this.close();
// });
// curlTest.on("error", terminate);

// curlTest.perform();
//   // const options = {
//   //   method: 'POST',
//   //   headers: {accept: 'application/json', 'content-type': 'application/json'},
//   //   body: JSON.stringify({person: {contacted: false, source: 'Website', type: 'Website Inquiry', firstName: firstName, lastName: lastName, stage: 'New Lead', 
//   //   emails:[{value: emailUser, isPrimary:true}], phones: [{value: phoneUser, isPrimary:true}]
//   // }})
//   // };
//   // const result = await fetch('https://api.followupboss.com/v1/events', options);
//   // response.json(result);
//   // console.log(response);
// }