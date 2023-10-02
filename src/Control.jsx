import { useContext } from "react";
import { BackgroundColorContext } from "./contexts/backgroundcolor.context";

const Control = () => {
  const { dispatch } = useContext(BackgroundColorContext);
  function onChangeBackgroundColor() {
    dispatch({ type: "CHANGE_BACKGROUND_COLOR", payload: "red" });
  }

  return (
    <div style={{ border: "solid yellow 2px" }}>
      <h2>Control</h2>
      <button onClick={onChangeBackgroundColor}>Change</button>
    </div>
  );
};

export default Control;
