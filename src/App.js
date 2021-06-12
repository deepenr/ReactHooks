import "./App.css";
import { useState } from "react";

function App() {
  // let data = "deepesh";
  function updateData() {
    setdata("sidhu");
  }
  const [data, setdata] = useState(0);

  return (
    <div className="App">
      <h1> {data} </h1>
      <button onClick={updateData}> Update data</button>
    </div>
  );
}

export default App;
