import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AddTask from "./components/AddTask";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addtask" element={<AddTask />} />
        <Route path="/addtask/:id" element={<AddTask />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
