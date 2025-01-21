import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../services/api";

const PublicAds = () => {
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

      <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
        <img
          src="/images/Component 1.png"
          alt="listbnb logo"
          className="h-8"
        />
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

      <div className="flex justify-center mt-8">
        <div className="w-full max-w-6xl bg-white shadow-lg rounded-lg flex">

          <div className="w-1/4 p-6 bg-gray-50 border-r">
            <ul className="space-y-4">
              <li>
                <button
                  className="text-gray-600 hover:text-pink-600"
                  onClick={() => navigate("/profile")}
                >
                  My Account
                </button>
              </li>
              <li>
                <button
                  className="text-gray-600 hover:text-pink-600"
                  onClick={() => navigate("/profile")}
                >
                  Profile
                </button>
              </li>
              <li>
                <button
                  className="text-black font-semibold"
                  onClick={() => navigate("/ads")}
                >
                  Ads
                </button>
              </li>
              <li>
                <button
                  className="text-pink-600"
                  onClick={() => navigate("/create-ad")}
                >
                  Post Ad
                </button>
              </li>
              <li>
                <button
                  className="text-gray-600 hover:text-pink-600"
                  onClick={() => {
                    localStorage.removeItem("token");
                    navigate("/login");
                  }}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>

          <div className="w-3/4 p-6">
            <h2 className="text-lg font-bold mb-6">Your Advertisements</h2>
            <div className="space-y-4">
              {ads.map((ad) => (
                <div
                  key={ad.id}
                  className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow"
                >
                  <div className="flex items-center">
                    <img
                      src={ad.image}
                      alt={ad.title}
                      className="w-16 h-16 object-cover rounded-lg mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-bold">{ad.title}</h3>
                      <p className="text-sm text-gray-600">{ad.description}</p>
                      <p className="text-pink-600 font-bold">${ad.price}</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => navigate(`/ads/${ad.id}`)}
                      className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200"
                    >
                      View
                    </button>
                    <button
                      onClick={() => navigate(`/ads/${ad.id}/edit`)}
                      className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700"
                    >
                      Edit Ad
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <footer className="text-center text-gray-600 text-sm mt-8">
        © 2024 Listbnb
      </footer>
    </div>
  );
};

export default PublicAds;
