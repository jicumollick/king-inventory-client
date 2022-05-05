import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Inventory from "./components/Inventory/Inventory";
import ManageItems from "./components/ManageItems/ManageItems";
import AddItems from "./components/AddItems/AddItems";
import MyItems from "./components/MyItems/MyItems";
import Login from "./components/Login/Login";
import Blogs from "./components/Blogs/Blogs";
import About from "./components/About/About";
import NotFound from "./components/NotFound/NotFound";
import Navbar from "./components/Home/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/manageItems" element={<ManageItems />} />
        <Route path="/addItems" element={<AddItems />} />
        <Route path="/myItems" element={<MyItems />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/notFound" element={<NotFound />} />

        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;
