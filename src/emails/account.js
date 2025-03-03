const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY) //Use uppercase when specifiying env variables and underscores

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'stephhull510@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendGoodbyeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'stephhull510@gmail.com',
        subject: "Goodbye",
        text: `We're sorry to see you go, ${name}. Let us know if there was anything we could have done to have kept you onboard.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendGoodbyeEmail
}