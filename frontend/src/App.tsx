 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./page/MainPage";
import Dashboard from "./page/Dashboard";

const App: React.FC = () => {
  return (
    
    <Router>
       <Routes>
       <Route path="/"  element={<MainPage/>} />
       <Route path="/admin"  element={<Dashboard/>} />
       </Routes>
    </Router>
  );
};

export default App;


 


