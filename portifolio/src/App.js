import './App.css';
import { 
  BrowserRouter, 
  Routes, 
  Route }
   from "react-router-dom";
import  LandingPage from './pages/page1';
import Page2 from './pages/page2';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}>
        <Route path="/page2" element={<Page2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
