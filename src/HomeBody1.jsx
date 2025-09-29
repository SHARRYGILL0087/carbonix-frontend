import { Leaf } from 'lucide-react';

export default function HomeBody1() {
  return (
    <div className="flex flex-col items-center justify-center py-20 bg-gradient-to-b from-[#D0E8FF] to-[#F0FAFF] text-center px-4">
      <h1 className="pt-16 text-3xl md:text-4xl font-bold text-[#0D2C54] hover:cursor-default">
        Turn CO<sub>2</sub> removal into <br /> economic value
      </h1>
      <p className="text-[#6B7280] mt-4 text-lg md:text-xl hover:cursor-default">
        Creating a clear pathway to making carbon removal a reality
      </p>
      <button className="mt-6 px-6 py-3 bg-teal-500 text-white rounded-full flex items-center gap-2 hover:scale-105 transition-transform duration-300">
        Remove <Leaf size={20} />
      </button>
    </div>
  );
}
