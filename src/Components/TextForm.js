import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () =>
    {
        console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = () =>
    {
        console.log("Uppercase was clicked " + text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleOnChange = (event) =>
    {
        console.log("On Change");
        setText(event.target.value);
    }
    const handlecopy = () =>{
      console.log("I am copy");
      var text = document.getElementById("myBox");
      text.select();
      text.setSelectionRange(0,9999);
      navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = () =>{
      let newText = text.split(/[ ]/);
      setText(newText.join(" "))
    }
const [text, setText] = useState('Enter text here');
//text ="new text"; // wrong way to change the text
//setText("new text")// correct way to change the text
  return (
    <>
    <div className='container'  style={{color: props.mode==='dark' ? 'white':'black'}}>
    <h1 >{props.heading}</h1>
        <div className="mb-3">
        {/*<label for="myBox" class="form-label">Example textarea</label>*/}
        <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark' ? 'grey':'white', color :props.mode==='dark' ? 'white':'black' }} id="myBox" rows="6" ></textarea>

        <button className="btn btn primary mx-2" style={{backgroundColor: "lightblue", color :"purple"  }} onClick={handleUpClick}>Covert-to-Uppercase</button>
        <button className="btn btn primary mx-2" style={{backgroundColor: "lightblue", color :"purple"  }} onClick={handleLoClick}>Covert-to-Lowercase</button>
        <button className="btn btn primary mx-2" style={{backgroundColor: "lightblue", color :"purple"  }} onClick={handlecopy}>Copy Text</button>
        <button className="btn btn primary mx-2" style={{backgroundColor: "lightblue", color :"purple"  }} onClick={handleExtraSpaces}>Remove extra spaces</button>
        </div>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark' ? 'white':'black'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length}Minutes required to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter some text to preview"}</p>
    </div>
    </>
  )
}
//if we remove value = {text } from textarea section we are not able to see the text tht we have 
//put into textbox in uppercase but we can see the text which is coverted in uppercase in console
