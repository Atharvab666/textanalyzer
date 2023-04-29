//import logo from './logo.svg';
//import { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
//import About1 from './Components/About1';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
//import About from './Components/aBOUT.JS';
import React,{ useState } from 'react';



function App() {
  const [mode, setMode] = useState('light');//whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{

  }

  const toggleMode = () =>{
    if (mode === 'light'){
    setMode ('dark');
    document.body.style.backgroundColor = 'grey';
  }
  else {
    setMode('light ');
    document.body.style.backgroundColor = 'light';
  }
  }
    
  return ( 
    // from <div> to </div> is all jsx
    //<div classNameName="blank">Lovely</div>
    <>
    {/*<Navbar /> */}   
    <Navbar title = "TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} /> 
    <Alert alert="This is alert"/>
    <div className="container my-3" >
      <TextForm heading = "Enter a text to analyze" mode={mode}/>
      {/*<About1 />*/}
    </div>
    
    </>
  );
}


export default App;
