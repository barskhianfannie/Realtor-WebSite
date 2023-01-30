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
  const result = await sendMail('barskhianfannie@gmail.com', firstName, lastName, emailUser, phone, type);
  response.json(result);

  response.json(result);
}


