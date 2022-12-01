import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import AddShoes from "./component/AddShoes";
function App() {
  return (
    <div className="App">
      <p>Edit and save to reload.</p>
      <Button color="primary">Button</Button>
      <AddShoes />
    </div>
  );
}

export default App;
