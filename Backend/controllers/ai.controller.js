const aiService = require('../services/ai.service');

const getResponse = async  (req, res) =>{
    try {
       
        const code = req.body.code;

        if (!code) {
            return res.status(400).json({ message: "Prompt is required" });
        }

        const result = await aiService(code);
        res.status(200).send(result);
        
    } catch (error) {
        console.error('AI Controller Error:', error);
        res.status(500).json({ 
            message: "An error occurred while processing your request",
            error: error.message 
        });
    }
}

module.exports = {getResponse};