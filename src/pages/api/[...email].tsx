import { sendMail } from '../../components/mailer/helper';
export default async function checkUserAPI(request, response) {

  const {
    query: {
      subject,
      fullname,
      emailUser,
      phone,
      type
    },
  } = request;

  const result = await sendMail('soldby@yeseniadiaz.realtor', subject, fullname, emailUser, phone, type);
  response.json(result);
}


