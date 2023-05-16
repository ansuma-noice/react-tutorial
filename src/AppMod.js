import React, { useState } from 'react'
import Modal from './modal'

function AppMod() {
    const [isOpen,setIsOpen]=useState(false)

  return (
    <div>
        <button onClick={()=> setIsOpen(true)}>Open Modal</button>

        <Modal open={isOpen} onClose={()=>setIsOpen(false)}>Fancy Modal</Modal>
    </div>
  )
}

export default AppMod