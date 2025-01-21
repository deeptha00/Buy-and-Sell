import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../services/api";

const CreateAd = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/advertisements", formData);
      alert("Ad created successfully!");
      navigate("/ads");
    } catch (error) {
      console.error("Error creating ad:", error);
      alert("Failed to create ad.");
    }
  };

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
                  className="text-gray-600 hover:text-pink-600"
                  onClick={() => navigate("/ads")}
                >
                  Ads
                </button>
              </li>
              <li>
                <button
                  className="text-black font-semibold"
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
            <h2 className="text-lg font-bold mb-6">Post Ad</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Ad Title *
                </label>
                <input
                  name="title"
                  onChange={handleChange}
                  placeholder="Type here"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description *
                </label>
                <textarea
                  name="description"
                  onChange={handleChange}
                  placeholder="Type here"
                  required
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Photos *
                </label>
                <input
                  name="image"
                  onChange={handleChange}
                  placeholder="Image URL"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-pink-600 text-white font-bold rounded-lg hover:bg-pink-700 transition"
              >
                Post
              </button>
            </form>
          </div>
        </div>
      </div>

      <footer className="text-center text-gray-600 text-sm mt-8">
        © 2024 Listbnb
      </footer>
    </div>
  );
};

export default CreateAd;
