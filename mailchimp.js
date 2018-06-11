//add to Adventure mailchimp list
Request('https://us15.api.mailchimp.com/3.0/lists/152871/members', {
                method: 'POST',
                mode: 'no-cors',
                json: {
                    "email_address": user_email,
                    "status": "pending",
                },
                redirect: 'follow',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic apikey'
                }),
                auth: {
                    'user': 'ustwoadventure',
                    'pass': MAILCHIMP_API_KEY
                }
            });
