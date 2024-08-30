const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const crypto = require('crypto');
const nodemailer = require('nodemailer');

const app = express();
const email = 'mazharaliburirom@gmail.com';

app.use(cors());
app.use(bodyParser.json());

// Generate OTP function
function generateOTP() {
  const otp = crypto.randomBytes(2).toString('hex');
  const otpNumber = parseInt(otp, 16) % 10000;
  return otpNumber.toString().padStart(4, '0');
}

// Send email function
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

app.post('/abc', (req, res) => {
  const one = req.body.ot;
  if (one) {
    res.json({ message: 'haha' });
  } else {
    res.json({ message: 'ohoo' });
  }
});

app.post('/Send', async (req, res) => {
  const ot = generateOTP();
  console.log(ot);

  const result = await sendEmail(ot);
  res.json(result);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));