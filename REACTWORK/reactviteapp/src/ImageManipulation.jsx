import React, { useState } from 'react'
import cat from './360_F_77518136_F88I0v3R2mZsKEgxxXMc4iqXlOjK8OLE.webp'
import './imgman.css';
function ImageManipulation() {
    const[height,setHeight]=useState(200);
    const[angle,setAngle]=useState(30);
    const[red,setRed]=useState();
    const[green,setGreen]=useState();
    const[blue,setBlue]=useState();
    function enhanceHeight(){
        setHeight(height+20)
    }
    function dorotate(){
        setAngle(angle+30);
    }
    function changecolor(){
        setRed(Math.random()*255);
        setGreen(Math.random()*255);
        setBlue(Math.random()*255);
    }
  return (
    <div className='container' style={{ backgroundColor:`RGB(${red},${green},${blue})`}}>
        <div className='imgdiv' style={{ backgroundColor:'white',height:'200px' , width:'200px',border:'3px solid red'}}>
            <img src={cat} height={height} width={200} alt='cat image' style={{transform:`rotate(${angle}deg)`}} />
        </div>
        <div style={{border:'2px solid black',marginTop:'50px',paddingLeft:'60px',color:'white'}}>
            <button onClick={enhanceHeight}>Enhance height</button>  &nbsp;&nbsp;&nbsp;
          
            <button>Enhance width</button>&nbsp;&nbsp;&nbsp;
            <button onClick={changecolor}>Color change</button>&nbsp;&nbsp;&nbsp;
            <button onClick={dorotate}>Rotate</button>
        </div>
    </div>
  )
}

export default ImageManipulation