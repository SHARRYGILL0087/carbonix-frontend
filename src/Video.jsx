import React from 'react';
import { MoveUpRight } from 'lucide-react';
export default function Video() {
  return (
    <div className="relative w-screen h-screen">
      {/* Video */}
      <video
        src="/video3.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-screen h-full object-cover"
      />

      {/* Overlay Text in top-left corner */}
      <div className="absolute top-60 left-20 text-left text-white">
        <h1 className="text-7xl md:text-5xl font-spectral mb-2 ">
          Turn CO<sub>2</sub> removal into <br/>economic value
        </h1>
        <h2 className="text-3xl md:text-xl mt-4">
          Creating a clear pathway to making carbon removal reality.
        </h2>
       <button className="bg-white rounded-2xl text-black p-2 mt-10 font-roboto flex items-center gap-2  transition-transform duration-300 hover:scale-105">
  <MoveUpRight className="w-5 h-5" />
  Remove  CO<sub>2</sub>
</button>
 </div>
    </div>
  );
}
