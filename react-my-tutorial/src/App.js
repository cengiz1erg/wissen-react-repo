import CartHeader from "./cartSample/CartHeader";
import ProductList from "./cartSample/ProductList";
import { CartProvider } from "./store/cartContext";

function App() {
  return (
    <>    
      <CartProvider>
        <CartHeader></CartHeader> {/* <h1>Cart count: 0</h1> */}
        <ProductList></ProductList>
      </CartProvider>
    </>
  );
}

export default App;
