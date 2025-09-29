import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Header';
import Homepage from "./Homepage";
import Seller from './Seller';
import Learnmore from "./Learnmore";
import Buyer from "./page/Buyer";
import Sellerdashboard from "./Sellerdashboard";
import { ToastContainer } from "react-toastify";
import Footer from "./Footer";
import Login from "./Login";
import UserTypeSelection from "./UserTypeSelection";
import UserManagement from "./components/Admin";
function App() {
  return (
    <div>
      <Router>
        <ToastContainer />
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/buyer" element={<Buyer />} />
          <Route path="/seller" element={<Seller />} />
          <Route path="/admin" element={<UserManagement />} />
          <Route path="/community" element={<Homepage />} />
          <Route path="/map" element={<Homepage />} />
          <Route path="/login" element={<Homepage />} />
          <Route path="/user" element={<UserTypeSelection />} />
          <Route path="/sellerdashboard" element={<Sellerdashboard />} />
          <Route path="/learn" element={<Learnmore />} />
          <Route path="/login/:role" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
