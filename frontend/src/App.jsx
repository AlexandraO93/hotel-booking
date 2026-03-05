import { Routes, Route } from "react-router-dom";
import RoslagenNavBar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Booking from "./pages/Booking";
import Room from "./pages/Room";
import FoodDrinks from "./pages/Food-drinks"
import AboutUs from "./pages/About-us";
import Contact from "./pages/Contact";
import Qa from "./pages/Qa";

function App() {
  return (
    <div className="app-root">
      <RoslagenNavBar />
      <main className="main-content">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/room" element={<Room />} />
          <Route path="/food-drinks" element={<FoodDrinks />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/qa" element={<Qa />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;