import React from "react";
import Card from "./Card";

import BarChart from "./BarChart";
import MenuCard from "./MenuCard";
import OrderTable from "./OrderTable";
import Feedback from "./Feedback";

function MainContainer() {
  return (
    <div>
      <div className="text-2xl font-bold text-white ml-3 mt-4">Dashboard</div>
      <div>
        <Card />
      </div>
      <div className="p-3 grid md:grid-flow-col grid-flow-row md:gap-2 gap-2">
        <div className="bg-gray-900">
          <BarChart />
        </div>
        <div>
          <MenuCard />
        </div>
      </div>
      <div className="p-3 grid md:grid-flow-col grid-flow-row md:gap-2 gap-2">
        <div className=" ">
          <OrderTable />
        </div>
        <div>
          <Feedback />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
