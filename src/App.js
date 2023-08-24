import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import List from "./Components/List/List";
import Hotel from "./Pages/Hotel/Hotel";

function App() {
  return (
    <div >
      <Routes>
        <Route  path="/" element={<Home />}/>
        <Route  path="hotels" element={<List />}/>
        <Route  path="hotels/:id" element={<Hotel />}/>

      </Routes>
    </div>
  );
}

export default App;
