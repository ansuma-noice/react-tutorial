import React from 'react'
import ReactDOM from 'react-dom'

const theme={
    position:'fixed',
    top:'50%',
    left:'50%',
    transform:'translate(-50%,-50%)',
    backgroundColor:'#FFF',
    padding:'50px',
    zIndex:1000
}
const overlay={
    position:'fixed',
    top:0,
    left:0,
    right:0,
    bottom:0,
    backgroundColor:'rgba(0,0,0,.7)',
    zIndex:1000
}

function modal({open,children,onClose}) {

    if(!open) return null

  return ReactDOM.createPortal(
    <>
    <div style={overlay}/>
    <div style={theme}  onClick={()=>console.log('click raa')}>
        <button onClick={onClose}>Close Modal</button> 
        {children}
    </div>
    </>,
    document.getElementById('portal') 
  )
}

export default modal