import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import Store from "./store/Store";
import Weather from "./pages/Weather";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Store>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/weather" element={<PrivateRoute />}>
            <Route path="/weather" element={<Weather />} />
          </Route>
        </Routes>
      </Store>
    </div>
  );
}

export default App;
