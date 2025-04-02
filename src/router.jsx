import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./pages/nav/Nav";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/second" element={<Nav />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;