import { useState } from "react";
import Button from "./components/Button.tsx";
import { produce } from "immer";
import ExpandableText from "./components/ExpandableText.tsx";

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
      <ExpandableText maxLetterOnCollapsed={20}>
        lorem100 lorem100 lorem100 lorem100 lorem100 lorem100 lorem100 lorem100
        lorem100 lorem100 lorem100 lorem100 lorem100 lorem100 lorem100 lorem100
        lorem100 lorem100 lorem100 lorem100 lorem100 lorem100 lorem100 lorem100
        lorem100 lorem100 lorem100 lorem100 lorem100 lorem100 lorem100 lorem100
        lorem100 lorem100 lorem100 lorem100 lorem100 lorem100 lorem100 lorem100
      </ExpandableText>
    </div>
  );
}

export default App;
