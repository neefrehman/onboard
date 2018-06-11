
//helpers.

slackNotify(service, user_email){
    slackApi.sendMessage('justin&neef', `failed adding ${user_email} to ${service}}`)
}

//main.js
const sendgrid = /sendgrid.js
const service2 = //path to function for adding user to service 2

function main(user_email, first_name){
  Promise.each(
    [
      sendgrid(user_email, first_name).catch(slackNotify('sendgrid', user_email))
    ]
  )
  .then(() => console.log(`${user_email} added to all our services`));
}
