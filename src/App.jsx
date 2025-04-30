import React from "react";
import { WindowSizeContextProvider } from "./context/WindowSizeContext";
import Home from "./pages/Home";

const App =()=>{
  return(
    <WindowSizeContextProvider>
      <Home />
    </WindowSizeContextProvider>
  )
}

export default App;
