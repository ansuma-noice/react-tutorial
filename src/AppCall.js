import React, { useCallback, useState } from "react";
import List from "./List";

export default function App(){
        const [number,setNumber]=useState(1)
        const [dark,setdark]=useState(false)
 
        const getIems=useCallback((i)=>{
            return [number+i,number+1+i,number+2+i]
        },[number])

        const theme={
            backgroundColor: dark? 'black':'white',
                color: dark? 'white':'black'
        }


    return(
        <>
         <div style={theme}>
            <input type="number" value={number} onChange={e=>setNumber(parseInt(e.target.value))}/>
            <button onClick={()=>setdark((prevDark)=>!prevDark)}>tuggol</button>

            <List geItems={getIems} />
         </div>
        </>
    )
}