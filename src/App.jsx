import React from "react";
import "bootstrap/dist/css/Bootstrap.min.css";
import "./App.css";
import Fooditems from "./components/Fooditems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import Foodinput from "./components/Foodinput";
import { useState } from "react";
function App() {
  
  
  
  let [foodItems,setFooditems] = useState ([]);


  const onKeyDown = (event) => {
    if(event.key === 'Enter'){
      let newFoodItem = event.target.value;
      event.target.value ="";
      let newItems = [...foodItems, newFoodItem]
      setFooditems(newItems)
      
    }
    
  };
  return (
    <>
      <Container>
        <h2 className="food-heading">Healthy Food </h2>
        <Foodinput handleKeyDown={onKeyDown}></Foodinput>
       
        <Fooditems items={foodItems}></Fooditems>

        <ErrorMessage items={foodItems}></ErrorMessage>
      </Container>
    </>
  );
}
export default App;
