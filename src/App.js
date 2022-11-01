import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";

 
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      <div className="container mb-3">
      <Navbar title="React" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <TextForm heading="Enter the text to be analysed" mode={mode} showAlert={showAlert} />
      {/* <About mode={mode}/> */}
        {/* <Router>
        
        
          <Routes>
            <Route path='/' element={}/>
            <Route path='/about' element={}/>
          </Routes>
        </Router> */}
      </div>
    </>
  );
}

export default App;
















// import "./App.css";
// import About from "./Components/About";
// import Navbar from "./Components/Navbar";
// import TextForm from "./Components/TextForm";
// import React, { useState } from "react";
// import Alert from "./Components/Alert";
// //import * as React from "react";
// //import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// function App() {
//   const [mode, setMode] = useState("light");
//   const [name, setName] = useState("enable dark mode");
//   const [alert, setAlert] = useState(null);

//   let showalert = (message, type) => {
//     setAlert({
//       msg: message,
//       type: type,
//     });
//     setTimeout(() => {
//       setAlert(null);
//     }, 1500);
//   };

//   let changed = () => {
//     if (mode === "light") {
//       setMode("dark");
//       setName("enable light mode");
//       document.body.style.backgroundColor = "#032142";
//       document.body.style.color = "white";
//       showalert("you have entered dark mode", "success");
//       setTimeout(() => {
//         document.title = "dark mode on";
//       }, 1000);
//     } else {
//       setMode("light");
//       setName("enable dark mode");
//       document.body.style.backgroundColor = "white";
//       document.body.style.color = "black";
//       showalert("you have entered light mode", "success");
//       setTimeout(() => {
//         document.title = "light mode on";
//       }, 1000);
//     }
//   };

//   return (
//     <>
      
//         <Navbar
//           title={"textutils"}
//           about="About"
//           mode={mode}
//           changed={changed}
//           name={name}
//         />
//         <Alert alert={alert} />
//        <TextForm
//         heading="enter your text here"
//         mode={mode}
//         showalert={showalert}
//       />
//          <About mode={mode}/>
//     </>
//   );
// }

// export default App;