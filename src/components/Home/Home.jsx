/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import "./Home.css";
import { userContext } from "../Provider/AuthProvider";
const Home = () => {
  const { user } = useContext(userContext);
  return (
    <div>
      <p>Hey All I Am Here {user}</p>
    </div>
  );
};

export default Home;
