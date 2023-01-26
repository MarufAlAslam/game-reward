import React from "react";
import "../../Styles/Dashboard.css";

const Dashboard = () => {
  const tableData = [
    {
      key: "DA46B559F21B3E955BB1925C964AC5C3B3D72FE1BF37476A104B0E7396027B65",
      value: "300.000",
    },
    {
      key: "DA46B559F21B3E955BB1925C964AC5C3B3D72FE1BF37476A104B0E7396027B65",
      value: "290.000",
    },
    {
      key: "DA46B559F21B3E955BB1925C964AC5C3B3D72FE1BF37476A104B0E7396027B65",
      value: "200.000",
    },
    {
      key: "DA46B559F21B3E955BB1925C964AC5C3B3D72FE1BF37476A104B0E7396027B65",
      value: "190.000",
    },
    {
      key: "DA46B559F21B3E955BB1925C964AC5C3B3D72FE1BF37476A104B0E7396027B65",
      value: "160.000",
    },
    {
      key: "DA46B559F21B3E955BB1925C964AC5C3B3D72FE1BF37476A104B0E7396027B65",
      value: "157.000",
    },
    {
      key: "DA46B559F21B3E955BB1925C964AC5C3B3D72FE1BF37476A104B0E7396027B65",
      value: "150.000",
    },
    {
      key: "DA46B559F21B3E955BB1925C964AC5C3B3D72FE1BF37476A104B0E7396027B65",
      value: "70.057",
    },
    {
      key: "DA46B559F21B3E955BB1925C964AC5C3B3D72FE1BF37476A104B0E7396027B65",
      value: "51.077",
    },
    {
      key: "DA46B559F21B3E955BB1925C964AC5C3B3D72FE1BF37476A104B0E7396027B65",
      value: "50.000",
    },
  ];
  return (
    <div className="lg:p-10 p-4 lg:w-5/6 mx-auto w-full">
      <h1 className="title text-4xl font-bold">DASHBOARD</h1>

      <div className="lg:overflow-x-hidden overflow-x-auto">
        <div className="custom-table mt-10 w-full">
          {tableData.map((data, index) => {
            return (
              <div key={index} className="flex justify-between items-center">
                <div className="data-item p-1 w1">
                  <p>{index + 1}</p>
                </div>
                <div className="data-item p-1 w-full w2">
                  <p>{data.key}</p>
                </div>
                <div className="data-item p-1 text-right w3">
                  <p>{data.value}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
