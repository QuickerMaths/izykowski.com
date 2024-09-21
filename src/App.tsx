import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import CalendarPage from "./pages/Calendar";
import JobPage from "@/pages/job.tsx";
import Contact from "./pages/Contact";
import News from "./pages/News";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="o-mnie" element={<About />} />
        <Route path="Aktualności" element={<News />} />
        <Route path="galeria" element={<Gallery />} />
        <Route path="kalendarz" element={<CalendarPage />} />
        <Route path="praca" element={<JobPage />} />
        <Route path="kontakt" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
