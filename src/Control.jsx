import { useContext } from "react";
import { BackgroundColorContext } from "./contexts/backgroundcolor.context";

const Control = () => {
  const { setBackgroundColor } = useContext(BackgroundColorContext);
  function onChangeBackgroundColor() {
    setBackgroundColor("purple");
  }

  return (
    <div style={{ border: "solid yellow 2px" }}>
      <h2>Control</h2>
      <button onClick={onChangeBackgroundColor}>Change</button>
    </div>
  );
};

export default Control;
