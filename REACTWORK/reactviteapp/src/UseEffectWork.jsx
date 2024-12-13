import React, { useEffect, useState } from 'react'

function Useeffectwork() {
    const[count,setCount]=useState(10);
    const[pointer,setPointer]=useState(100);
       useEffect(()=>{
        console.log("component is rendered using count"+count);
        console.log("component is rendered using pointer"+pointer);
    },[count,pointer])
    function doIncrement(){
        setCount(count+20);
    }
    function doPointer(){
        setPointer(pointer-10);
    }
    
  return (
    <div>
      count value:{count}
      <br />
      pointer value:{pointer}
    
    <div>
        <br /><br />
        <button onClick={doIncrement}> BUTTON</button><br /><br /><br />
        <button onClick={doPointer}> BUTTON</button>
    </div>
    </div>
  )
}

export default Useeffectwork