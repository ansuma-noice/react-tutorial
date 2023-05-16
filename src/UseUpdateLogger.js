import React, { useEffect } from 'react'

function UseUpdateLogger(value) {
    
    useEffect(()=>{
        console.log(value);
    },[value])


}

export default UseUpdateLogger