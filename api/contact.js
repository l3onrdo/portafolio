import { Resend } from 'resend';

export default async function handler(req, res) {
  // Controlla che sia una richiesta POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Metodo non consentito' });
  }

  console.log('api', process.env.RESEND_API_KEY);
  // Inizializza Resend 
  const resend = new Resend(process.env.RESEND_API_KEY);
  

  // Estrai i dati dal corpo della richiesta
  const { name, email, message } = req.body;

  // Validazione base
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Tutti i campi sono obbligatori' });
  }

  try {
    // Invia l'email
    const { data, error } = await resend.emails.send({
      from: 'mirallileonardo@gmail.com',
      to: 'leomiralli@gmail.com',
      subject: `Nuovo messaggio da ${name}`,
      html: `
        <h2>Nuovo messaggio dal portfolio</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Messaggio:</strong></p>
        <p>${message}</p>
      `
    });

    // Gestisci la risposta
    if (error) {
      return res.status(500).json({ error: 'Impossibile inviare l\'email' });
    }

    return res.status(200).json({ success: 'Messaggio inviato con successo!' });

  } catch (error) {
    console.error('Errore nell\'invio dell\'email:', error);
    return res.status(500).json({ error: 'Errore interno del server' });
  }
}
