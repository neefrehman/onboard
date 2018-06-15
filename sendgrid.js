
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
sgMail.setSubstitutionWrappers('{{', '}}');

module.exports = function helperSendEmail(user_email, first_name){
  const msg = {
    to: user_email,
    bcc: 'neef@ustwo.com',
    from: 'helloadventure@ustwo.com',
    subject: 'Welcome to Adventure',
    templateId: '126f4377-f2f1-4fb7-8db1-5707b752f7ab',
    substitutions: {
      firstName: first_name,
    },
  };
  return sgMail.send(msg);
}
