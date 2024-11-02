const { Router } = require("express")
const router = Router();

const { sendMail } = require('../controllers/mailController')
const { hugginFace } = require('../controllers/hugginFaceController')

router.post('/send-email', sendMail)

router.post('/api/chat', hugginFace)

router.get('/', (req, res) => {
    res.send('Hello World!');
});

  
module.exports = router