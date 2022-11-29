import React, { useState } from 'react'
import copy from "copy-to-clipboard"; 

export default function TextArea({color}) {
    let [Text, setText]= useState("");
    function ToggleUpperCase(){
      Text= Text.toUpperCase();
      setText(Text);
    }
    function ToggleLowerCase(){
        Text= Text.toLowerCase();
        setText(Text);
    }
    function ToggleCopy(){
        copy(Text);
    }
    function ToggleClear(){
        setText("")
    }
    function toggleChange(e){
        setText(e.target.value);
    }
  return (
    <>
      <div className="container">
     <h1 className='my-5'> Enter Text bellow</h1>
      <div className="form-floating my-5">
  <textarea value={Text} onChange={toggleChange} className={`form-control bg-${color=="dark"? "success" : "light"} text-${color=="dark"? "light" : "dark"}`} placeholder="Leave a comment here"  style={{height: "200px"}}></textarea>
   </div>
      <button type="button" className={`btn btn-primary text-${color=="dark"? "light" : "dark"}`} onClick={ToggleUpperCase}> UpperCase</button>
      <button type="button" className={`btn btn-primary mx-3 text-${color=="dark"? "light" : "dark"}`} onClick={ToggleLowerCase}> LowerCase</button>
      <button type="button" className={`btn btn-primary mx-3 text-${color=="dark"? "light" : "dark"}`} onClick={ToggleClear}> Clear</button>
      <button type="button" className={`btn btn-primary text-${color=="dark"? "light" : "dark"}`} onClick={ToggleCopy}> Copy</button>
      <div className="my-5">
        <p>We takes <strong>{Text.length* 0.8} </strong>second to Read this </p>
        <p>This Paragraph contain {Text.length} Character</p>
        <strong> Preview Text:</strong>
        <p>{Text}</p>
      </div>

      </div>
    </>
  )
}
