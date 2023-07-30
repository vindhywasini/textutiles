 //import { useState } from 'react';
 
 import './App.css';

 
import About from './components/About';
 import Navbar from './components/Navbar';
 import TextForm from './components/TextForm';
 import React, { useState } from 'react';
//  import Alert from './components/Alert';
// import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

   function App() {
  const [mode, setMode] = useState('light');//whether dark mode is enable or not
  // const [alert, setAlert] = useState('null');
  // const showAlert = (message,type)=>{
  //   setAlert({
  //     msg: message,
  //     type: type
  //   })
  //   setTimeout(() => {
  //     setAlert(null);

  //   }, 1500 );
  // }
   
    const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.background = '#093761';
      // showAlert("Dark mode has been enabled", "success");
      // document.tittle = 'TextUtiles - Dark Mode';

      // setInterval(()=>{
      //   document.title = 'TextUtiles is amazing Mode';
      // }, 2000);
      // setInterval(()=>{
      //   document.title = ' Install textutiles now TextUtiles';
      // }, 2000);
      
    }
    else{
      setMode('light')
      document.body.style.background = 'white';
      //  showAlert("Light mode has been enabled", "success");
      // document.tittle = 'TextUtiles - Light Mode';
    }
  }
  return (
  <>
  {/* <Navbar title="TextUtiles" aboutText="About TextUtiles"/> */}
   {/* <Navbar/>   */}
   {/* <Router> */}
   <Navbar title="TextUtiles" mode={mode} toggleMode={toggleMode}/> 
   {/* <Alert alert={alert}/>  */}
    <div className="container my-3 ">
     {/* <Switch> 
      <Route exact path="/about">
        <About/>
      </Route>
      <Route exact path="/">  */}
      <TextForm heading="Enter the text to analyze below" mode={mode}/> 
      {/* </Route>
      </Switch> 
       */}
    </div>
   {/* </Router> */}
  
   </> 

); 
    }        

export default App;
