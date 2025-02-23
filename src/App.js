import { Typography, AppBar, Tab, Tabs, Link, Box } from "@mui/material";
import { Router, Routes, Route, Navigate } from "react-router-dom";
import SponsorView from "./Views/SponsorView";
import HomeView from "./Views/HomeView";
import { useState } from "react";
import FAQView from "./Views/FAQView";
import ContactView from "./Views/ContactView";

function App() {
  const [value, setValue] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/sponsors" element={<SponsorView />} />
      <Route path="/faq" element={<FAQView />} />
      <Route path="/contactus" element={<ContactView />} />
    </Routes>
  );
}

export default App;
