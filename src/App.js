import MainCard from "./components/MainCard";
import Navbar from "./components/navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import ProductPage from "./components/ProductPage";
import ContactPage from "./components/ContactPage";
import OrdersView from "./components/OrdersView";
import OptionSection from "./components/OptionSection";


import { BrowserRouter as HashRouter, Routes, Route } from "react-router-dom";
import AdminLogin from "./components/AdminLogin";





function App() {
  return (
    <HashRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<> <MainCard/> <OptionSection/> <Banner/> </>} />
        <Route path="/PRODUCTS" element={<> <ProductPage/>  </>} />
        <Route path="/CONTACTUS" element={<> <ContactPage/>  </>} />
        <Route path="/adminadmin" element={ <AdminLogin/> } />
        <Route path="/VIEWORDERS" element={ <OrdersView/> } />
      </Routes>
      <Footer/>
    </HashRouter>
  );
}

export default App;
