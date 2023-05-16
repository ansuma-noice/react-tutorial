import React,{useContext} from "react";
import CompC from './compC'
import { FirstName,LastName } from "./ApptcA";

export default function CompB() {
    // return <CompC/>
    const fname=useContext(FirstName)
    const lname=useContext(LastName)

    return(
        <h1>my name is {fname} {lname}</h1>
    )
}