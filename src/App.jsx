import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Product from "./Components/Product/Product";

function App() {
  let [quantity, setQuantity] = useState(0);

  return (
    <>
      <Navbar quantity={quantity} setQuantity={setQuantity} />
      <Product setQuantity={setQuantity} />
    </>
  );
}

export default App;
