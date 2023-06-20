import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Carousel from "./Components/Carousel";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch("/api");
    const data = await response.json();
    setData(data);
  }

  if (data === null) {
    return <>Still loading...</>;
  }

  return (
    <div className="App">
      <Carousel data={data} />
    </div>
  );
}

export default App;