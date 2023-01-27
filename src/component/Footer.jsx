import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
        <p className="py-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
          est a quos adipisci et unde veritatis quod facere impedit. Vero non
          numquam nostrum dolorum dolore beatae commodi. Nobis, culpa quos.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare size={30}></FaFacebookSquare>
          <FaDribbbleSquare size={30}></FaDribbbleSquare>
          <FaGithubSquare size={30}></FaGithubSquare>
          <FaInstagramSquare size={30}></FaInstagramSquare>
          <FaTwitterSquare size={30}></FaTwitterSquare>
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-600">Solutions</h6>
          <ul>
            <li className="py-2 text-small">Analytics</li>
            <li className="py-2 text-small">Marketing</li>
            <li className="py-2 text-small">Commerce</li>
            <li className="py-2 text-small">Insight</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-600">Support</h6>
          <ul>
            <li className="py-2 text-small">Pricing</li>
            <li className="py-2 text-small">Documentation</li>
            <li className="py-2 text-small">Guidess</li>
            <li className="py-2 text-small">API Status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-600">Company</h6>
          <ul>
            <li className="py-2 text-small">About</li>
            <li className="py-2 text-small">Blog</li>
            <li className="py-2 text-small">Jobs</li>
            <li className="py-2 text-small">Pres</li>
            <li className="py-2 text-small">Career</li>
          </ul>
        </div>

        <div>
          <h6 className="font-medium text-gray-600">Legal</h6>
          <ul>
            <li className="py-2 text-small">Claim</li>
            <li className="py-2 text-small">Policy</li>
            <li className="py-2 text-small">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
