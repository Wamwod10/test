import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Nav from "./pages/nav/Nav";
import AppRouter from "./router";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/second" element={<Nav />} />
        <Route path="/main" element={<Header />} />
      </Routes>
    </Router>,
    <AppRouter/>
  );
}

export default App;
