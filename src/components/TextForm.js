import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick =  ()=>{
    console.log("Uppercase was clicked" + text);//not important we can remove it
    let newText = text.toUpperCase();
    setText(newText);
   props.showAlert("converted to uppercase", "success");
  }
   const handleLoClick =  ()=>{
    console.log("Lowercase was clicked" + text);//not important we can remove it
    let newText = text.toLowerCase();
    setText(newText);
     props.showAlert("converted to lowercase", "success");
   
  }
  const handleClearClick =  ()=>{
    console.log("Clear was clicked" + text);//not important we can remove it
    let newText = '';

    setText(newText);
     props.showAlert("text cleared", "success");
  }

  const handleOnChange =  (event)=>{
    console.log("On change");//not important we can remove it
   setText(event.target.value);
   
  }
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
   
  }
   
  
   const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
     props.showAlert("extraspaces removed", "success");
   }

  
  // const [text, setText] = useState('Enter text here');//hooks
  const [text, setText] = useState('');
  //text = "new text";// wrong way to change the stateSetText
  //setText("new text");//correct way to change the stateSetText
  return (
   <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
  <textarea className="form-control"  value= {text} onChange={handleOnChange} style={{backgroundcolor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}} id="mybox" rows="8"></textarea>
 </div>
 <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To Uppercase</button>
 <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert To Lowercase</button>
 <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
 <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
 <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
 </div>
 <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
  <h1>Your text summary</h1>
  <p>{text.split(" ").length} words and {text.length} characters</p>
  <p>{0.008 * text.split(" ").length} Minutes read</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"Enter something in the text box above to preview it here"}</p>
    </div>
    </>
  )
}
