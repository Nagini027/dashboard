import React from "react";

import { LuChevronRight } from "react-icons/lu";
import { MdMyLocation } from "react-icons/md";
import { PiHamburgerFill } from "react-icons/pi";
import { BiDish } from "react-icons/bi";
function MenuCard() {
  return (
    <>
      <div className="bg-gray-900 text-white p-2 rounded-lg max-w-sm p-2">
        <div className="space-y-4 overflow-y-auto max-h-96 -ml-3 p-3">
          {/*  */}
          <div className="flex justify-between ">
            <div className="mb-3 flex">
              <div class="w-10 h-10  inline-flex items-center justify-center rounded-full  bg-red-900 text-red-500 flex-shrink-0">
                <MdMyLocation />
              </div>
              <h2 className="text-white p-2">Goals</h2>
            </div>
            <div className="mt-2">
              <div className="w-6 h-6  mr-3 inline-flex items-center justify-center rounded-full bg-gray-600 text-white flex-shrink-0">
                <LuChevronRight />
              </div>
            </div>
          </div>
          {/*  */}
          <div className="flex justify-between ">
            <div className="mb-3 flex">
              <div class="w-10 h-10  inline-flex items-center justify-center rounded-full  bg-indigo-800 text-white flex-shrink-0">
                <PiHamburgerFill className="text-indigo-400" />
              </div>
              <h2 className="text-white p-2">Popular Dishes</h2>
            </div>
            <div className="mt-2">
              <div className="w-6 h-6  mr-3 inline-flex items-center justify-center rounded-full dark:bg-gray-700 bg-gray-600 text-white flex-shrink-0">
                <LuChevronRight />
              </div>
            </div>
          </div>
          {/*  */}
          <div className="flex justify-between ">
            <div className="mb-3 flex">
              <div class="w-10 h-10  inline-flex items-center justify-center rounded-full  bg-cyan-900 text-white flex-shrink-0">
                <BiDish className="text-cyan-600" />
              </div>
              <h2 className="text-white p-2 ">Menus</h2>
            </div>
            <div className="mt-2">
              <div className="w-6 h-6  mr-3 inline-flex items-center justify-center rounded-full dark:bg-gray-700 bg-gray-600 text-white flex-shrink-0">
                <LuChevronRight />
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </>
  );
}

export default MenuCard;
