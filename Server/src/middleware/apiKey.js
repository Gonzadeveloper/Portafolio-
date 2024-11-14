function checkApiKey (req, res, next){
    const apiKey = req.headers['apikey'];

    if(apiKey && apiKey === process.env.API_KEY){
        next();
    } else {
        res.status(401).send({message: 'Unauthorized access: Invalid API Key'});
    }
}

module.exports = checkApiKey;
