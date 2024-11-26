import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;
    console.log('name:', name);
    console.log('email:', email);
    console.log('message:', message);
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Tutti i campi sono obbligatori.' });
    }

    try {
    
        console.log('EMAIL_USER:', process.env.EMAIL_USER);
        console.log('EMAIL_PASS:', process.env.EMAIL_PASS);
      // Configura il transporter per Nodemailer
      const transporter = nodemailer.createTransport({
        host: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
      });

      // Configura l'email
      await transporter.sendMail({
        from: `"${name}" <${email}>`, // Email del mittente (dal form)
        to: "la_tua_email@gmail.com", // La tua email (destinatario)
        subject: "Nuovo messaggio dal sito web", // Oggetto dell'email
        text: message, // Testo del messaggio
      });

      // Risposta di successo
      res.status(200).json({ success: 'Email inviata con successo!' });
    } catch (error) {
      console.error('Errore durante l’invio dell’email:', error);
      res.status(500).json({ error: 'Errore durante l’invio dell’email.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Metodo ${req.method} non consentito.`);
  }
}
