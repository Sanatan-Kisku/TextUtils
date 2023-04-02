import React, { useState } from 'react'


export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was selected " + text);
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value)
  }
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleClearClick = () => {
    let newText = "";
    setText(newText)
  }
  const handleCopy = () => {
    const text = document.getElementById("myBox")
    text.select()
    navigator.clipboard.writeText(text.value)
  }
  const handleExtraSpaces = () => {
    const newText = text.split(/[ ]+/)
    setText(newText.join(" "))
  }
  const handleRmVowels = () => {
    const newText = text.replace(/[aeiou]/gi, '')
    setText(newText)
  }
  const handleAllSpaces = () => {
    const newText = text.split(/[ ]+/)
    setText(newText.join(""))
  }
  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#2d60b3' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} value={text} id="myBox" rows="8" />
        </div>
        <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Upper Case</button>
        <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to Lower Case</button>
        <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear Text</button>
        <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
        <button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className='btn btn-primary mx-2' onClick={handleAllSpaces}>Remove All Spaces</button>
        <button className='btn btn-primary m-2' onClick={handleRmVowels}>Remove Vowels</button>
      </div>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>Will take {0.008 * text.split(" ").length} minutes to read. </p>
        <h2>Preview</h2>
        <p>{text.length === 0 ? "Enter your text in the textbox above to preview it here" : text}</p>
      </div>
    </>
  )
}
