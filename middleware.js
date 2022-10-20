import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

import { withAuth } from "next-auth/middleware"

// More on how NextAuth.js middleware works: https://next-auth.js.org/configuration/nextjs#middleware
export default withAuth({
  callbacks: {
    authorized({ req, token }) {
      // // `/admin` requires admin role
      // if (req.nextUrl.pathname === "/admin") {
      //   return token?.userRole === "admin"
      // }
      // `/me` only requires the user to be logged in
      return !!token
    },
  },
})

export const config = { matcher: ["/home"] }



// export async function middleware(req) {
//   const { pathname, origin } = req.nextUrl;

//   if (pathname === '/home') {
//     const session = await getToken({
//       req,

//       secret: process.env.JWT_SECRET,
//       secureCookie: process.env.NODE_ENV === 'production',
//     });
//     if (!session) return NextResponse.redirect(`${origin}/`);
//   }

//   if (pathname === '/') {
//     const session = await getToken({
//       req,
//       secret: process.env.JWT_SECRET,
//       secureCookie: process.env.NODE_ENV === 'production',
//     });
//     // if(pathname==='/' && session){
//     //   return NextResponse.redirect(`${origin}/frontpage`)
//     // }
 
 
//     if (session) return NextResponse.redirect(`${origin}/home`);
//   }

// }