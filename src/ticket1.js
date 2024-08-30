import React from 'react';
import './input.css'; // Ensure these files are correctly referenced
import './output.css'; // Ensure these files are correctly referenced
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon component
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'; // Import specific icons

function Tick() {
  return (
    <div className=' bg-custom-images bg-cover bg-no-repeat'>
      <div className='max-w-5xl mx-auto'>
        <div className='flex justify-center items-center h-screen'>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 -my-4">
        
          <div className="lg:w-[500px] lg:h-[500px] w-[350px] h-[350px] bg-custom-image bg-cover bg-center bg-no-repeat  ">
            <h2 className="absolute lg:top-[20vh] top-[13vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-sm lg:text-xl font-bold">
              Hello World</h2>
            <h2 className="absolute lg:top-[25vh] top-[16vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white lg:text-2xl text-sm font-bold ">
              Hello World
            </h2>
            <h2 className="absolute lg:top-[30vh] top-[19vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white lg:text-2xl text-sm font-bold">
              Hello World
            </h2>
            <h2 className="absolute lg:top-[35vh] top-[22vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white lg:text-2xl text-sm font-bold">
              Hello World
            </h2>
            <h2 className="absolute lg:top-[40vh] top-[25vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white Lg:text-2xl text-sm font-bold">
              Hello World
            </h2>
            <h2 className="absolute lg:top-[40vh] top-[28vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white Lg:text-2xl text-sm font-bold">
              Hello World
            </h2>
            <h2 className="absolute lg:top-[40vh] top-[31vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white Lg:text-2xl text-sm font-bold">
              Hello World
            </h2>

            <div className="absolute  lg:bottom-4 lg:p-40 lg:py-28 lg:left-4  left-[6rem] lg:top-[31vh] top-[32vh] flex items-center">
              <button className="flex items-center  bg-green-400 text-white font-bold lg:py-2 py-2 px-3 Lg:px-4 lg:mx-5 mx-3 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 ">
                <FontAwesomeIcon icon={faCheck} className="Lg:mr-2 " style={{ color: "#0a9608" }} />
                Accept
              </button>
              <button className="flex items-center bg-red-400 text-white font-bold lg:py-2 py-2 px-3 Lg:px-4 lg:mx-5 mx-2 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500">
                <FontAwesomeIcon icon={faXmark} className="lg:mr-2 " style={{ color: "#db0000" }} />
                Reject
              </button>
            </div>
          </div>
        


        
          <div className="lg:w-[500px] lg:h-[500px] w-[350px] h-[350px] bg-custom-image bg-cover bg-center bg-no-repeat  ">
            <h2 className="absolute lg:top-[20vh] top-[13vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-sm lg:text-xl font-bold">
              Hello World</h2>
            <h2 className="absolute lg:top-[25vh] top-[16vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white lg:text-2xl text-sm font-bold ">
              Hello World
            </h2>
            <h2 className="absolute lg:top-[30vh] top-[19vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white lg:text-2xl text-sm font-bold">
              Hello World
            </h2>
            <h2 className="absolute lg:top-[35vh] top-[22vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white lg:text-2xl text-sm font-bold">
              Hello World
            </h2>
            <h2 className="absolute lg:top-[40vh] top-[25vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white Lg:text-2xl text-sm font-bold">
              Hello World
            </h2>
            <h2 className="absolute lg:top-[40vh] top-[28vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white Lg:text-2xl text-sm font-bold">
              Hello World
            </h2>
            <h2 className="absolute lg:top-[40vh] top-[31vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white Lg:text-2xl text-sm font-bold">
              Hello World
            </h2>

            <div className="absolute  lg:bottom-4 lg:p-40 lg:py-28 lg:left-4  left-[6rem] lg:top-[31vh] top-[32vh] flex items-center">
              <button className="flex items-center  bg-green-400 text-white font-bold lg:py-2 py-2 px-3 Lg:px-4 lg:mx-5 mx-3 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 ">
                <FontAwesomeIcon icon={faCheck} className="Lg:mr-2 " style={{ color: "#0a9608" }} />
                Accept
              </button>
              <button className="flex items-center bg-red-400 text-white font-bold lg:py-2 py-2 px-3 Lg:px-4 lg:mx-5 mx-2 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500">
                <FontAwesomeIcon icon={faXmark} className="lg:mr-2 " style={{ color: "#db0000" }} />
                Reject
              </button>
            </div>
          </div>
          </div>
        </div>
        </div>
      </div>
    
  );
}

export default Tick;
