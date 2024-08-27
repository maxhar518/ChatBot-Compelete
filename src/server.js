// const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();

// const app = express();
// const PORT = 5000;

// app.use(express.json());

const sendEmail = () => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.EMAIL_USER,
      clientId: '888137339993-5t9ll78kavkrnmjj56t2ce1ndntkmqme.apps.googleusercontent.com' || process.env.OAUTH_CLIENTID,
      clientSecret: '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' || process.env.OAUTH_CLIENT_SECRET,
      refreshToken: "1//04tZUR6qHfPviCgYIARAAGAQSNwF-L9IrBLerqXxifH09qYzru0zsYDSBLnEW--pnOfShGOZF9SXqORPpqPhCnlU114fLoI-Mu4M" || process.env.OAUTH_REFRESH_TOKEN,
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'mazharaliburirom@gmail.com',
    subject: 'Nodemailer Project',
    text: `Your OTP is 123`,
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.error("Error " + err);
      // return res.status(500).json({ message: 'Error sending email' });
    }
    console.log(`Email sent successfully: ${data.response}`);
    // return res.status(200).json({ message: 'Email sent successfully' });
  });
};

sendEmail()
// app.post('/send-email', sendEmail);

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });