import React from "react";
import "./Menu.css";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { IoMdHome } from "react-icons/io";
import { BiBarChartSquare } from "react-icons/bi";
import { AiOutlineWallet } from "react-icons/ai";

import { BsClipboard2Check } from "react-icons/bs";
import { BsBagCheck } from "react-icons/bs";
import { RiAppsFill } from "react-icons/ri";
import { FaRegClock } from "react-icons/fa";
function Menu() {
  return (
    <menu>
      <ul className="mainMenu">
        <Icon icon={<RiAppsFill className="text-indigo-500" />} />
        <Icon icon={<IoMdHome className="text-indigo-500" />} />
        <Icon icon={<BiBarChartSquare />} />
        <Icon icon={<BsClipboard2Check />} />
        <Icon icon={<AiOutlineWallet />} />
        <Icon icon={<BsBagCheck />} />
      </ul>
      <ul className="lastMenu">
        <Icon icon={<LiaSignOutAltSolid />} />
      </ul>
    </menu>
  );
}

const Icon = ({ icon }) => (
  <li>
    <a href="#">{icon}</a>
  </li>
);

export default Menu;
