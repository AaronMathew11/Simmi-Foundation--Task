import "./App.css";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import About from "./pages/About";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cardview from "./pages/Cardview";

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/profile' element={<Profile />} />
          <Route path="/card-view/:id" element={<Cardview />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
