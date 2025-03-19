const express = require('express');
const router = express.Router();
const aiController = require('../controllers/ai.controller');

router.post("/get-review",async (req,res)=>{
   aiController.getResponse(req,res);
})

module.exports = router;