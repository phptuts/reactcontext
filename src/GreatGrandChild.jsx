import { useContext } from "react";
import { BackgroundColorContext } from "./contexts/backgroundcolor.context";

const GreatGrandChild = () => {
  const { backgroundColor } = useContext(BackgroundColorContext);
  return (
    <div style={{ border: "solid purple 2px", backgroundColor }}>
      <h2>Great Grand Child</h2>
    </div>
  );
};

export default GreatGrandChild;
