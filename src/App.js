import About from "./components/About";
import Homepage from "./components/Homepage";
import './App.css';

import { Link, Route, Routes } from "react-router-dom";
import Mealpage from "./components/Mealpage";
import MealContext from "./DataContext";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <MealContext.Provider value={meals}>
          <Mealpage />
        </MealContext.Provider>
    </div>
  )
}



export default App;

const meals = [
  {
    id: 1,
    name: "Pizza",
    description: "Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as anchovies, mushrooms, onions, olives, pineapple, meat, etc.) baked at a high temperature, traditionally in a wood-fired oven. A small pizza is sometimes called a pizzetta.",
    price: 10.99,
  },
  {
    id: 2,
    name: "Hamburger",
    description: "A hamburger (also burger for short) is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun. The patty may be pan fried, barbecued, or flame broiled. Hamburgers are often served with cheese, lettuce, tomato, onion, pickles, bacon, or chiles.",
    price: 5.99,
  },
  {

    id: 3,
    name: "Hot Dog",
    description: "A hot dog (also spelled hotdog), also known as a frankfurter (sometimes shortened to frank) or wiener, is a cooked sausage, traditionally grilled or steamed and served in a sliced bun. It is also commonly topped with various condiments such as ketchup, mustard, mayonnaise, relish, onions, cheese, chili, and sauerkraut.",
    price: 3.99,
  }
];