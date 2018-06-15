//
// Request('https://us15.api.mailchimp.com/3.0/lists/152871/members', {
//                 method: 'POST',
//                 mode: 'no-cors',
//                 json: {
//                     "email_address": user_email,
//                     "status": "pending",
//                 },
//                 redirect: 'follow',
//                 headers: new Headers({
//                     'Content-Type': 'application/json',
//                     'Authorization': 'Basic apikey'
//                 }),
//                 auth: {
//                     'user': 'ustwoadventure',
//                     'pass': MAILCHIMP_API_KEY
//                 }
//             });



var mailchimpAPI = "https://us15.api.mailchimp.com/3.0/lists/9e2f3ee259/members";

const axios = require("axios");
const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;

module.exports = function helperMailchimpSubscribe(user_email, first_name){

axios.post (mailchimpAPI,

  {
    "email_address": user_email,
    "status": "pending",
  },

  {
    headers: {
      'Authorization': 'Basic apikey'
    },

    auth: {
        'username': 'ustwoadventure',
        'password': MAILCHIMP_API_KEY
    }
  }

).then(function (response) {
  console.log("then" + JSON.stringify(response.data));
}).catch((error) => {
    console.log("catch" + error)
});

}
