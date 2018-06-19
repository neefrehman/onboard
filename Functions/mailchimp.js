
var mailchimpAPI = "https://us15.api.mailchimp.com/3.0/lists/9e2f3ee259/members";

const axios = require("axios");
const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;

module.exports = function helperMailchimpSubscribe(email, name){

axios.post (mailchimpAPI,

  {
    "email_address": email,
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
  console.log("mailchimp: then: " + JSON.stringify(response.data));
}).catch((error) => {
    console.log("mailchimp: catch: " + error)
});

}
