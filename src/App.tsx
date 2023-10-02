import "./App.css";
import { User, UserWithZod } from "./components";

function App() {
  return (
    <div style={{ display: "flex", gap: "3rem" }}>
      <User />
      <UserWithZod />
    </div>
  );
}

export default App;
