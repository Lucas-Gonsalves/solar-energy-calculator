import { Routes, Route } from "react-router-dom";

import { Layout } from "../Layout";
import { Home } from "../pages/Home";


export function CustomerRoutes() {

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Home/>}/>
      </Route>
    </Routes>
  );
};