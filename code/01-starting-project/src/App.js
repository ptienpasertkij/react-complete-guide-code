import { Route } from "react-router-dom";
import Welcome from "./routes/Welcome";
import Products from "./routes/Products";

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
      <Route path="/lala">
        <h2>Let's get started!</h2>
      </Route>
    </div>
  );
}

export default App;
