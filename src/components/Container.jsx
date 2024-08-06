import React from "react";
import TopContainer from "./TopContainer";
import "./Container.css";
import MainContainer from "./MainContainer";
function Container() {
  return (
    <div className="w-full">
      <TopContainer />
      <MainContainer />
    </div>
  );
}

export default Container;
