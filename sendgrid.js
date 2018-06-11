
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
sgMail.setSubstitutionWrappers('-', '-'); // Configure the substitution tag wrappers globally
const msg = {
  to: 'neef@ustwo.com',
  from: 'adventure@ustwo.com',
  subject: 'Welcome to Adventure',
  templateId: '1126f4377-f2f1-4fb7-8db1-5707b752f7ab',
  substitutions: {
    fistName: 'neef',
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
