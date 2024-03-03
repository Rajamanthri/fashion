var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'nadeesha01ngc@gmail.com',
    pass: 'zdht aawb yner dylk'
  }
});

var mailOptions = {
  from: 'nadeesha01ngc@gmail.com',
  to: 'npjn6436@gmail.com',
  subject: 'Sending Varification Email By Wow Fashion',
  text: 'You Signed Up for Wow Fashion Succussfully!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});