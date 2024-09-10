import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="o-mnie" element={<About />} />
        <Route path="galeria" element={<Gallery />} />
      </Route>
    </Routes>
  );
}

export default App;
