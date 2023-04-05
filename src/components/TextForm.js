import React, { useState } from 'react'


export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was selected " + text);
    let newText = text.toUpperCase();
    setText(newText)
    if (text.length === 0) {
      props.showAlert("Textfield is empty!", "warning")

    } else {
      props.showAlert("Converted to Upper Case!", "success")
    }
  }
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value)
  }
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
    if (text.length === 0) {
      props.showAlert("Textfield is empty!", "warning")
    } else {
      props.showAlert("Converted to Lower Case!", "success")
    }
  }
  const handleClearClick = () => {
    let newText = "";
    setText(newText)
    if (text.length === 0) {
      props.showAlert("Textfield is empty", "warning")
    } else {
      props.showAlert("All Cleared!", "success")
    }

  }
  const handleCopy = () => {
    if (text.length === 0) {
      props.showAlert("Textfield is empty", "warning")
    } else {
      const newText = document.getElementById("myBox")
      newText.select()
      navigator.clipboard.writeText(newText.value)
      props.showAlert("Copied to clipboard!", "success")
    }
  }

  // const handlePaste = async () => {
  //   const read = await navigator.clipboard.readText();
  //   console.log(read)
  //   if (read.length === 0) {
  //     props.showAlert("Nothing in clipboard to paste!", "warning")
  //   } else {
  //     document.getElementById("myBox").value = read;
  //     props.showAlert("Pasted to Textbox!", "success")
  //   }
  // }

  const handleExtraSpaces = () => {
    const newText = text.split(/[ ]+/)
    setText(newText.join(" "))
    if (text.length === 0) {
      props.showAlert("Textfield is empty", "warning")
    } else {
      props.showAlert("Extra spaces are removed!", "success")
    }
  }
  const handleRmVowels = () => {
    const newText = text.replace(/[aeiou]/gi, '')
    setText(newText)
    if (text.length === 0) {
      props.showAlert("Textfield is empty", "warning")
    } else {
      props.showAlert("All vowels are removed!", "success")
    }
  }
  const handleAllSpaces = () => {
    const newText = text.split(/[ ]+/)
    setText(newText.join(""))
    if (text.length === 0) {
      props.showAlert("Textfield is empty", "warning")
    } else {
      props.showAlert("All spaces are removed!", "success")
    }
  }
  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#2d60b3' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} value={text} id="myBox" rows="8" ></textarea>
        </div>
        <button className='btn btn-primary m-1' onClick={handleUpClick}>Convert to Upper Case</button>
        <button className='btn btn-primary m-1' onClick={handleLoClick}>Convert to Lower Case</button>
        <button className='btn btn-primary m-1' onClick={handleClearClick}>Clear Text</button>
        <button className='btn btn-primary m-1' onClick={handleCopy}>Copy Text</button>
        <button className='btn btn-primary m-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className='btn btn-primary m-1' onClick={handleAllSpaces}>Remove All Spaces</button>
        <button className='btn btn-primary m-1' onClick={handleRmVowels}>Remove Vowels</button>
        {/* <button className='btn btn-primary m-2' onClick={handlePaste}>Paste Text</button> */}
      </div>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
        <p>Will take {0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} minutes to read. </p>
        <h2>Preview</h2>
        <p>{text.length === 0 ? "Enter your text in the textbox above to preview it here" : text}</p>
      </div>
    </>
  )
}
