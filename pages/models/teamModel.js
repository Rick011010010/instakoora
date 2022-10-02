import mongoose from 'mongoose'

const teamSchema = new mongoose.Schema({

    name:{
        type: String,
        default: 'team'
    },
    email: {
        type: String
    },
    schedule: {
         date:Date,
         time:Number,

    },
    createdAt:{
        immutable:true,
        type: Date,
        default: ()=> Date.now(),

    },
    numberPlayers: {
        type: Number,
        
    },
    AgeGroup:{
        type : String,
    },
    teamMembers:{
        names:{
            type:[String],
            
        },
        email: {
            type:String
        },
    }

   





},{ timestamps:true})

let Dataset = mongoose.model('team', teamSchema)
export default Dataset;