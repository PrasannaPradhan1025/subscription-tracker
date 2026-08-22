
import mongoose from "mongoose";


const subscriptionSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name is required'],
        minlength:[3,'Name must be at least 3 characters long'],
        maxlength:[40,'Name cannot exceed 40 characters'],


    },
    price:{
        type:Number,
        required:[true,'Price is required'],
        min:[0,'Price cannot be negative'],
    },
    currency:{
        type:String,
        required:[true,'Currency is required'],
        enum:['USD','EUR','GBP','NRP'],
        default:'USD'
    },
    frequency:{
        type:String,
        required:[true,'Frequency is required'],   
        enum:['daily','weekly','monthly','yearly']
    },
    category:{
        type:String,
        required:[true,'Category is required'],
        enum:['entertainment','education','productivity','health','other'],
    },
    paymentMethod:{
        type:String,
        required:[true,'Payment method is required'],
        trim:true
    },
    status:{
        type:String,
        required:[true,'Status is required'],
        enum:['active','expired','cancelled'],
        default:'active'
    },
    startDate:{
        type:Date,
        required:[true ,'Start date is required'],
        validate:{
            validate: function(val){
                return val <= new Date();
            },
            message: 'Start date cannot be in the future'
        }

    },
    renewalDate:{
        type:Date,
        required:[true ,'Renewal date is required'],
        validate:{
            validate: function(val){
                return val > this.startDate;
            },
            message: 'Renewal date must be after the start date'
        }
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:[true,'User is required'],
        index:true
    }


},{timestamps:true});

subscriptionSchema.pre('save', function(next){
   if(!this.renewalDate){
    const renewalFreq={
        daily:1,
        weekly:7,
        monthly:30,
        yearly:365
    }

    this.renewalDate = new Date(this.startDate);
    this.renewalDate.setDate(this.renewalDate.getDate() + renewalFreq[this.frequency]);
   }

   if(this.renewalDate < new Date()){
    this.status = 'expired';
   }
   next();
});

const subscription = mongoose.model('Subscription', subscriptionSchema);

export default subscription;