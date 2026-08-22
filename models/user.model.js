import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name is required'],
        minlength:[3,'Name must be at least 3 characters long'],
        maxlength:[50,'Name cannot exceed 50 characters']
    },
    email:{
        type:String,
        required:[true, 'Email is required'],
        unique:[true , 'Email already exists'],
        trim: true ,
         lowercase: true,
         match:[/\S+@\S+\.\S+/,'Please provide a valid email address']
       
    },  
    password:{
        type:String,
        required:[true ,'Password is required'],
        minlength:[4,'Password must be at least 4 characters long'],
        maxlength:[50,'Password cannot exceed 50 characters']
    }

},{timestamps:true});

const User = mongoose.model('User', userSchema);

export default User;    