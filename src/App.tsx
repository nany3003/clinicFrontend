import { useState } from "react";
import Button from "./components/Button.tsx";
import { produce } from "immer";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "product 1", quantity: 1 },
      { id: 2, title: "product 2", quantity: 1 },
    ],
  });

  const handleClick = () => {
    if (selectedIndex !== -1)
      setCart(
        produce((draft) => {
          draft.items[selectedIndex].quantity += 1;
        }),
      );
  };
  return (
    <div>
      <ul className="list-group">
        <h1>
          {" "}
          {cart.items.map((item, index) => (
            <li
              key={item.id}
              onClick={() => setSelectedIndex(index)}
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
            >
              {`ID: ${item.id}, Title: ${item.title}, Quantity: ${item.quantity}`}
            </li>
          ))}{" "}
        </h1>
      </ul>
      <Button onClick={handleClick}>Click</Button>
    </div>
  );
}

export default App;
