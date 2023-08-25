import React from "react";
import { Route, Routes } from "react-router-dom";
import { Register } from "../pages/Register";
import { HeadRegistration } from "../pages/HeadRegistration";
import { MemberRegistration } from "../pages/MemberRegistration";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/headregister" element={<HeadRegistration />} />
      <Route path="/memberregister" element={<MemberRegistration />} />
    </Routes>
  );
};
