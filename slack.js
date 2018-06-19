
var slackAPI = "https://slack.com/api/users.admin.invite";

const axios = require("axios");
const qs = require('qs');
const SLACK_API_KEY = process.env.SLACK_API_KEY;

module.exports = function helperSlackInvite(email, name){

  const params = {

      "email":email,
      "channels":"CB29PDLF6,C4E67290V,C4E4QFSUU,C2L55QX5F,CB2D8P1B5,C2L3CAF35"

  };

  const formattedQuery = qs.stringify(params);

  axios.post (slackAPI, formattedQuery,
    {
      headers: {
        'content-type': "application/x-www-form-urlencoded",
        'Authorization': "Bearer " + SLACK_API_KEY
      }
    }

  ).then(function (response) {
    console.log("then" + JSON.stringify(response.data));
  }).catch((error) => {
      console.log("catch" + error)
  });

}
