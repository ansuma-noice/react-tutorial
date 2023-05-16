import React, { useState } from 'react'
import useLocalStorage from './localStorage'
import UseUpdateLogger from './UseUpdateLogger'

export default function App() {

    const [name,setname] =useLocalStorage('key','')
    UseUpdateLogger(name)

  return (
    <div>
        <input type='text' value={name} onChange={(e)=> setname(e.target.value)}/>

    </div>
  )
}

