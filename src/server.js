const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const session = require('express-session');

const app = express();
const email = 'mazharaliburirom@gmail.com';
let storedOT = null
app.use(cors());
app.use(bodyParser.json());

app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } 
}));

function generateOTP() {
  const otp = crypto.randomBytes(2).toString('hex');
  const otpNumber = parseInt(otp, 16) % 10000;
  const ot =   otpNumber.toString().padStart(4, '0');
  return ot
}

app.post('/Send', async (req, res) => {
  const ot = generateOTP();
  storedOT = ot
  const result = await sendEmail(ot);
  res.json(result);
});


app.post('/abc', (req, res) => {
  const otp = req.body.otp;
  console.log('Received OTP:', otp);
  console.log('Stored OT:', storedOT);
  if (otp === storedOT) {
    res.send({message : 'OTP matched'});
  } else {
    res.send({message : 'OTP does not match.'});
  }  
});

async function sendEmail(ot) {
  try {
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

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Nodemailer Project',
      text: `Your OTP is ${ot}`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`Email sent successfully: ${info.response}`);
    return { message: 'Email sent successfully' };
  } catch (err) {
    console.error("Error " + err);
    return { message: 'Error sending email' };
  }
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));