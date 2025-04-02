import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Nav from "./pages/nav/Nav";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/second" element={<Nav />} />
        <Route path="/main" element={<Header />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;