import MainCard from "./components/MainCard";
import Navbar from "./components/navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import ProductPage from "./components/ProductPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactPage from "./components/ContactPage";


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<> <MainCard/> <Banner/> </>} />
        <Route path="/PRODUCTS" element={<> <ProductPage/>  </>} />
        <Route path="/CONTACTUS" element={<> <ContactPage/>  </>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
