import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./navigation/Navbar";
import Login from "./client/pages/login/Login";
import HomePage from "./client/pages/homePage/Index";

function App() {
  return (
    <div className="App">
      {/*<Navbar />*/}
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/login" exact element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
