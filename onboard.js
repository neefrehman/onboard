
const sendgrid = require('./functions/sendgrid');
const slack = require('./functions/slack');
const robin = require('./functions/robin');
const mailchimp = require('./functions/mailchimp.js');

var email = process.argv[2];
var name = process.argv[3];

const proms = [sendgrid(email, name), slack(email, name), robin(email, name), mailchimp(email, name)];
return Promise.all(proms)
.then(() => console.log(`Onboard: ${name} added to services. Don't forget to add to google groups`));


// $('#submit').click(function(){
//
//   var user_email = $('#EMAIL').val()
//   var first_name = $('#NAME').val()
//
//   main(user_email, first_name)
//   .then(() => console.log('success'))
//
// })
//
//
// $("#form").submit(function(){
//
//     window.open('https://groups.google.com/a/ustwo.com/forum/#!managemembers/floor.adv/add', '_blank');
//
// });
