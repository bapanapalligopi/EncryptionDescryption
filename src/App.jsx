import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Caesar from "./components/Caesar";
import Monoalphabetic from "./components/Monoalphabetic";
import { Routes, Route } from "react-router";
function App() {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      <Routes>
        <Route index="/home" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/caesarcipher" element={<Caesar />} />
        <Route path="/monoalphabetic" element={<Monoalphabetic />} />
      </Routes>
    </div>
  );
}

export default App;
