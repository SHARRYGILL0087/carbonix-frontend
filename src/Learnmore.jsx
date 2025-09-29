import Footer from "./Footer";
export default function Learnmore() {
  return (
    <div>
      <div className="bg-[#F1F5F9] justify-between pl-24 pr-20 pt-32 pb-8 space-y-16">

        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="flex-1">
            <h2 className="text-2xl font-extrabold text-gray-800 mb-6 hover:cursor-default">
              What is Blue Carbon
            </h2>
            <h6 className="text-gray-600 text-xl leading-relaxed hover:cursor-default">
              Blue carbon is carbon that is captured from the atmosphere and stored in coastal
              and marine ecosystems like mangroves, salt marshes, and seagrass meadows, as well
              as in the deep ocean. These natural systems are highly effective at absorbing and
              holding carbon in their vegetation, soils, and sediments, making them significant
              carbon sinks that play a crucial role in mitigating climate change.
            </h6>
          </div>
          <img
            src="pic1.png"
            alt="Blue carbon ecosystems"
            className="rounded-xl shadow-lg w-96 h-auto object-cover"
          />
        </div>


        <div className="flex flex-col gap-8">
          <h2 className="text-2xl font-extrabold text-gray-800 hover:cursor-default">
            Why is Blue Carbon Important?
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <ol className="flex-1 list-decimal pl-6 space-y-3 text-gray-800 font-semibold">
              <li>
                <b className="text-xl">Climate Change Mitigation –</b> Coastal ecosystems absorb carbon up to 4–10 times faster...
              </li>
              <li>
                <b className="text-xl">Long-Term Storage –</b> Unlike many land ecosystems, the carbon stored in marine sediments...
              </li>
              <li>
                <b className="text-xl">Biodiversity Support –</b> These habitats provide breeding grounds and shelter...
              </li>
              <li>
                <b className="text-xl">Coastal Protection –</b> Mangroves and salt marshes act as natural barriers...
              </li>
              <li>
                <b className="text-xl">Livelihoods & Communities –</b> Millions of people depend on these ecosystems...
              </li>
            </ol>
            <img
              src="pic2.png"
              alt="Importance"
              className="rounded-xl shadow-md w-80 h-auto object-cover"
            />
          </div>
        </div>


        <div className="flex flex-col md:flex-row-reverse items-start gap-8">
          <div className="flex-1">
            <h2 className="text-2xl font-extrabold text-gray-800 mb-6 hover:cursor-default">
              Key Blue Carbon Ecosystems
            </h2>
            <ol className="list-disc pl-6 space-y-2">
              <li>
                <b className="text-lg">Mangroves 🌱 –</b> Salt-tolerant trees...
              </li>
              <li>
                <b className="text-lg">Seagrasses 🌿 –</b> Underwater meadows that capture carbon...
              </li>
              <li>
                <b className="text-lg">Salt Marshes 🏝️ –</b> Coastal wetlands that absorb CO₂...
              </li>
            </ol>
          </div>
          <img
            src="pic3.png"
            alt="Ecosystems"
            className="rounded-xl shadow-lg w-80 h-auto object-cover"
          />
        </div>


        <div className="flex flex-col gap-8">
          <h2 className="text-2xl font-extrabold text-gray-800 hover:cursor-default">
            Threats to Blue Carbon Ecosystems
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <h6 className="text-gray-600 text-xl leading-relaxed hover:cursor-default">
                Unfortunately, blue carbon ecosystems are among the most threatened on Earth:
              </h6>
              <ol className="list-disc pl-6 space-y-2 text-gray-800 font-semibold">
                <li><b className="text-lg">Coastal development & urbanization</b></li>
                <li><b className="text-lg">Pollution & agricultural runoff</b></li>
                <li><b className="text-lg">Overfishing & destructive practices</b></li>
                <li><b className="text-lg">Rising sea levels & climate change</b></li>
                <li><b className="text-lg">Deforestation of mangroves</b></li>
              </ol>
              <h6 className="text-gray-600 text-xl leading-relaxed mt-4 hover:cursor-default">
                When degraded, these ecosystems not only stop storing carbon but also release CO₂...
              </h6>
            </div>
            <img
              src="pic4.png"
              alt="Threats"
              className="rounded-xl shadow-md w-80 h-auto object-cover"
            />
          </div>
        </div>


        <div className="flex flex-col md:flex-row items-start gap-8">
          <img
            src="pic5.png"
            alt="Protection"
            className="rounded-xl shadow-lg w-96 h-auto object-cover"
          />
          <div className="flex-1">
            <h2 className="text-2xl font-extrabold text-gray-800 hover:cursor-default">
              How Protecting Blue Carbon Helps Everyone
            </h2>
            <h6 className="text-gray-600 text-xl leading-relaxed hover:cursor-default">
              Protecting and restoring blue carbon ecosystems is a win–win solution:
            </h6>
            <ol className="pl-6 space-y-2 mt-2 list-none text-gray-800 font-semibold">
              <li>✔ Cuts down greenhouse gases</li>
              <li>✔ Preserves biodiversity</li>
              <li>✔ Protects coastal communities</li>
              <li>✔ Supports sustainable economies</li>
              <li>✔ Helps nations achieve climate targets (Paris Agreement & SDGs)</li>
            </ol>
          </div>
        </div>


        <div className="flex flex-col gap-8">
          <h2 className="text-2xl font-extrabold text-gray-800 hover:cursor-default">
            Global Blue Carbon Initiatives
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <ol className="list-disc pl-6 space-y-2 text-gray-800 font-semibold">
              <li>
                <b className="text-lg">UNEP & IUCN Blue Carbon Initiative –</b> Promotes conservation worldwide.
              </li>
              <li>
                <b className="text-lg">Mangrove Restoration Projects –</b> Across Asia, Africa, and Latin America.
              </li>
              <li>
                <b className="text-lg">Carbon Credits & Blue Economy Models –</b> Turning conservation into opportunities.
              </li>
            </ol>
            <img
              src="pic6.png"
              alt="Initiatives"
              className="rounded-xl shadow-md w-96 h-auto object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-start gap-8">
          <div className="flex-1">
            <h2 className="text-2xl font-extrabold text-gray-800 hover:cursor-default">
              What Can You Do?
            </h2>
            <ol className="list-disc pl-6 space-y-2 text-gray-800 font-semibold">
              <li className="text-lg">Support organizations working on blue carbon conservation.</li>
              <li className="pt-2 text-lg">Advocate for policies protecting coasts and marine life.</li>
              <li className="pt-2 text-lg">Reduce your carbon footprint to ease pressure...</li>
              <li className="pt-2 text-lg">Participate in mangrove plantation and seagrass restoration.</li>
            </ol>
          </div>
          <img
            src="pic7.png"
            alt="Take Action"
            className="rounded-xl shadow-lg w-80 h-auto object-cover"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
