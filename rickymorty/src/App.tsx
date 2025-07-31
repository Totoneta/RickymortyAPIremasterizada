/* Router Dom */
import { BrowserRouter, Route, Routes } from "react-router-dom";
/* Pages */
import IndexPage from "./pages/indexpage";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" Component={IndexPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
