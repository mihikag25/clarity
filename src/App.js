import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/main";
import Wallet from "./pages/wallet";
import Rating from "./pages/rating";

import PageNotFound from "./pages/notFound";
import Review from "./pages/cardPage";
import ReviewSearch from "./pages/reviewSearch";
import ActiveNavbar from "./components/navbar/activeNavbar";
import Footer from "./components/footer/footer";
import LegalStuff from './pages/legalStuff';
import PrivacyPolicy from "./pages/privacyPolicy";
import "./output.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/review" element={<Review />} />
        <Route path="/rating" element={<Rating />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/legalStuff" element={<LegalStuff />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />}/>
      </Routes>
    </Router>
  );
}
