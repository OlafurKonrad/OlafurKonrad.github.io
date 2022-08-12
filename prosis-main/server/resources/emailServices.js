

export const SendEmail = () => {
    const Sib = require('sib-api-v3-sdk')
    
    require('dotenv').config()
    let API_KEY = "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";
    
        const client = Sib.ApiClient.instance
        const apiKey = client.authentications[API_KEY];
        apiKey.apiKey = API_KEY;
    
        //const tranEmailApi = new Sib.TransactionalEmailApi()
        
        const sender = {
            email: 'mrdeerhurst@gmail.com',
        }
        
        const receivers = [
            {
                email: 'okalb@kth.se',
            },
        ]
        
        transEmailApi.sendTransacEmail({
            sender,
            to: receivers,
            subject: 'The title of the email - test for DTE site',
            textContent: 'Test for DTE site in'
        }).then(console.log).catch(console.log);
    }
    
    