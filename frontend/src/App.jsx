import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./pages/header";
import About from "./pages/about";
import Shop from "./pages/shop";
import Home from "./pages/home";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* Header contains some Link */}
        <Header />
        {/* Define the routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
