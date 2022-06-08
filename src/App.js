import React from 'react'
import Navbar from './Components/NavComp/Navbar'
import { Route, Routes } from "react-router-dom"
import Home from "./Components/Home"
import Mens from "./Components/Mens"
import Womens from "./Components/Womens"
import Kids from "./Components/Kids"
import Accessories from "./Components/Accessories"
import Electronics from "./Components/Electronics"
import Footer from './Components/NavComp/Footer'
import WomensproductDetails from './Components/ProductDetails/WomensproductDetails'
import MensproductDetails from './Components/ProductDetails/Mensproductdetails'
import KidsproductDetails from './Components/ProductDetails/Kidsproductdetails'
import AccessoriesproductDetails from './Components/ProductDetails/Accessoriesproductdetails'
import ElectronicsproductDetails from './Components/ProductDetails/Electronicsproductdetails'
import Cart from './Components/Buttons/Cart'
import Exchange from './Components/Services/Exchange'
import Aboutus from './Components/Services/Aboutus'
import Register from './Components/Buttons/Register'
import Order from './Components/Buttons/Order'
import TandC from './Components/Services/TandC'
import PrivacayPolicy from './Components/Services/PrivacayPolicy'
import Contact from './Components/Services/Contact'

import Puma from './Components/Brands/BrandPage/Puma'
import PumaPageDetails from './Components/Brands/BrandPageDetails/PumaPageDetails'
import Wrogn from './Components/Brands/BrandPage/Wrogn'
import WrognPageDetails from './Components/Brands/BrandPageDetails/WrognPageDetails'
import One8 from './Components/Brands/BrandPage/One8'
import One8PageDetails from './Components/Brands/BrandPageDetails/One8PageDetails'
import Hrx from './Components/Brands/BrandPage/Hrx'
import HrxPageDetails from './Components/Brands/BrandPageDetails/HrxPageDetails'
import Nike from './Components/Brands/BrandPage/Nike'
import NikePageDetails from './Components/Brands/BrandPageDetails/NikePageDetails'
import Adidas from './Components/Brands/BrandPage/Adidas'
import AdidasPageDetails from './Components/Brands/BrandPageDetails/AdidasPageDetails'
import PeterEngland from './Components/Brands/BrandPage/PeterEngland'
import PeterEnglandPageDetails from './Components/Brands/BrandPageDetails/PeterEnglandPageDetails'
import Lee from './Components/Brands/BrandPage/Lee'
import LeePageDetails from './Components/Brands/BrandPageDetails/LeePageDetails'
import PepeJeans from './Components/Brands/BrandPage/PepeJeans'
import PepeJeansPageDetails from './Components/Brands/BrandPageDetails/PepeJeansPageDetails'
import CalvinKlein from './Components/Brands/BrandPage/CalvinKlein'
import CalvinKleinPageDetails from './Components/Brands/BrandPageDetails/CalvinKleinPageDetails'
import USPOLO from './Components/Brands/BrandPage/USPOLO'
import USPOLOPageDetails from './Components/Brands/BrandPageDetails/USPOLOPageDetails'
import JackandJones from './Components/Brands/BrandPage/JackandJones'
import JackandJonesPageDetails from './Components/Brands/BrandPageDetails/JackandJonesPageDetails'
import LouisPhilippe from './Components/Brands/BrandPage/LouisPhilippe'
import LouisPhilippePageDetails from './Components/Brands/BrandPageDetails/LouisPhilippePageDetails'
import AllenSolly from './Components/Brands/BrandPage/AllenSolly'
import AllenSollyPageDetails from './Components/Brands/BrandPageDetails/AllenSollyPageDetails'
import TommyHilfiger from './Components/Brands/BrandPage/TommyHilfiger'
import TommyHilfigerPageDetails from './Components/Brands/BrandPageDetails/TommyHilfigerPageDetails'
import Wrangler from './Components/Brands/BrandPage/Wrangler'
import WranglerPageDetails from './Components/Brands/BrandPageDetails/WranglerPageDetails'
import Benetton from './Components/Brands/BrandPage/Benetton'
import BenettonPageDetails from './Components/Brands/BrandPageDetails/BenettonPageDetails'
import Levis from './Components/Brands/BrandPage/Levis'
import LevisPageDetails from './Components/Brands/BrandPageDetails/LevisPageDetails'




function App() {
  return (

    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Mens" element={<Mens />} />
        <Route path="/Mens/:id" element={<MensproductDetails />} />
        <Route path="/Womens" element={<Womens />} />
        <Route path="/Womens/:id" element={<WomensproductDetails />} />
        <Route path="/Kids" element={<Kids />} />
        <Route path="/Kids/:id" element={<KidsproductDetails />} />
        <Route path="/Accessories" element={<Accessories />} />
        <Route path="/Accessories/:id" element={<AccessoriesproductDetails />} />
        <Route path="/Electronics" element={<Electronics />} />
        <Route path="/Electronics/:id" element={<ElectronicsproductDetails />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Order" element={<Order />} />

        <Route path="/Register" element={<Register />} />
        <Route path="/Exchange" element={<Exchange />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/TandC" element={<TandC />} />
        <Route path="/PrivacayPolicy" element={<PrivacayPolicy />} />
        <Route path="/Contact" element={<Contact />} />


        <Route path="/Puma" element={<Puma />} />
        <Route path="/Puma/:id" element={<PumaPageDetails />} />
        <Route path="/Wrogn" element={<Wrogn />} />
        <Route path="/Wrogn/:id" element={<WrognPageDetails />} />
        <Route path="/One8" element={<One8 />} />
        <Route path="/One8/:id" element={<One8PageDetails />} />
        <Route path="/Hrx" element={<Hrx />} />
        <Route path="/Hrx/:id" element={<HrxPageDetails />} />
        <Route path="/Nike" element={<Nike />} />
        <Route path="/Nike/:id" element={<NikePageDetails />} />
        <Route path="/Adidas" element={<Adidas />} />
        <Route path="/Adidas/:id" element={<AdidasPageDetails />} />
        <Route path="/PeterEngland" element={<PeterEngland />} />
        <Route path="/PeterEngland/:id" element={<PeterEnglandPageDetails />} />
        <Route path="/Lee" element={<Lee />} />
        <Route path="/Lee/:id" element={<LeePageDetails />} />
        <Route path="/PepeJeans" element={<PepeJeans />} />
        <Route path="/PepeJeans/:id" element={<PepeJeansPageDetails />} />
        <Route path="/CalvinKlein" element={<CalvinKlein />} />
        <Route path="/CalvinKlein/:id" element={<CalvinKleinPageDetails />} />
        <Route path="/USPOLO" element={<USPOLO />} />
        <Route path="/USPOLO/:id" element={<USPOLOPageDetails />} />
        <Route path="/JackandJones" element={<JackandJones />} />
        <Route path="/JackandJones/:id" element={<JackandJonesPageDetails />} />
        <Route path="/LouisPhilippe" element={<LouisPhilippe />} />
        <Route path="/LouisPhilippe/:id" element={<LouisPhilippePageDetails />} />
        <Route path="/AllenSolly" element={<AllenSolly />} />
        <Route path="/AllenSolly/:id" element={<AllenSollyPageDetails />} />
        <Route path="/TommyHilfiger" element={<TommyHilfiger />} />
        <Route path="/TommyHilfiger/:id" element={<TommyHilfigerPageDetails />} />
        <Route path="/Wrangler" element={<Wrangler />} />
        <Route path="/Wrangler/:id" element={<WranglerPageDetails />} />
        <Route path="/Benetton" element={<Benetton />} />
        <Route path="/Benetton/:id" element={<BenettonPageDetails />} />
        <Route path="/Levis" element={<Levis />} />
        <Route path="/Levis/:id" element={<LevisPageDetails />} />
        <Route path="/Hrx" element={<Hrx />} />
        <Route path="/Hrx/:id" element={<HrxPageDetails />} />
        <Route path="/Hrx" element={<Hrx />} />
        <Route path="/Hrx/:id" element={<HrxPageDetails />} />
        <Route path="/Hrx" element={<Hrx />} />
        <Route path="/Hrx/:id" element={<HrxPageDetails />} />
        <Route path="/Hrx" element={<Hrx />} />
        <Route path="/Hrx/:id" element={<HrxPageDetails />} />
        <Route path="/Hrx" element={<Hrx />} />
        <Route path="/Hrx/:id" element={<HrxPageDetails />} />
        <Route path="/Hrx" element={<Hrx />} />
        <Route path="/Hrx/:id" element={<HrxPageDetails />} />
      </Routes>


      <Footer />
    </>
  )
}
export default App