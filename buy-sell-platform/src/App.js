import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import PublicAds from "./pages/PublicAds";
import CreateAd from "./pages/CreateAd";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicAds />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-ad" element={<CreateAd />} />
      </Routes>
    </Router>
  );
}

export default App;
