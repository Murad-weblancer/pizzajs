import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { PizzaCart } from "./pages/PizzaCart";
function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <div class="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/pizza/:id" element={<PizzaCart />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
