import express from "express";
const app = express();
import { PORT } from "./config/env.js";



import userRouter from "./routes/user.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import authRouter from "./routes/auth.routes.js";



app.use('/api/v1/auth',authRouter);
app.use('/api/v1/users',userRouter);
app.use('/api/v1/subscriptions',subscriptionRouter);


app.get('/',(req , res)=>{
    res.send('Welcome to the Subscription Tracer API');
})

app.listen(PORT , ()=>{
  console.log(`Server is running on http://localhost:${PORT}`);
    
})

export default app;