const nodemailer = require('nodemailer');
const emailActivationOk = require('../components/emails/activateAccountOkEmail');
const environment = require('../config/environment');
module.exports = {
    sendActivateAccountEmail: (email) => {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: environment.EMAIL_USER,
                pass: environment.EMAIL_PASSWORD
            }
        });
        // setup email data with unicode symbols
        let mailOptions = {
            from: 'Hipotecario Facil <' + environment.EMAIL_USER + '>', // sender address
            to: 	 email, // list of receivers
            subject: 'Confirmación activación cuenta Hipotecario Fácil', // Subject line
            text: '', // plain text body
            html: emailActivationOk.get(email), // html body
            attachments: [
              {
                filename: 'footer.png',
                path: __dirname + '/../components/emails/images/footer.png',
                cid: 'footer_activacion_email' //same cid value as in the html img src
              },
              {
                  filename: 'logo.png',
                  path: __dirname + '/../components/emails/images/logo.png',
                  cid: 'logo_activacion_email' //same cid value as in the html img src
              }
          ]
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message %s sent: %s', info.messageId, info.response);
        });
    }
};
