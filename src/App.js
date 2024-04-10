import {Route, Routes} from "react-router-dom";
import {HomePage} from "./components/pages/home";
import {InfoPage} from "./components/pages/info";

function App() {
  return (
  <Routes>
    <Route path="/carsharing/" element={<HomePage/>}>
        <Route index element={<InfoPage/>}/>
        <Route path="/carsharing/about" element={<InfoPage/>}/>
    </Route>
  </Routes>
  );
}

export default App;
