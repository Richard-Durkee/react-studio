import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";
import CartItem from "./components/CartItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cartState, setItems] = useState([]);
  const updateCart = (item) => { setItems([...cartState, item ])}

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <BakeryItem name={item.name} image={item.image} add={() => updateCart(item)}></BakeryItem>
      ))}

      <div>
        <h2>Cart</h2>
          {cartState.map((item) => (
            <CartItem name={item.name} price={item.price}></CartItem>
          ))}
      </div>
    </div>
  );
}

export default App;
