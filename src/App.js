import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./navigation/Navbar";
import Login from "./client/pages/login/Login";
import CreateAgentPage from "./client/pages/CreateAgentPage/Index";
import Dashboard from "./client/pages/dashboard/Dashboard";
import UploadAgent from "./client/pages/uploadAudioPage/Index";

function App() {
  return (
    <div className="App">
      {/*<Navbar />*/}
      <Routes>
        <Route path="/login" exact element={<Login />} />
        <Route path="/create-agent" exact element={<CreateAgentPage />} />
        <Route path="/dashboard" exact element={<Dashboard />} />
        <Route path="/upload-file" exact element={<UploadAgent />} />
      </Routes>
    </div>
  );
}

export default App;
