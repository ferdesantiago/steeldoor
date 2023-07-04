import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContainerUser from './components/users/ContainerUser';
import ContainerJob from './components/jobs/ContainerJob';
import Navbar from './components/global/Navbar';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<ContainerUser />} />
            <Route path="jobs" element={<ContainerJob />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
