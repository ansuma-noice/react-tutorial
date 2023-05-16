import React ,{useState} from 'react';
import FunctionContextComponent from  './functionContextComponent'
// import ClassContextComponent from  './classContextComponent' 

export const ThemeContext = React.createContext()

export default function App(){
    const [darkTheme,setdarkTheme] =useState(true)

    function toggleTheme(){
        setdarkTheme(prevdarkTheme => !prevdarkTheme)
    }

    return(
        <div>

            <ThemeContext.provider value={darkTheme}>
                <button onClick={toggleTheme}>toggle</button>
                {/* <ClassContextComponent/> */}
                <FunctionContextComponent/>

            </ThemeContext.provider>
        </div>
    )



}

