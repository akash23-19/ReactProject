//import logo from './logo.svg';
import "./App.css";
import Cards from "./components/Cards";

function App(props) {
  let myObj={
    username:"Akash",
    age:12
  }
  return (
    <div>
      <h1 className="bg-green-400 text-green p-4 rounded-xxl mb-4">
        Tailwind test
      </h1>
      <Cards username="chaiaurcode "  btnText="click me"/>
      <Cards username=" hero" btnText="visit me"/>
    </div>
  )
}

export default App;
