import {Router } from 'express';
// import {signUp,signOut, signIn} from '../controllers/auth.controller.js'
const authRouter = Router();

authRouter.post('/sign-up',(req,res)=>{
    res.send("singup")
} );


authRouter.post('/sign-in', (req,res)=>{
    res.send("singin")
});

authRouter.post('/sign-out',(req,res)=>{
    res.send("singout")
});

export default authRouter;