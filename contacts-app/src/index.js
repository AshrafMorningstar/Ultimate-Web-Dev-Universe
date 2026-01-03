/*
 Copyright (c) 2026 Ashraf Morningstar
 These are personal recreations of existing projects, developed by Ashraf Morningstar
 for learning and skill development.
 Original project concepts remain the intellectual property of their respective creators.
 Repository: https://github.com/AshrafMorningstar
*/

import React from "react";
import { createRoot } from "react-dom/client";
import ContactApp from "./components/ContactApp";
import { BrowserRouter } from "react-router-dom";

// styling

import "./styles/style.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ContactApp />
  </BrowserRouter>
);
