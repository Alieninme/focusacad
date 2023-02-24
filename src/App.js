import './App.css';
import Login from './Login/Login';
import Home from './Home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {

  const userName = localStorage.getItem("usernameData");

  return (
    <div className="App">
    <Router>
      <Routes>
      <Route path='/home'  element={userName? <Home/> : <Navigate to ="/focusacad"/>} />
      <Route path="/focusacad" element={userName ? <Navigate to ="/home"/> : <Login/>}/>
      {/* <Route exact path="/" element={userName ? <Navigate to ="/home"/>  : <Login/>}/> */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;
