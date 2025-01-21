import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../services/api";

const Dashboard = () => {
  const [ads, setAds] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const response = await axios.get("/api/advertisements");
        setAds(response.data);
      } catch (error) {
        console.error("Error fetching ads:", error);
      }
    };

    fetchAds();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      
      <header className="flex justify-between items-center px-8 py-4 bg-white shadow">
        <h1 className="text-2xl font-bold text-gray-800">
          <span className="text-pink-600">list</span>bnb
        </h1>
        <div className="flex items-center">
          <button
            onClick={() => navigate("/login")}
            className="text-sm font-medium text-gray-600 hover:text-pink-600"
          >
            Sign In
          </button>
          <button
            onClick={() => navigate("/create-ad")}
            className="ml-4 px-4 py-2 bg-pink-600 text-white rounded-lg font-medium hover:bg-pink-700 transition"
          >
            Post Your Ad →
          </button>
        </div>
      </header>

      <div className="relative bg-white py-12 px-6 shadow">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 leading-tight">
              Get daily thing in same platform
            </h1>
          </div>
          <div className="relative flex">
            <img
              src="/images/Component 4.png"
              alt="Hero"
              className="h-[300px] w-[200px] object-cover rounded-md"
            />
            <div className="absolute top-1/2 -right-8 transform -translate-y-1/2">
              <img
                src="/images/shape-1-1.png.png"
                alt="5000+ ads"
                className="h-[150px] w-[150px] object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Fresh Recommendations</h2>
          <span className="text-pink-600 font-medium text-sm">33 Items</span>
        </div>
        <div className="grid grid-cols-4 gap-6 mt-6">
          {ads.map((ad) => (
            <div
              key={ad.id}
              className="border rounded-lg shadow-md overflow-hidden bg-white"
            >
              <img
                src={ad.image || "https://via.placeholder.com/300x200"}
                alt={ad.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg">{ad.title}</h3>
                <p className="text-gray-600">{ad.description}</p>
                <p className="text-pink-600 font-bold mt-2">${ad.price}</p>
                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => navigate(`/ads/${ad.id}`)}
                    className="text-sm font-medium text-pink-600 hover:underline"
                  >
                    View
                  </button>
                  <button
                    className="text-sm font-medium text-white bg-pink-600 px-4 py-2 rounded-lg hover:bg-pink-700 transition"
                  >
                    Edit Ad
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="text-center text-gray-600 text-sm mt-12">
        © 2024 listbnb
      </footer>
    </div>
  );
};

export default Dashboard;
