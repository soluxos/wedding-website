// // pages/api/submit-rsvp.js
import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.SENDGRID_API_KEY); // Set your SendGrid API Key in environment variables

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Process POST request
    const { rsvp, email, phone, comments, attendees } = req.body;

    // Define your SendGrid Email Data
    const msg = {
      to: 'callumharrod1994@gmail.com', // Email address where you want to receive the emails. Change this.
      from: 'callumharrod1994@hotmail.co.uk', // Verify your sending email within SendGrid and update this.
      subject: 'New RSVP Submission',
      text: `
        You have a new RSVP request.
        RSVP: ${rsvp}
        Email: ${email}
        Phone: ${phone}
        Comments: ${comments}
        Attendees:
        ${attendees.map((att) => `${att.name} - Food Option: ${att.foodOption}`).join('\n')}
      `,
    };
    try {
      await sgMail.send(msg);
      // Email sent and RSVP data processed
      res.status(200).json({ message: 'RSVP received and email sent', data: req.body });
    } catch (error) {
      console.error('SendGrid email error:', error); // You might want to remove or secure logging for production

      if (error.response) {
        // You can extract more info from the response, it provides insights into the failure
        console.error(error.response.body);
      }

      // Respond to client that there was an error in sending the email
      res.status(500).json({ message: 'Error sending RSVP confirmation email', error: error });
    }
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
