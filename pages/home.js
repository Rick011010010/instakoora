import { getProviders, signIn, useSession, signOut } from "next-auth/react";


function profilPage() {
  const { data: session } = useSession();
  console.log(session)
  if (session) {
    return (
      <div>
        <div>Welcome, {session.user.email}</div>
      <button onClick={() => signOut()}>Signe Out</button>

      </div>
      
    )
  
} else {
  return (
    <div>
      <p>You are not signed in.</p>
      <button onClick={() => signIn()}>Sign in</button>

    </div>
    
  )
}
}

export default profilPage