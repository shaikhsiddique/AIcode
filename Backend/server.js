const hhtp = require('http');
const app = require('./app');
require("dotenv").config();
const port = process.env.PORT || 3000

const server = hhtp.createServer(app);


server.listen(port,()=>{
    console.log(`server is running on ${port} `);
})