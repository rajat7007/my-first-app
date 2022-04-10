import React, {useState} from 'react'

export default function TextForm(props) {

      const handelUpClick = ()=>{

          let newText= text.toUpperCase();
          setText(newText)

      }
      const handelLowClick = ()=>{

        let newText= text.toLowerCase();
        setText(newText)

    }
    const handelClearText = ()=>{

      let newText= '';
      setText(newText)
      props.showAlert("Text Cleared","success");

  }

      const onChangeUp = (event)=>{

        
        setText(event.target.value)

    }
    
    const handelCopy = () => 
    
    {

              var text = document.getElementById("myBox");
                  text.select();
                 
                 ( navigator.clipboard.writeText(text.value));
              
                 props.showAlert("Copied To Clipboard","success");
          

    }

      const handelExtraSpaces = () =>
      {
            let newText = text.split(/[ ]+/);

                setText(newText.join(" "))

      }

    const[text, setText] = useState('')
  
    return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
  
      <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" value={text} onChange={onChangeUp} rows="8"></textarea>
      </div>

      <button className="btn btn-primary" onClick={handelUpClick}>Change To Uppercase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handelLowClick}>Change To Lowercase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handelClearText}>Clear Text</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handelCopy}>Copy Text</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handelExtraSpaces}>Remove Extra Spaces</button>

    </div>
    <div className="container my-2">

   <h1 className='text-success'>Your Text Summary :- </h1>
   <h4 className='my-3'style={{color:props.mode==='dark'?'white':'black'}}> There Are {text.split(" ").length} Words And {text.length} Characters. </h4>
   <h5 style={{color:props.mode==='dark'?'white':'black'}}> Minimum Time To Read The Text Is {0.0008*text.length} Minutes </h5>
   <p style={{color:props.mode==='dark'?'white':'black'}}>{text.length>0?text:"Type Something To Preview"}</p>


    </div>
    </>
  )
}

