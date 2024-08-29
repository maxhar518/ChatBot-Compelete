const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const crypto = require('crypto')
const nodemailer = require('nodemailer');
const email = 'mazharaliburirom@gmail.com'
const app = express();

app.use(cors()); 
app.use(bodyParser.json());

function generateOTP() {
  const otp = crypto.randomBytes(2).toString('hex');
  const otpNumber = parseInt(otp, 16) % 10000; 
  const ot =  otpNumber.toString().padStart(4, '0');
  return {ot}
}

app.post('/Send', (req, res) => {
  const sendEmail = () => {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.EMAIL_USER,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN,
      }
    });
    const {ot} = generateOTP()
    console.log(ot);

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Nodemailer Project',
      text: `Your OTP is ${ot}`,
    };

    transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
        console.error("Error " + err);
        return res.status(500).json({ message: 'Error sending email' });
      }
      console.log(`Email sent successfully: ${data.response}`);
      return res.status(200).json({ message: 'Email sent successfully' });
    });
  }
  sendEmail()
  generateOTP()
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));