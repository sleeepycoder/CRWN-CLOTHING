import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navigation from "./components/Navigation/Navigation";
import Authentication from "./authentication/Authentication";
import Shop from "./components/shop/Shop";
import Chekout from "./components/chekout/Chekout";


function App() {

  return (
    <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route index element={<Home />} />
      <Route path='shop/*' element={<Shop/>} />
      <Route path='auth' element={<Authentication/>} />
      <Route path='checkout' element={<Chekout/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
