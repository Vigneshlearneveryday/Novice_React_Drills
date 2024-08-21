import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import PublicNavbar from "./components/PublicNavbar";
import Login from "./components/Login";
import Register from "./components/Register";
import UserProfile from "./components/UserProfile";
function App() {
  return (
    <div>
      <BrowserRouter>
        <PublicNavbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
