
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
sgMail.setSubstitutionWrappers('{{', '}}');
const msg = {
  to: 'neef@ustwo.com',
  from: 'helloadventure@ustwo.com',
  subject: 'Welcome to Adventure',
  templateId: '126f4377-f2f1-4fb7-8db1-5707b752f7ab',
  substitutions: {
    firstName: 'Neef',
  },
};
sgMail.send(msg);



// function helperSendEmail(user_email, first_name){}
// )
//
// function handler(user_email, first_name){
//   init().then(helperSendEmail).then(sendEmail(user_email, first_name))
// }
// module.exports = handler;
