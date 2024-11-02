const axios = require('axios');

const hugginFace = async (req, res) => {
    const { question } = req.body;
  
    try {
      const response = await axios.post(
        'https://api-inference.huggingface.co/models/gpt2',
        { inputs: question },
        {
          headers: {
            Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
          },
        }
      );
      res.json({ answer: response.data[0].generated_text });
    } catch (error) {
      console.error('Error en la solicitud a Hugging Face:', error);
      res.status(500).json({ error: 'Error en la solicitud al modelo' });
    }
}

module.exports = { hugginFace }
