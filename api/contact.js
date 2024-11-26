import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  // Controlla che sia una richiesta POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Metodo non consentito' });
  }

  // Estrai i dati dal corpo della richiesta
  const { name, email, message } = req.body;

  // Validazione base
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Tutti i campi sono obbligatori' });
  }

  try {
    // Configura il messaggio da inviare
    const msg = {
      to: 'leomiralli@gmail.com', // Inserisci il tuo indirizzo email
      from: 'mirallileonardo@gmail.com', // Usa un indirizzo verificato su SendGrid
      subject: `Nuovo messaggio da ${name}`,
      html: `
        <h2>Nuovo messaggio dal portfolio</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Messaggio:</strong></p>
        <p>${message}</p>
      `,
    };

    // Invia l'email tramite SendGrid
    await sendgrid.send(msg);

    return res.status(200).json({ success: 'Messaggio inviato con successo!' });
  } catch (error) {
    console.error('Errore nell\'invio dell\'email:', error);
    return res.status(500).json({ error: 'Errore interno del server' });
  }
}

