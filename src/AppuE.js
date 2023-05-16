import React,{useState,useEffect} from 'react';

function App() {
    const [resourseType,setResourseType]=useState('posts')
    const [items,setItems]=useState([])

    useEffect(()=>{ //side effect , use useState 
        fetch(`https://jsonplaceholder.typicode.com/${resourseType}`)
      .then(response => response.json())
      .then(json => setItems(json))

      console.log('subscribe');// d code,like adding eventListner
        
      return ()=> console.log('unsubscribe') //clean up code,removing eventListener

    },[resourseType])
    

    return(
        <div>
            <button onClick={()=>setResourseType('posts')}>Posts</button>
            <button onClick={()=>setResourseType('users')}>users</button>
            <button onClick={()=>setResourseType('comments')}>comments</button> 
            
            <h1>{resourseType}</h1>

            {items.map(i=>{
                return <pre>{JSON.stringify(i)}</pre>
            })}
        </div>
    )


}

export default App;