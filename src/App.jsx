import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./pages/nav/Nav";
import AppRouter from "./router";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/second" element={<Nav />} />
      </Routes>
    </Router>,
    <AppRouter/>
  );
}

export default App;
