
import { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { MoonLoader } from "react-spinners";
import { toast } from "react-toastify";

export default function Seller() {
  const [formData, setFormData] = useState({
    projectName: "",
    projectLocation: "",
    co2Potential: "",
    fullName: "",
    email: "",
    organization: "",
    phone: "",
    file: null,
    report: null,
    location: { lat: 20.5937, lng: 78.9629 }, // default: India
    agree: false,
    newsletter: false,
  });
  const [isLoading, setIsLoading] = useState(false)


  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };
  const navigate = useNavigate();

  function nav() {
    console.log(formData);
    alert("Registration submitted!");
    navigate("/sellerdashboard");
  };

  // Map click handler
  function LocationMarker() {
    useMapEvents({
      click(e) {
        setFormData((prev) => ({
          ...prev,
          location: e.latlng,
          projectLocation: `Lat: ${e.latlng.lat.toFixed(
            4
          )}, Lng: ${e.latlng.lng.toFixed(4)}`,
        }));
      },
    });
    return <Marker position={formData.location}></Marker>;
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    console.log("Submit")
    console.log(formData)
    try {
      const res = await axios.post("http://localhost:3000/seller/post", formData)
      console.log(res.data)
      setIsLoading(false)
      toast('Submitted Successfully', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
      });

    } catch (error) {
      console.log("Error : ", error)
      setIsLoading(false)
      toast('Something Went Wrong!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
      });
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-cyan-100 to-gray-50 p-4 mt-10 pt-30 pb-20">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl w-full max-w-4xl p-8 space-y-6"
      >
        {isLoading && <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/50">
          <MoonLoader color="#3b82f6" size={35} />
        </div>}

        <h2 className="text-2xl font-bold text-center text-[#0D2C54]">
          Become a Seller
        </h2>
        <p className="text-center text-gray-500">
          Register your blue carbon project
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-700">Project Information</h3>

            <input
              type="text"
              name="projectName"
              placeholder="Project Name"
              value={formData.projectName}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:ring focus:ring-cyan-200"

            />

            <input
              type="text"
              name="projectLocation"
              placeholder="Project Location (Click on map)"
              value={formData.projectLocation}
              onChange={handleChange}
              readOnly
              className="w-full border rounded-lg p-3 bg-gray-50 text-gray-600"
            />

            <input
              type="text"
              name="co2Potential"
              placeholder="Estimated CO₂ Sequestration Potential (tons/year)"
              value={formData.co2Potential}
              onChange={handleChange}

              className="w-full border rounded-lg p-3 focus:ring focus:ring-cyan-200"

            />


            <div className="border-dashed border-2 rounded-lg p-4 text-center">
              <label className="cursor-pointer text-gray-600">
                <input
                  type="file"
                  name="file"
                  onChange={handleChange}
                  className="hidden"
                  accept=".pdf,.doc,.docx"
                />
                📎 Upload Documentation (PDF/DOC)
              </label>
              {formData.file && (
                <p className="text-sm mt-2 text-green-600">
                  {formData.file.name}
                </p>
              )}
            </div>


            <div className="border-dashed border-2 rounded-lg p-4 text-center">
              <label className="cursor-pointer text-gray-600">
                <input
                  type="file"
                  name="report"
                  onChange={handleChange}
                  className="hidden"
                  accept=".pdf,.doc,.docx"
                />
                📊 Upload Project Report
              </label>
              {formData.report && (
                <p className="text-sm mt-2 text-green-600">
                  {formData.report.name}
                </p>
              )}
            </div>
          </div>


          <div className="space-y-4">
            <h3 className="font-semibold text-gray-700">Your Details</h3>

            <input
              type="text"
              name="fullName"
              placeholder="Your Full Name"
              value={formData.fullName}
              onChange={handleChange}

              className="w-full border rounded-lg p-3 focus:ring focus:ring-cyan-200"

            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:ring focus:ring-cyan-200"

            />

            <input
              type="text"
              name="organization"
              placeholder="Organization/Company Name"
              value={formData.organization}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:ring focus:ring-cyan-200"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}

              className="w-full border rounded-lg p-3 focus:ring focus:ring-cyan-200"
            />


            <div className="h-52 border rounded-lg overflow-hidden z-0">
              <MapContainer
                center={[formData.location.lat, formData.location.lng]}
                zoom={5}
                className="h-full w-full"
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="© OpenStreetMap"
                />
                <LocationMarker />
              </MapContainer>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
            />
            <span>
              I agree to the{" "}
              <a href="#" className="text-cyan-600 underline">
                Terms & Conditions
              </a>
            </span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="newsletter"
              checked={formData.newsletter}
              onChange={handleChange}
            />
            <span>Subscribe to newsletter</span>
          </label>
        </div>


        <button
          type="submit"
          className="w-[300px] ml-65 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-lg transition cursor-pointer"
        >
          Submit Registration
        </button>
      </form>
    </div>
  );
}
