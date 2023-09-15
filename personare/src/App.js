import React from "react";
import Header from "./components/Header/Header";
import Cards from "./components/Cards/Cards";
import Button from "./components/Button/Button";
import CardProvider from "./contexts/CardContext";

function App() {
  return (
    <div>
      <CardProvider>
        <Header></Header>
        <Button></Button>
        <Cards></Cards>
      </CardProvider>
    </div>
  );
}

export default App;
