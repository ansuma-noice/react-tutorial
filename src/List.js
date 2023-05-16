import React, { useEffect, useState } from "react";

export default function List({geItems}){
    const [items,setItems]=useState([])

    useEffect(()=>{
        setItems(geItems(8))
        console.log('items updated');

    },[geItems])

    return items.map(i=> <div key={i}>{i}</div>)
}