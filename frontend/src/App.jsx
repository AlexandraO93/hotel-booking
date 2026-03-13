import { Routes, Route } from "react-router-dom";
import RoslagenNavBar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Booking from "./pages/Booking";
import Room from "./pages/Room";
import FoodDrinks from "./pages/Food-drinks"
import Breakfast from "./pages/Breakfast";
import AlaCarte from "./pages/A-la-carte";
import KidsMenu from "./pages/Kids-menu";
import AboutUs from "./pages/About-us";
import Contact from "./pages/Contact";
import Qa from "./pages/Qa";
import Checkout from "./pages/Checkout";
import BookingForm from "./components/BookingForm";
import Confirmation from "./pages/Confirmation";

function App() {
  return (
    <div className="app-root">
      <RoslagenNavBar />
      <main className="main-content">
        <Routes>
          <Route path="/hotel-booking" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/room" element={<Room />} />
          <Route path="/food-drinks" element={<FoodDrinks />} />
          <Route path="/breakfast" element={<Breakfast />} />
          <Route path="/a-la-carte" element={<AlaCarte />} />
          <Route path="/kids-menu" element={<KidsMenu />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/qa" element={<Qa />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout" element={<BookingForm />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;