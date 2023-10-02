import GreatGrandChild from "./GreatGrandChild";

const GrandChild = () => {
  return (
    <div style={{ border: "solid green 2px" }}>
      <h2>Grand Child</h2>
      <GreatGrandChild />
    </div>
  );
};

export default GrandChild;
