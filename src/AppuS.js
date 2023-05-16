import logo from './logo.svg';
import './App.css';

import React,{ useState } from 'react';

// class App extends React.Component{
     
// }

function App() {

  const [c,setc]=useState({count:0,theme:'blue'});
  const count=c.count;
  const theme=c.theme;


  // function d() {
  //   setc(c-1)
  // }
  // function u() {
  //   setc(c+1)
  // }


  function d() {
    setc( prevState=>
      {return {...prevState,count:(prevState.count-1)}}) 
  }
  function u() {
    // setc(prevCount=>prevCount+1)
    setc( prevState=>
      {return {...prevState,count:(prevState.count+1)}}) 
  }

  return (
    <div >
      <button onClick={d}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={u}>+</button>
    </div>
  );
}

export default App;
