import mongoose from 'mongoose';

const loginsc = new mongoose.Schema({
    username:{
        type:'string',
        required: true,
        trim: true
    },
email:{
type:'string',
required: true,
trim: true,
match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
},

password:{
    type: String,
    match: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
    trim: true,

}         
})

const Login23 = mongoose.model('Login23',loginsc) 
export default Login23;