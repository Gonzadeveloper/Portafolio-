require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = process.env.PORT;

// Middlewares
app.use(bodyParser.json());
app.use(cors());



// Ruta para manejar la solicitud POST del formulario
app.post('/send-email', async (req, res) => {
  const { email, subject, message } = req.body;
  
  try {
    // Configura el transporter de Nodemailer
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user:  process.env.EMAIL_USER, // Reemplaza con tu email
        pass: process.env.EMAIL_PASS       // Reemplaza con tu contraseña
      }
    });
    
    // Configura el email
    let mailOptions = {
      from:  process.env.EMAIL_USER, // Reemplaza con tu email
          to:  process.env.EMAIL_USER, // Reemplaza con tu email
          subject: `Consulta de ${email}: ${subject}`,
          text: `Has recibido un nuevo mensaje de ${email}:\n\n${message}`
        };
      
        // Envía el email
        let info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);
        
        res.status(200).send('Email enviado con éxito');
      } catch (error) {
      console.error('Error al enviar el email: ', error);
      res.status(500).send('Error al enviar el email');
  }
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});