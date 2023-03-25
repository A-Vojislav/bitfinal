import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/pages/Header";
import Footer from "./components/pages/Footer";

function App() {
  return (
    <div>
   <Routes>
    <Route path="/" element={<Header></Header>}></Route>
    <Route path="/" element={<Footer></Footer>}></Route>
   </Routes>
    </div>
  );
}

export default App;
