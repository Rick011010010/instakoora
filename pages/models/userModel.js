import mongoose from 'mongoose'
import { getProviders, signIn, useSession, signOut, getSession } from "next-auth/react";
const { data: session, status } = useSession();

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


})

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

   

})


const userSchema = new mongoose.Schema({

    name:{
        type:String,
        default:'guest'
    },
    email: {
        type:String,
        default:session?.user?.email,
    },
    
    image: {
        type: String,
        
    },
    player:playerSchema,
    team:teamSchema,
   


},{ timestamps:true})

let Dataset = mongoose.models.users || mongoose.model('users', userSchema)
export default Dataset;