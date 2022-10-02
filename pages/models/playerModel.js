import mongoose from 'mongoose'


const playerSchema = new mongoose.Schema({

    name:{
        type:String,
        default:'player'
    },
    PhoneNumber: {
        type:String
    },
    
    age:{
        type:Number,
        min:3,
        max:100,
    }
   





},{ timestamps:true})

let Dataset = mongoose.models.users || mongoose.model('uplayer', playerSchema)
export default Dataset;