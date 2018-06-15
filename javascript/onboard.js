
const sendgrid = require('./sendgrid');
const slack = require('./slack');
const robin = require('./robin');
const mailchimp = require('./mailchimp.js');

function main(user_email, first_name){
  const proms = [sendgrid(user_email, first_name), slack(user_email, first_name), robin(user_email, first_name), mailchimp(user_email, first_name)];
  return Promise.all(proms)
  .then(() => console.log(`${user_email} added to all our services`));
}

main('adlowe23@gmail.com', 'Adam')
.then(() => console.log('success'))


// // GET INPUT FROM #EMAIL and #NAME
//
// const sendgrid = require('./sendgrid');
// const slack = require('./slack');
// const robin = require('./robin');
// const mailchimp = require('./mailchimp.js');
//
// function main(user_email, first_name){
//   const proms = [sendgrid(user_email, first_name), slack(user_email, first_name), robin(user_email, first_name), mailchimp(user_email, first_name)];
//   return Promise.all(proms)
//   .then(() => console.log(`${user_email} added to all our services`));
// }
//
// $('#submit').click(function(){
//   var user_email = $('#EMAIL').val()
//   var first_name = $('#NAME').val()
//
//   main(user_email, first_name)
//   .then(() => console.log('success'))
//
// })
