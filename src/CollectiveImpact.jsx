import React from "react";

// Sample data
const impactData = [
  {
    id: 1,
    image: "img1.png", 
    value: "670,404",
    unit: "metric tons",
    title: "Total CO₂ emissions saved with Carbonix",
    pastYear: "172,783",
  },
  {
    id: 2,
    image: "img2.png",
    value: "9,607,141",
    unit: "truckloads",
    title: "Total deliveries with Carbonix concrete",
    pastYear: "2,183,112",
  },
  {
    id: 3,
    image: "img3.png",
    value: "$7,209,635",
    unit: "USD",
    title: "Carbon credit revenue shared with producers",
    pastYear: "$2,478,939",
  },
];

export default function CollectiveImpact() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Our Collective Impact</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {impactData.map((item) => (
            <div key={item.id} className="flex flex-col items-center text-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-32 h-32 rounded-full object-cover mb-6"
              />
              <h3 className="text-4xl font-semibold">{item.value}</h3>
              <span className="text-gray-500 uppercase text-sm">{item.unit}</span>
              <p className="text-gray-700 mt-2 text-sm">{item.title}</p>
              <p className="mt-2 font-bold text-sm">
                Past 365 Days: {item.pastYear}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
