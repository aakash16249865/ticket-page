import React from 'react';
import './input.css'; 
import './output.css';
import img from './images/ticket (2).png'

function Tike(){
   return(
      <section class="">
      <div class="items-center justify-center h-screen lg:flex">
          <div>
              <div class="relative">
                  <img src={img} alt="" class="lg:h-full  h-[70vh]" />
                  <div class="absolute inset-0 flex items-center justify-center">
                      <div>
                          <h1 class="text-sm font-bold text-white mx-3">HI Booking</h1>
                          <h1 class="text-sm font-bold text-white mx-3">HI Booking</h1>
                          <h1 class="text-sm font-bold text-white mx-3">HI Booking</h1>
                          <h1 class="text-sm font-bold text-white mx-3">HI Booking</h1>
                          <h1 class="text-sm font-bold text-white mx-3">HI Booking</h1>
                          <h1 class="text-sm font-bold text-white mx-3">HI Booking</h1>
                          <h1 class="text-sm font-bold text-white mx-3">HI Booking</h1>
                          <button class="p-2 bg-green-500 rounded-lg mx-3 ">Accept</button>
                          <button class="p-2 bg-red-500 rounded-lg ">Reject</button>
                      </div>
                  </div>
              </div>
              <div class="relative -mt-36 lg:-mt-20">
              <img src={img} alt="" class=" lg:h-full h-[70vh]" />
                  <div class="absolute inset-0 flex items-center justify-center">
                      <div class="">
                          <h1 class="text-sm font-bold text-white mx-3">HI Booking</h1>
                          <h1 class="text-sm font-bold text-white mx-3">HI Booking</h1>
                          <h1 class="text-sm font-bold text-white mx-3">HI Booking</h1>
                          <h1 class="text-sm font-bold text-white mx-3">HI Booking</h1>
                          <h1 class="text-sm font-bold text-white mx-3">HI Booking</h1>
                          <h1 class="text-sm font-bold text-white mx-3">HI Booking</h1>
                          <h1 class="text-sm font-bold text-white mx-3">HI Booking</h1>
                          <button class="p-2 bg-green-500 rounded-lg mx-3">Accept</button>
                          <button class="p-2 bg-red-500 rounded-lg lg:mx-4">Reject</button>
                      </div>
                  </div>
                  
              </div>
          </div>
      </div>
  </section>


   );

}

export default Tike;