
var robinAPI = "https://api.robinpowered.com/v1.0/organizations/ustwo/users";

const axios = require("axios");
const ROBIN_API_KEY = process.env.ROBIN_API_KEY;

module.exports = function helperRobinInvite(user_email, first_name){

  axios.post (robinAPI,
    {
      "email":user_email
    },

    {      
      headers: {
        'Authorization': "Access-Token " + ROBIN_API_KEY
      }
    }

  ).then(function (response) {
    console.log("then" + JSON.stringify(response.data));
  }).catch((error) => {
      console.log("catch" + error)
  });

}
