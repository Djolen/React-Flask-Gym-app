import MainCard from "./components/MainCard";
import Navbar from "./components/navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import ProductPage from "./components/ProductPage";
import ContactPage from "./components/ContactPage";
import OrdersView from "./components/OrdersView";
import OptionSection from "./components/OptionSection";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<> <MainCard/> <OptionSection/> <Banner/> </>} />
        <Route path="/PRODUCTS" element={<> <ProductPage/>  </>} />
        <Route path="/CONTACTUS" element={<> <ContactPage/>  </>} />
        <Route path="/VIEWORDERS" element={ <OrdersView/> } />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
