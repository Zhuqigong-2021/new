"use client"

import React from 'react'
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

const HomePage = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
 <Authenticator>
    {({ signOut, user }) => (
      <main>
        {/*...*/}
        <button onClick={signOut}>Sign out</button>
      </main>
    )}
  </Authenticator>
    </div>
   
  )
}

export default HomePage
