import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Card = () => {
  return (
    <div className="w-full bg-white py-[10rem] px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {/* Single */}
        <div className="w-full shadow-xl flx flex-col p-4 my-4 rounded-lg hover:scale-105 duration-200">
          <img
            src={Single}
            alt="/"
            className="w-20 mx-auto mt-[-3rem] bg-white"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 tex-black">
              Start Trial
            </button>
          </div>
        </div>

        {/* Double */}
        <div className="w-full bg-gray-100 shadow-xl flx flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-200">
          <img
            src={Double}
            alt="/"
            className="w-20 mx-auto mt-[-3rem] bg-white bg-transparent"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
            <button className="text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 bg-black">
              Start Trial
            </button>
          </div>
        </div>

        {/* Triple */}
        <div className="w-full shadow-xl flx flex-col p-4 my-4 rounded-lg hover:scale-105 duration-200">
          <img
            src={Triple}
            alt="/"
            className="w-20 mx-auto mt-[-3rem] bg-white"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
              Start Trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
