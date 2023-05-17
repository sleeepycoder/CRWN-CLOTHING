import React from "react";
import Directory from "./direcyory/Directory";
import { Outlet } from "react-router-dom";

const Home = () => {
 

  return (
    <div>
      <Outlet />
      <Directory/>
      <Outlet />
    </div>
  );
};

export default Home;
