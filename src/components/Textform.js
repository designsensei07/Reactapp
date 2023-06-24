import React, {useState} from 'react'



export default function Textform(props) {
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked"+ text)
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
      }
      const handleLowClick=()=>{
        // console.log("Uppercase was clicked"+ text)
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success");
      }
      const handleClearClick=()=>{
        // console.log("Uppercase was clicked"+ text)
        let newText=" ";
        setText(newText);
      }
      const handleOnChange=(event)=>{
        // console.log("onchan  ge");
        setText(event.target.value);
      }
      const handleCopy=()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied text","success");
    }
    const[text,setText]=useState('Enter text here');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <div className="mb-3">
            <label htmlFor="myBox" className="form-label h4">{props.heading}</label>
            <textarea className="form-control" id="myBox" onChange={handleOnChange} rows="10" value={text} style={{backgroundColor: props.mode==='dark'?'gray':'white', color: props.mode==='dark'?'white':'black'}}></textarea>
            </div>
            <button className="btn btn-primary " onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
    </div>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <p><b>Your Text Summary</b></p>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      Your text takes {0.008*text.split(" ").length} Minutes to read.
      <h3 className='my-3'>Preview</h3>
      {text.length>0?text:"--First enter something in box to preview--"}
    </div>
    </>
  )
}
