import Button from "./components/Button.tsx";
import ListGroup from "./components/ListGroup.tsx";
import Alert from "./components/Alert.tsx";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisiblity] = useState(false);
  const list = ["Egypt", "United Stated Of America", "Morocco"];
  const onSelectItem = (item: string) => {
    console.log(item);
  };
  const onClick = () => {
    console.log("Button clicked");
    setAlertVisiblity(true);
    {
      alertVisible &&
        Alert({
          title: "This is an Alert",
          description: "You have been Alerted",
          color: "warning",
        });
    }
  };
  return (
    <div>
      <ListGroup
        items={list}
        heading={"Counteries"}
        onSelectItem={onSelectItem}
      />
      <Button color={"primary"} onClick={onClick}>
        Register
      </Button>
    </div>
  );
}

export default App;
