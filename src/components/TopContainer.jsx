import React from "react";
import { FaBell } from "react-icons/fa";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { LuSettings } from "react-icons/lu";
import { FaUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
function TopContainer() {
  return (
    <div className="topContainer">
      <div className="inputBox">
        <input type="text" placeholder="Search" />
        <i className="searchIcon">
          <CiSearch />
        </i>
      </div>
      <div className="profileContainer">
        <i className="profileIconb">
          <HiOutlineEnvelope />
        </i>
        <i className="profileIconb">
          <LuSettings />
        </i>
        <i className="profileIcon">
          <FaBell />
        </i>
        <i className="profileIconb ">
          {/* <FaUserCircle /> */}{" "}
          <img
            src="https://images.pexels.com/photos/3348748/pexels-photo-3348748.jpeg"
            className="rounded-full"
          />
        </i>
      </div>
    </div>
  );
}

export default TopContainer;
