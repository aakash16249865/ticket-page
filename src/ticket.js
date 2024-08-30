import React from 'react';

const Ticket = () => {
  return (A
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg flex overflow-hidden">
      {/* Left Section */}
      <div className="flex-1 p-6 border-r border-gray-300">
        <div className="flex flex-col items-start mb-4">
          <div className="text-gray-600 uppercase text-xs">Name of Passenger</div>
          <div className="text-xl font-bold">John Doe</div>
        </div>
        <div className="flex justify-between mb-4">
          <div>
            <div className="text-gray-600 uppercase text-xs">Flight</div>
            <div className="text-lg font-bold">F3954</div>
          </div>
          <div>
            <div className="text-gray-600 uppercase text-xs">Date</div>
            <div className="text-lg font-bold">07 Apr 2019</div>
          </div>
          <div>
            <div className="text-gray-600 uppercase text-xs">Seat</div>
            <div className="text-lg font-bold">7A</div>
          </div>
        </div>
        <div className="text-center mb-6">
          <div className="text-2xl font-bold">New York</div>
          <div className="text-gray-600 text-xs">to</div>
          <div className="text-2xl font-bold">Hong Kong</div>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-center">
            <div className="text-gray-600 uppercase text-xs">Gate</div>
            <div className="text-lg font-bold">D 12</div>
          </div>
          <div className="text-center">
            <div className="text-gray-600 uppercase text-xs">Boarding Time</div>
            <div className="text-lg font-bold">07:30</div>
            <div className="text-gray-500 text-xs">Gate closes 40 minutes before departure</div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-48 p-4 bg-red-500 text-white flex flex-col justify-between">
        <div className="text-xs uppercase tracking-wide">Boarding Pass</div>
        <div className="border-t-2 border-dotted border-white w-full my-4"></div>
        <div className="text-lg font-bold">John Doe</div>
        <div className="text-sm">Flight F3954</div>
        <div className="text-sm">07 Apr 2019</div>
        <div className="text-sm">Seat 7A</div>
        <div className="mt-6 text-center">
          <div className="text-sm">New York</div>
          <div className="text-xs">to</div>
          <div className="text-sm">Hong Kong</div>
          <div className="mt-4">
            <div className="text-sm">Gate D 12</div>
            <div className="text-xs">07:30</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
