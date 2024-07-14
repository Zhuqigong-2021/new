import HomePage from "@/components/Home";



export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
<HomePage />
    </div>
    
    // <Authenticator>
    //   {({ signOut, user }) => (
    //     <main>
    //       {/*...*/}
    //       <button onClick={signOut}>Sign out</button>
    //     </main>
    //   )}
    // </Authenticator>
  )
}
