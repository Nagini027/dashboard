import React from "react";
import { FaLongArrowAltDown } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { IoMdArrowDropup } from "react-icons/io";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { BsFillHandbagFill } from "react-icons/bs";
import { AiFillDollarCircle } from "react-icons/ai";

import "react-circular-progressbar/dist/styles.css";
function Card() {
  const value = 0.7;
  return (
    <div className="">
      <div class="md:flex md:flex-wrap   px-1 mt-3">
        {/*1  */}
        <div class="p-2 md:max-w-48 w-full max-h-52  ">
          <div class=" rounded-lg  dark:bg-gray-800 bg-[#121026] shadow px-4 pt-3 pb-1">
            <div class="  mb-3">
              <div class="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-lg bg-blue-950 dark:bg-indigo-500  text-white flex-shrink-0">
                <FaBasketShopping className="text-2xl text-indigo-500" />
              </div>
              <p className="text-sm font-medium text-white mt-1 ">
                Total Orders
              </p>
              <div className="flex justify-between ">
                <p className="text-2xl font-medium text-white mt-2">75</p>
                <span className=" ml-20 mt-4 text-sm font-medium text-green-500 flex ">
                  <i>
                    <IoMdArrowDropup className="mt-1" />
                  </i>{" "}
                  <p>3%</p>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/*  2*/}
        <div class="p-2 md:max-w-48 w-full max-h-52 ">
          <div class=" rounded-lg  dark:bg-gray-800 bg-[#121026]  px-4 pt-3 pb-1">
            <div class="  mb-3">
              <div class="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-lg dark:bg-indigo-500 bg-green-900 text-white flex-shrink-0">
                <BsFillHandbagFill className="text-2xl text-green-400" />
              </div>
              <p className="text-sm font-medium text-white mt-1 ">
                Total Delivered
              </p>
              <div className="flex justify-between ">
                <p className="text-2xl font-medium text-white mt-2">75</p>
                <span className="  ml-20 mt-3 text-sm font-medium text-rose-600 flex justify-between">
                  <i>
                    {" "}
                    <MdOutlineArrowDropDown className="mt-1" />{" "}
                  </i>
                  <p>3%</p>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <div class="p-2 md:max-w-48  w-full max-h-52 ">
          <div class=" rounded-lg  dark:bg-gray-800 bg-[#121026] px-4 pt-3 pb-1">
            <div class="  mb-3">
              <div class="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-lg dark:bg-indigo-500 bg-red-900 text-white flex-shrink-0">
                <BsFillHandbagFill className="text-2xl text-red-600" />
              </div>
              <p className="text-sm font-medium text-white mt-1 ">
                Total Cancelled
              </p>
              <div className="flex justify-between ">
                <p className="text-2xl font-medium text-white mt-2">75</p>
                <span className="  ml-20 mt-4 text-sm font-medium text-green-500 flex">
                  <i>
                    <IoMdArrowDropup className="mt-1" />
                  </i>{" "}
                  <p>3%</p>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* 4 */}
        <div class="p-2 md:max-w-48 w-full max-h-52 ">
          <div class=" rounded-lg  dark:bg-gray-800 bg-[#121026]  px-4 pt-3 pb-1">
            <div class="  mb-3">
              <div class="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-lg dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                <AiFillDollarCircle className="text-xl mb-2 text-pink-700" />
                <MdOutlineArrowDropDown className="-ml-4 mt-3 text-pink-500" />
                <FaLongArrowAltDown className="-ml-1 text-pink-700" />
              </div>
              <p className="text-sm font-medium text-white mt-1 ">
                Total Revenue
              </p>
              <div className="flex justify-between ">
                <p className="text-2xl font-medium text-white mt-2">75</p>
                <span className="  ml-20 mt-3 text-sm font-medium text-rose-600 flex justify-between">
                  <i>
                    {" "}
                    <MdOutlineArrowDropDown className="mt-1" />{" "}
                  </i>
                  <p>3%</p>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/*5  */}
        <div class="p-2 md:max-w-96 w-full max-h-52 ">
          <div class=" flex justify-between rounded-lg  dark:bg-gray-800 bg-[#121026]  px-3 pt-1 pb-2">
            <div>
              <p className="text-sm font-normal text-gray-400 mt-1 ">
                Net Profit
              </p>

              <p className="text-2xl font-medium text-white mt-2 ">
                $<span className="ml-1">6759.25</span>
              </p>
              <span className=" mt-4 text-sm font-medium text-green-500 flex">
                <i>
                  <IoMdArrowDropup className="mt-1" />
                </i>{" "}
                <p>3%</p>
              </span>
            </div>
            <div className="ml-16 p-1">
              <div style={{ width: 100, height: 100 }} className="ml-11">
                <CircularProgressbar
                  value={value}
                  maxValue={1}
                  text={`${value * 100}%`}
                  styles={buildStyles({
                    textColor: "#fff",
                    pathColor: `rgba(62, 152, 199, ${value})`,
                    trailColor: "#d6d6d6",
                    backgroundColor: "#3e98c7",
                  })}
                  Goal
                  completed
                />
              </div>
              <p className="text-[10px] text-gray-500 text-nowrap">
                *The values here has been rounded off.
              </p>
            </div>
          </div>
        </div>
        {/*  */}

        {/*  */}
      </div>
    </div>
  );
}

export default Card;
