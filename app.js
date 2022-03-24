const express = require('express');
const connectDB = require('./config/db');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const http = require('http');
const app = express();
const port= process.env.PORT || 8082;
const server = http.createServer(app);

connectDB();
app.get('/', (req,res)=> res.send('Ref Server'));



server.listen(port,()=>console.log(`Ref server ${port}`));
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:["http://localhost:3000", "https://alxzndrcodes-generator.netlify.app"],
    credentials:true,
}));
app.use("/auth", require("./routes/userRouter"));
