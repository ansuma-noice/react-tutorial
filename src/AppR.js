import React, { useEffect, useRef, useState } from "react";


export default function App(){
    const [name,setname]=useState('ansu')
    const ren=useRef(0)
    const inputref=useRef()

    const prvName=useRef('')
    
    useEffect(()=>{
        ren.current=ren.current +1

        prvName.current=name
    },[name])


    function foki(){
        inputref.current.focus()
        inputref.current.value='bvghvy'
    }



    

    return(
        <>
        <input  ref={inputref} value={name} onChange={(e)=> setname(e.target.value)}/> 
        <div> My name is {name},it used to be {prvName.current}</div>
         <div> rendered {ren.current} times</div>
         <button onClick={foki}>fooooooo</button>
        </>
    )
}