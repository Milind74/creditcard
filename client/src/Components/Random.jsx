import React, { useState } from 'react'
import { useHistory } from 'react-router'
import axios from 'axios'

const Random = () => {
    let history=useHistory()
   
  const Civilscore=(min,max)=>{
    return Math.floor(Math.random()*(max-min+1)+min)

  }

//   console.log()

let interval=setInterval(()=>{
    let x=Civilscore(300,5000)
if(x<500){
    history.push("/reject")

}
else{
    history.push("/aproved")
}

console.log("x=",x)
clearInterval(interval)
    
},3000)

   
    return (
        <div style={{margin:"0 auto",width:"350px",marginTop:"150px"}}>
            <div class="spinner-grow text-primary" role="status">
  <span class="sr-only"></span>
</div>
<div class="spinner-grow text-secondary" role="status">
  <span class="sr-only"></span>
</div>
<div class="spinner-grow text-success" role="status">
  <span class="sr-only"></span>
</div>
<div class="spinner-grow text-danger" role="status">
  <span class="sr-only"></span>
</div>
<div class="spinner-grow text-warning" role="status">
  <span class="sr-only"></span>
</div>
<div class="spinner-grow text-info" role="status">
  <span class="sr-only"></span>
</div>
<div class="spinner-grow text-secondary" role="status">
  <span class="sr-only"></span>
</div>
<div class="spinner-grow text-dark" role="status">
  <span class="sr-only"></span>
</div>
        </div>
    )
}

export default Random
