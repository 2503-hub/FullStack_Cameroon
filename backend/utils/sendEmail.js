import nodemailer from "nodemailer";

const getTransporter = () => {
  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

export const sendConfirmationEmail = async (email) => {
  const transporter = getTransporter();
  await transporter.sendMail({
    from: `"Cameroon Explorer" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Subscription Confirmed!!",
    html: `
      <h2>Welcome!</h2>
      <p>Thank you for subscribing to our newsletter.</p>
      <p>You'll receive updates on Cameroon's culture, history, and touristics sites.</p>
      <br />
      <p>If this wasn't you, you can unsubscribe anytime.</p>
    `,
  });
};
