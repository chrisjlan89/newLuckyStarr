var nodemailer = require("nodemailer");
const fs = require("fs");

// const transporter = nodemailer.createTransport({
//   host: "smtp.office365.com",
//   // Office 365 server

//   port: 587,
//   // secure SMTP
//   secure: false,

//   auth: {
//     user: "youruserhere",
//     pass: "yourpasshere"
//   },

//   tls: {
//     ciphers: "SSLv3"
//   },

//   requireTLS: true
// });

// transporter.verify(function(error, success) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Server is ready to take our messages");
//   }
// });

module.exports = {
  sendEmail: (req, res) => {
    const { sendTo, title, message, html, attachment } = req.body;

    const msg = {
      to: sendTo,
      from: "mtscancels@momentumsolar.com",
      subject: title,
      text: message ? message : "",
      html,
      ...(attachment && { attachments: [{ path: attachment }] })
    };

    console.log(req.body);

    transporter.sendMail(msg, (err, info) => {
      if (err) {
        console.log(err);
      } else {
        res.send(info.response);
      }
    });
  },

  sillyGoose: (req, res) => {
    console.log("hit");
    res.send("You found me you thilly (Silly, but read as Mike Tyson) Goose");
  }
};
