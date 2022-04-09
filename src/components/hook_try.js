import React,{useState} from 'react'

export default function TextForm(props) {
    
    const handelUpClick = () =>{

                let newText = text.toUpperCase();
                setText(newText)
    }
  
    const handelOnChange = (event) =>{

            console.log('On Change')
            setText(event.target.value)

    }
        const [text, setText] = useState("");
    return (
    <div>
    <h1>{props.heading}</h1>
    <div className="mb-3">
  
  <textarea className="form-control" id="myBox" value={text} onChange={handelOnChange} rows="8"></textarea>
    </div>
           <button className="btn btn-primary" onClick={handelUpClick}>Convert To UpperCase</button>

    </div>
  )
}
