
import './App.css';
// import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alert from './components/Alert';
function App() {

    const [mode, setMode] = useState('light');
    const [text, setText] = useState('Enable Dark Mode');
    const [alert, setAlert] = useState(null);

    const showAlert =(message, type)=>
    {
        setAlert({
          msg : message,
          type : type

        })
        setTimeout(() => { setAlert(null);
          
        }, 1500);

    }


    const toggleMode = ()=>
    
    {
          if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor='black';
            document.title='TextUtils - Dark Mode';
            setText('Enable Light Mode');
            showAlert('Dark Mode Enabled',"success");
          } else {
            setMode('light');
            document.body.style.backgroundColor='white';
            document.title='TextUtils - Light Mode';
            setText('Enable Dark Mode');
            showAlert('Dark Mode Enabled',"success");
          }
        }
      

        
    

  return (
  <>
   <Navbar title="TextUtils" mode={mode}  toggleMode={toggleMode} text={text}/>
    <Alert showAlert={showAlert} alert={alert}/>
  <div className="container my-3" >
    
    <TextForm heading="Enter Your Text Here" showAlert={showAlert} mode={mode}/>

    {/* < AboutUs /> */}
  
  </div>
  
  
  
  
  </>

  );
}

export default App;
