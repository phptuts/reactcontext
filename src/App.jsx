import Child from "./Child";
import Control from "./Control";
import BackgroundColorContextProvider from "./contexts/backgroundcolor.context";

function App() {
  return (
    <BackgroundColorContextProvider>
      <div style={{ border: "solid blue 2px" }}>
        <h2>Parent</h2>
        <Control />
        <Child />
      </div>
    </BackgroundColorContextProvider>
  );
}

export default App;
