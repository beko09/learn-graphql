import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as pages from "./pages/index";

function App() {
  return (
    <Router>
      <div className="container mx-auto px-[15px]">
        <Routes>
          <Route exact path="/" element={<pages.Home />} />
          <Route exact path="/country/:country_code" element={<pages.Country />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
