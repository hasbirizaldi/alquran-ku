import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./layouts/Navbar";
import "./app.css";
import DetailSurat from "./pages/DetailSurat";
import Layout from "./layouts/Layout";
import Footer from "./layouts/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/surah/:id" element={<DetailSurat />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
