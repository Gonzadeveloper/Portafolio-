const { Router } = require("express")
const router = Router();

const { sendMail } = require('../controllers/mailController')

router.post('/send-email', sendMail)

router.get('/', (req, res) => {
    res.send('Hello World!');
});

  
module.exports = router