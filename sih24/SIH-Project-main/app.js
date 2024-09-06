
import express from 'express';
import mongoose from 'mongoose';
import Login23 from './schema.js'
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use(express.json());
const PORT = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
});

app.get('/create-account',(req,res)=>{
    res.sendFile(path.join(__dirname,'create-account.html'))
}); 

app.get('/login90',(req,res)=>{
    res.sendFile(path.join(__dirname,'login.html'))
})
async function database(){
    try{
        await mongoose.connect('mongodb://localhost:27017/psih',{})
    }catch(error){
        console.log("Mongodb connected Successfully",error)
    }
}
database();

app.post('/login1', async (req, res) => {
    try {
        const FormData = req.body;
        const result = await Login23.create(FormData);
        res.status(201).json(result);
    } catch (error) {
        console.error('Error submitting form:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(PORT,()=>{
    console.log(`Server is Running on Port ${PORT}`)
})