import { Routes, Route } from "react-router-dom";
import { Contacts } from "../Pages/contacts";
import { Projects } from "../Pages/projects";

import React from 'react'

const Router = () => {
  return (
    <div>
        <Routes>
            <Route path="/Contacts" element={<Contacts/>} />
            <Route path="/Projects" element={<Projects/>} />
            {/* <Route path="" element= /> */}
        </Routes>
    </div>
  )
}

export default Router