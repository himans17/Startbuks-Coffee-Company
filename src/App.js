import "./App.css";
import "./index.css"
import "./assets/css/style.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js.map";
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Home from "./components/home";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
 
}

export default App;