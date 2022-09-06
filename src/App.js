import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const modeHandler = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#120236';
      showAlert("Dark mode enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success");
    }
  };

  const redModeHandler = () => {
    if (mode === 'light') {
      setMode('danger');
      document.body.style.backgroundColor = '#8f2121';
      showAlert("Red mode enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={modeHandler} toggleRedMode={redModeHandler} />
        {alert && <Alert alert={alert} />}
        <div className="container my-3">
          <Routes>
            <Route path="/" element={<TextForm
              heading="Enter the text to analyze."
              mode={mode}
              showAlert={showAlert} />} />
            <Route path="about/*" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
