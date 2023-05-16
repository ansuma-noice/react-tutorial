import React, { createContext } from "react";
import CompA from './compA'

 export const FirstName = createContext()
 // const firstName = React.createContext(),or
 export const LastName = createContext()


export default function App() {
    return (
        <div>
        <FirstName.Provider value={'khan'}>
            <LastName.Provider value={'bouji'}>
                <CompA/>
            </LastName.Provider>
            
            </FirstName.Provider>

        </div>
    )

}