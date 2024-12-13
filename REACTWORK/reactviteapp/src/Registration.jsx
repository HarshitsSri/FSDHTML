import React, { useState } from 'react'

function Registration() {
    const[myname,setName]=useState();
    const[myemail,setEmail]=useState();
    const[mypassword,setPassword]=useState();
    const[data,setObject]=useState();
    function getData(e){
        // alert("Name, "+myname);
        // alert("Email, "+myemail);
        // alert("Password, "+mypassword);
        e.preventDefault();
        const dataObject={
            myname,myemail,mypassword
        }
        setObject(dataObject)

    }

 
  return (
  

    <div>
       

        {JSON.stringify(data)}
        
        <form>
      
        <div class="mb-3">
      <label for="exampleInputTEXT1" class="form-label">Name</label>
      <input onChange={(e)=>setName(e.target.value)} type="text" class="form-control" id="exampleInputTEXT1" aria-describedby="nameHelp" />
      
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input onChange={(e)=>setEmail(e.target.value)}  type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input onChange={(e)=>setPassword(e.target.value)} type="password" class="form-control" id="exampleInputPassword1"/>
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" />
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" onClick={getData} class="btn btn-primary">Submit</button>
  </form></div>
  )
}

export default Registration