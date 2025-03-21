const express = require('express');
const cors = require('cors');
const app = express();

const aiRoutes = require('./routes/ai.routes');


const corsOptions = {
    origin: ['https://a-icode-five.vercel.app/'], 
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    optionsSuccessStatus: 200
};


app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/ai',aiRoutes);

module.exports =app
