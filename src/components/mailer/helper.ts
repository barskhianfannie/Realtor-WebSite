import * as AWS from 'aws-sdk';
import * as nodemailer from 'nodemailer';
AWS.config.update({
  accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY,
  secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
  region: 'us-west-2',
});
AWS.config.getCredentials(function (error) {
  if (error) {
    console.log(error.stack);
  }
});
const ses = new AWS.SES({ apiVersion: '2010-12-01' });

// change this to the "to" email that you want
const adminMail = 'elevatedbizconsulting@gmail.com';
// Create a transporter of nodemailer
const transporter = nodemailer.createTransport({
  SES: ses,
});
export const sendMail = async (
  userEmail,
  firstName,
  lastName,
  emailUser,
  phoneUser,
  type,
) => {
  try {
    const response = await transporter.sendMail({
      from: adminMail,
      to: userEmail,
      subject: `New Contact Request`,
      html: `
            <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">
            <html>
            <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            </head>
            <body>
            <div style="padding:20px;">
            <div style="max-width: 500px;">
            <h2>Contact Request for Yesenia Diaz</h2>
            <p>
            First Name: ${firstName}<br/><br/>
            Last Name: ${lastName}<br/><br/>
            Email: ${emailUser}<br></br>
            Phone: ${phoneUser}<br><br/>
            Type: ${type}<br></br>
            </p>
            </div>
            </div>
            </body>
            </html>
            `,
    });
    return response?.messageId
      ? { ok: true }
      : { ok: false, msg: 'Failed to send email' };
  } catch (error) {
    console.log('ERROR', error.message);
    return { ok: false, msg: 'Failed to send email' };
  }
};
