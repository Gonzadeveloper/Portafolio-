const transporter = require('../config/transporter');

const sendMail = async (req, res) => {
    const { email, subject, message } = req.body;

    try {
        // Configura el email
        let mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
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
};

module.exports = { sendMail };