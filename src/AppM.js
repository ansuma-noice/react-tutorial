import React, { useEffect, useMemo, useState } from "react";

export default function App(){
    const [number,setNumber] =useState(0)
    const [dark,setdark] =useState(false)

    const doubleNumber= useMemo(()=> {return slowFunction(number)},[number]) 

    const themeStyles=useMemo(()=>{
        return ({backgroundColor: dark? 'black':'white',
                color: dark? 'white':'black'
               })
    },[dark])

    useEffect(()=>{
        console.log('them changed');

    },[themeStyles])

    return(
        <>
        <input type="number" value={number} onChange={ e=>setNumber(parseInt(e.target.value))}/>
        <br/>
        <button onClick={()=>setdark(prevDark=> !prevDark)}>changey</button>
        <div style={themeStyles}>{doubleNumber}</div>
        </>
    )


    
}

function slowFunction(num) {
    console.log('calling slow function');

    for (let index = 0; index <=1000000000; index++) {}
        return num*2
    
}