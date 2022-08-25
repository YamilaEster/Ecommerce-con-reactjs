import Product from "./components/Product"
import './App.css';
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import CheckoutPage from "./components/CheckoutPage";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Products/>
      <Product/>
      <CheckoutPage/>
      <CheckoutCard/>
    </div>
  );
}

export default App;
