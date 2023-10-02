import GrandChild from "./GrandChild";

const Child = () => {
  return (
    <div style={{ border: "solid red 2px" }}>
      <h2>Child</h2>
      <GrandChild />
    </div>
  );
};

export default Child;
