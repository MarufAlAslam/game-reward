import React from "react";
import VidFrame from "../../Assets/vid-frame.png";

const RewardItem = ({ item }) => {
  const { title, description } = item;
  return (
    <div className="lg:flex justify-between items-start mb-16">
      <div className="left lg:w-4/12 lg:mb-0 mb-5">
        <img src={VidFrame} alt="" />
      </div>
      <div className="right lg:w-7/12">
        <h1 className="text-2xl font-bold mb-4">{title}</h1>
        <p>{description}</p>

        <div className="text-right mt-8">
          <button className="btn grad">GIOCA</button>
        </div>
      </div>
    </div>
  );
};

export default RewardItem;
