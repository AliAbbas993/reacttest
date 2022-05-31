import logo from './logo.svg';
import {Route , Routes , BrowserRouter} from 'react-router-dom';
import Login from './module/Login';
import Listing from './module/Listing';
import Update from './module/update';
import './App.css';


function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/listing" element={<Listing />} />
      <Route path="/update/:id" element={<Update />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
