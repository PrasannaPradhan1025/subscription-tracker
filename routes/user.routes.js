import { Router } from "express";

const userRouter = Router();

userRouter.get('/', (req , res)=>{
    res.send({title: 'Get all the users'})
})

userRouter.get('/:id', (req , res)=>{
    res.send({title: 'Get user details'})
})

userRouter.post('/', (req , res)=>{
    res.send({title: 'Create new user'})
})

userRouter.put('/:id', (req , res)=>{
    res.send({title: 'Update the user'})
})

userRouter.delete('/:id', (req , res)=>{
    res.send({title: 'DELETE the user'})
})
export default userRouter;
