import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import "./App.css";
import Account from "./containers/Account";
import Device from "./containers/Device";

function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Account />} />
          <Route path="/account/" element={<Account />} />
          <Route path="/account/:id" element={<Account />} />
          <Route path="/device/" element={<Device />} />
          <Route path="/device/:id" element={<Device />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
