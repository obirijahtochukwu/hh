import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./views/dashboard/Index";
import Navbar from "./navigation/Navbar";
//import Sidebar from "./navigation/Sidebar";


function App() {
 

  return (
    <div className="App">
    <Navbar />
      <Routes>
          <Route path="/" exact element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
