// pages/api/submit-rsvp.js

export default function handler(req, res) {
  if (req.method === 'POST') {
    // Process POST request
    const { rsvp, email, phone, comments, attendees } = req.body;

    // Here you would implement your logic to store this data
    // For demonstration purposes, we'll just send a response back to the client
    // Normally, you might save this data to a database or send it to an email service

    console.log('RSVP Data:', req.body); // You might want to remove or secure logging for production

    // Respond with a JSON object
    res.status(200).json({ message: 'RSVP received', data: req.body });
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
