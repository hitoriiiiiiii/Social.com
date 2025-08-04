import React, { useState } from "react";
import { FaEllipsisV, FaCog } from "react-icons/fa";

export const AppCard = ({
  image,
  name,
  email,
  username,
  status,
  showButton,
  configured,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [apiKey, setApiKey] = useState("");

  return (
    <div className="relative w-[320px] h-[200px]">
      {/* Blurred Background Layer */}
      <div className="absolute inset-0 scale-[1.05] rounded-[26px] bg-[rgba(217,217,217,0.32)] backdrop-blur-[4.5px] z-0" />

      {/* Main Card */}
      <div className="relative w-full h-full rounded-xl bg-[#B5B2FF] shadow-[0px_9px_9px_rgba(0,0,0,0.25)] px-4 py-3 z-10 transition-transform hover:scale-[1.01]">
        {/* Top: Image and Dots */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {image && (
              <img
                src={image}
                alt={`${name} logo`}
                className="w-12 h-12 object-contain rounded-md shadow-md"
              />
            )}

            <h2 className="text-lg font-semibold text-neutral-900 font-poppins">
              {name}
            </h2>
          </div>

          {/* Dots Menu */}
          <div className="relative">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <FaEllipsisV size={14} className="text-gray-800" />
            </button>
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-[115px] h-[30px] bg-[#FFE5E5] border border-red-400 rounded-[8px] shadow-sm z-20 flex items-center justify-center transition-all duration-200 ease-in-out hover:bg-red-100 hover:shadow-md hover:scale-[1.03] cursor-pointer">
                <button
                  className="text-sm text-red-600 font-medium font-poppins"
                  onClick={() => alert(`Disconnected from ${name}`)}
                >
                  Disconnect
                </button>
              </div>
            )}
          </div>
        </div>

        {/* OAuth Badge */}
        <div className="mt-2 w-[75px] h-[25px] bg-gradient-to-b from-[#579BFF] to-[#345D99] rounded-md flex items-center justify-center">
          <span className="text-[#D0DAFF] text-sm font-medium font-poppins">
            OAuth
          </span>
        </div>

        {/* Email + Username */}
        <div className="mt-2 text-[13px] font-medium text-neutral-800 font-poppins leading-tight">
          <p>Email: {email}</p>
          <p className="mt-[2px]">Username: {username}</p>
        </div>

        {/* Configure Button */}
        {!configured && showButton && (
          <button
            onClick={() => setModalOpen(true)}
            className="absolute bottom-2 right-0 w-[100px] h-[32px] bg-[#394B8C] text-[#F1E6FF] text-[13px] font-semibold font-[Montserrat] rounded-l-[10px] flex items-center justify-start pl-2 gap-1 shadow-sm hover:scale-[1.03] hover:shadow-md transition"
          >
            <FaCog size={16} className="text-white" />
            Configure
          </button>
        )}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="bg-purple-200 rounded-2xl shadow-2xl max-w-sm w-full p-6 sm:p-8 space-y-6 transition-all duration-300">
            <div className="space-y-2 text-center">
              <h2 className="text-2xl font-semibold  text-neutral-800">
                Enter API Key
              </h2>
              <p className="text-sm font-medium text-gray-700">
                Paste the API key you received to connect this account.
              </p>
            </div>

            <input
              type="text"
              placeholder="API Key"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="w-full p-3 border border-gray-600 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#394B8C]"
            />

            <div className="flex justify-end gap-3">
              <button
                className="px-4 py-2 rounded-lg bg-gray-100 font-medium text-gray-700 hover:bg-gray-200 transition text-sm"
                onClick={() => setModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 rounded-lg bg-[#394B8C] font-medium text-white hover:bg-[#2f3d6c] transition text-sm"
                onClick={() => {
                  alert(`Saved API Key: ${apiKey}`);
                  setModalOpen(false);
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
