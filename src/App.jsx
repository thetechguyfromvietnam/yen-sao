import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import YenSaoBuiTuyen from "./pages/yen-sao-bui-tuyen.jsx";
import About from "./pages/about.jsx";
import QuyTrinh from "./pages/quy-trinh.jsx";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<YenSaoBuiTuyen />} />
        <Route path="/about" element={<About />} />
        <Route path="/quy-trinh" element={<QuyTrinh />} />
      </Routes>
    </Router>
  );
}
