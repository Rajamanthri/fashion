// var nodemailer = require('nodemailer');

// module.exports = async(email,subject,text) => {
//   try {
//     const transporter = nodemailer.createTransport({
//       host:process.env.HOST,
//       service:process.env.SERVICE,
//       post:Number(process.env.EMAIL_PORT),
//       secure:Boolean(process.env.SECURE),
//       aluth:{
//         user:process.env.USER,
//         pass:process.env.PASS
//       }
//     });
//     await transporter.sendMail({
//       from:processenv.USER,
//       to:email,
//       subject:subject,
//       text:text
//     });
//     console.log("Email sent Successfully!");
//   }catch(error){
//     console.log("Email not sent.");
//     console.log(error);
//   }
// }






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