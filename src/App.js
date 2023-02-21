import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Default from "./pages/Default";
//import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Default />}/>
      </Routes>
    </div>
  );
}

export default App;
