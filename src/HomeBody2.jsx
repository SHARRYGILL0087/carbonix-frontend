import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";
export default function HomeBody2() {
  const navigate = useNavigate();
  function navigatebutton()
  {
    navigate("/learn");
  }
  return (
     <div className="bg-[#F1F5F9] min-h-screen pt-8 px-4 md:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8 hover:cursor-default">
          What is blue carbon?
        </h2>
        <div className="flex flex-col lg:flex-row gap-8 mb-8 bg-white rounded-3xl shadow-2xl p-6 md:p-8">
          <div className="lg:w-1/2 rounded-2xl overflow-hidden shadow-md">
            <img
              src="rivertree.jpg"
              alt="Mangrove forest in clear blue water"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:w-1/2 rounded-2xl p-0 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2 hover:cursor-default">
                Blue carbon
              </h3>
              <p className="text-gray-600 leading-relaxed hover:cursor-default">
               Blue carbon refers to the carbon sequestered and stored in coastal and
                marine ecosystems, 
               including mangroves, salt marshes, and seagrasses. 
               These ecosystems play a critical role in mitigating climate change by
                capturing atmospheric and oceanic carbon dioxide, while simultaneously providing essential
                 ecological services such as coastal protection and biodiversity support.
              </p>
            </div>
            <NavLink to="/learn"
               onClick={navigatebutton}
              className="text-green-600 font-semibold mt-4 self-end hover:text-green-700 hover:cursor-default"
            >
              Learn more
            </NavLink>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 text-center shadow-md">
            <div className="flex justify-center mb-4">
              <span className="bg-green-100 text-green-600 rounded-full p-3 text-2xl hover:cursor-default">
                🌱
              </span>
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2 hover:cursor-default">
              Verified Projects
            </h4>
            <p className="text-sm text-gray-500 hover:cursor-default">
              Ute fis lror prcjecrs I thea-sesont comaun thtey and ivavlla
              aji lha ot di laut.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-md">
            <div className="flex justify-center mb-4">
              <span className="bg-green-100 text-green-600 rounded-full p-3 text-2xl hover:cursor-default">
                💰
              </span>
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2 hover:cursor-default">
              Economic Impact
            </h4>
            <p className="text-sm text-gray-500 hover:cursor-default">
              The la eao rrojects of ther cranmens te mgjes, rop vor nemonl a
              puison.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-md">
            <div className="flex justify-center mb-4">
              <span className="bg-green-100 text-green-600 rounded-full p-3 text-2xl hover:cursor-default">
                🌐
              </span>
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2 hover:cursor-default">
              Our Partners
            </h4>
            <p className="text-sm text-gray-500 hover:cursor-default">
              The la lonal mles lant, the erotare iate ate wibilas thd treplojs
              ogemoes at laut.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};