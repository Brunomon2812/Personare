import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import CardProvider from "./contexts/CardContext";

function App() {
  return (
    <div>
      <CardProvider>
        <Header></Header>
        <Main></Main>
      </CardProvider>
    </div>
  );
}

export default App;
