import React from "react";
import { FirstName, LastName } from "./ApptcA";


export default function compC() {
    return (
        
        <FirstName.Consumer>
            {
        (fname)=>
         {
            return(
            <LastName.Consumer>
                {
                    (lname)=>{
                         return (<h1>my name z {fname} {lname}</h1>)
                        }
                }
            </LastName.Consumer>
            )
         }   
            }
            
            </FirstName.Consumer>
        
        
    )
}