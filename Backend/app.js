const express = require('express');
const cors = require('cors');
const app = express();

const aiRoutes = require('./routes/ai.routes');


const allowedOrigins = [
    'https://a-icode-five.vercel.app',
    'https://a-icode-git-main-siddique-shaikhs-projects.vercel.app'
];

const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
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
