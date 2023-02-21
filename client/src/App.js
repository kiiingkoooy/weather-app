import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import Store from "./store/Store";
import Weather from "./pages/Weather";

function App() {
  return (
    <div className="App">
      <Store>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="weather" element={<Weather />} />
        </Routes>
      </Store>
    </div>
  );
}

export default App;
