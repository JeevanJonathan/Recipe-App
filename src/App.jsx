import { useState } from "react";
import Search from "./Components/Search";
import FoodList from "./Components/FoodList";
import Nav from "./Components/Nav";
import "./App.css";
import Container from "./Components/Container";
import InnerConatiner from "./Components/InnerContainer";
import FoodDetails from "./Components/FoodDetails";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("641893");
  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerConatiner>
          <FoodList setFoodId={setFoodId} foodData={foodData} />
        </InnerConatiner>
        <InnerConatiner>
          <FoodDetails foodId={foodId} />
        </InnerConatiner>
      </Container>
    </div>
  );
}

export default App;
