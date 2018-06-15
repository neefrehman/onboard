
//helpers.

// slackNotify(service, user_email){
//     slackApi.sendMessage('justin&neef', `failed adding ${user_email} to ${service}}`)
// }

//main.js
const sendgrid = require('./sendgrid');
const slack = require('./slack');
const robin = require('./robin');
const mailchimp = require('./mailchimp.js');

function main(user_email, first_name){
  const proms = [sendgrid(user_email, first_name), slack(user_email, first_name), robin(user_email, first_name), mailchimp(user_email, first_name)];
  return Promise.all(proms)
  .then(() => console.log(`${user_email} added to all our services`));
}


main('neef@ustwo.com', 'Neef')
.then(() => console.log('success'))
