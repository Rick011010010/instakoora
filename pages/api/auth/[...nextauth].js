
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "./lib/mongodb";
import FacebookProvider from "next-auth/providers/facebook";
// import CredentialsProvider from "next-auth/providers/credentials"
import connectDB from "./lib/connectDB";
// import  Users from '../../models/useModel'
import { signIn } from "next-auth/react";
import bcrypt from 'bcrypt'


export default NextAuth({
  // Configure one or more authentication providers
  providers: [


    // CredentialsProvider({
    //   // The name to display on the sign in form (e.g. 'Sign in with...')
    //   name: 'Credentials',
      
    //   credentials: {
    //     username: { label: "Username", type: "text", placeholder: "jsmith" },
    //     password: {  label: "Password", type: "password" }
    //   },
    //   async authorize(credentials, req) {

    //    const email = credentials.email;
    //    const password = credentials.password;
    //    const user = await Users.findOne({email})
    //    if(!user) {
    //     throw new Error("You haven't registered yet")
    //    }
    //    if(user){
    //     return signInUser({password,email})
    //    }
        
    //   }
    // }),


    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    }),
  ],
  secret: process.env.JWT_SECRET,
  adapter: MongoDBAdapter(clientPromise),
  
 
  pages: {
    
    signOut : "/",
  },
  secret:"secret",
  database:process.env.MONGODB_URI,
  
});

// const signInUser = async ({password, user})=>{
//   if(!user.password) {
//     throw new Error ("Please enter password")
//   }
//   const isMatch = await bcrypt.compare(password,user.password);
//   if (!isMatch) {
//     throw new Error("password or username not correct")
//   }
//   return user

// }
