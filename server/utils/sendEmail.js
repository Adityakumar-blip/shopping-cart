const nodemailer = require('nodemailer');

const sendEmail = async (email, subject, text) => {
    try {
        const transPorter = nodemailer.createTransport({
           host: "http://localhost/5000",
           service: "gmail",
           port: 587,
           secure: true,
           auth: {
               user: "photodrugist04@gmail.com",
               pass: "Aditya@2304"
           }
        })

        await transPorter.sendMail({
            from: "photodrugist04@gmail.com",
            to: email,
            subject: subject,
            text: text
        })

        console.log("email send successfully")

    } catch (err) {
       console.log(err , "send failed")
    }
}

module.exports = sendEmail