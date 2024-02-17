import { Routes, Route } from "react-router-dom";

import { Layout } from "../Layout";

import { Home } from "../pages/Home";
import { Pay } from "../pages/Pay";
import { Localization } from "../pages/Localization";
import { Contact } from "../pages/Contact";
import { Result } from "../pages/Result";


export function CustomerRoutes() {

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/pay" element={<Pay/>}/>
        <Route path="/localization" element={<Localization/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="result" element={<Result/>}/>
      </Route>
    </Routes>
  );
};