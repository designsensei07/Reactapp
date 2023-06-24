
import './App.css';
import Navbar from './components/Navbar.js'
import Textform from './components/Textform.js'
import Alert from './components/Alert.js'
// import About from './components/About.js'
import { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";



function App() {
  const[mode, setmode]=useState('light');
  const [alert,setalert]=useState(null);
  const showAlert=(message,type)=>{
    setalert({
      msg: message,
      typeof: type
    })
    setTimeout(() => {
       setalert(null);
    }, 2000);
  }
  const toggleMode=()=>{
    if(mode=='light'){
      setmode('dark');
      document.body.style.backgroundColor='#212429';
      showAlert("Dark mode is enabled","success");
      document.title="TextUtils( Dark Mode )";
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode is enabled","Success");
      document.title="TextUtils";
    }    
  }
  return (
    <>
    {/* <Router> */}

    <Navbar title='TextUtils' aboutText='About Us' mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>   
    <div className="container my-3">
    {/* <Routes> */}
          {/* <Route exact path="/about" element={<About /> } /> */}
          {/* <Route exact path="/"  element={<Textform showAlert={showAlert} heading="Enter the text below" mode={mode} />} /> */}
          <Textform showAlert={showAlert} heading="Enter the text below" mode={mode} />
    {/* </Routes> */}
    </div>
    {/* </Router> */}
    {/* <About/> */}
    </>
  );
}

export default App;
