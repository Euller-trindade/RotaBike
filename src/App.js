import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
