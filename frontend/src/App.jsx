import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./pages/header";
import About from "./pages/about";
import Shop from "./pages/shop";
import Home from "./pages/home";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import Product from "./pages/product";
import Cart from "./pages/Cart";
import { ToastContainer, toast } from "react-toastify";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Login from "./pages/Login";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <ToastContainer />
      {/* Header contains some Link */}
      <Header />
      <SearchBar />
      {/* Define the routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
