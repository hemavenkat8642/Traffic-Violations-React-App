import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginAs from "./components/LoginAs";
import Login from "./components/Login";
import Welcome from "./components/Welcome";
import CctvSearch from "./components/CctvSearch";
import CctvPage from "./components/CctvPage";
import Rfid from "./components/Rfid";
import Violations from "./components/Violations";
import TwoWheeler from "./components/TwoWheeler";
import FourWheeler from "./components/FourWheeler";
import ReportForm from "./components/ReportForm";
import ReportSummary from "./components/ReportSummary";
import Footer from "./components/Footer";

import "./App.css";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<LoginAs />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/welcome" element={<Welcome />} />
      <Route exact path="/cctv-search" element={<CctvSearch />} />
      <Route exact path="/cctv-page" element={<CctvPage />} />
      <Route exact path="/rfid" element={<Rfid />} />
      <Route exact path="/violations" element={<Violations />} />
      <Route exact path="/2-wheeler" element={<TwoWheeler />} />
      <Route exact path="/4-wheeler" element={<FourWheeler />} />
      <Route exact path="/report-form" element={<ReportForm />} />
      <Route exact path="/report-summary" element={<ReportSummary />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;
