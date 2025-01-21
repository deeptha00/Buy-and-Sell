import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../services/api";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("/api/auth/local/register", {
        email: formData.email,
        username: formData.username,
        password: formData.password,
      });

      localStorage.setItem("token", response.data.jwt); 
      navigate("/login");
    } catch (err) {
      setError("Failed to register. Please try again.");
      console.error(err);
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

      <div className="flex justify-center items-center mt-8">
        <div className="w-full max-w-6xl bg-white shadow-lg rounded-lg flex">
          
          <div className="w-1/2 p-12">
            <div className="flex justify-center mb-6">
            <img
          src="/images/Container.png" 
          alt="listbnb logo"
          className="h-8"
        />
            </div>
            <p className="text-center text-gray-600 mb-6 font-jakarta font-normal leading-[29px] text-[16px] w-[527px] h-[58px]">
  <span className="font-bold text-black">Listbnb</span> a Largest Classified
  Listing Marketplace offers perfect Ads classifieds...
</p>

            <h1
              className="text-[24px] font-semibold text-gray-800 leading-[28.8px] text-center mb-6"
            >
              Create Your Account
            </h1>
            {error && (
              <p className="text-center text-red-500 mb-4">{error}</p>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                  placeholder="Type here"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Username *
                </label>
                <input
                  type="text"
                  name="username"
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                  placeholder="Type here"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password *
                </label>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                  placeholder="Type here"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password *
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                  placeholder="Type here"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-pink-600 text-white font-bold rounded-lg hover:bg-pink-700 transition"
              >
                Register →
              </button>
            </form>
          </div>
         
          <div className="w-1/2 bg-pink-50 flex items-center justify-center p-12">
            <div className="text-center">
            <img
                            src="/images/Component 2.png"
                            alt="Illustration"
                            className="mb-6"
                        />
              <p className="text-gray-600 mb-4">
                Already have an account?{" "}
                <span
                  onClick={() => navigate("/login")}
                  className="text-pink-600 font-medium cursor-pointer"
                >
                  Login
                </span>
              </p>
              <button
                onClick={() => navigate("/login")}
                className="py-3 px-6 bg-pink-600 text-white font-bold rounded-lg hover:bg-pink-700 transition"
              >
                Login →
              </button>
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

export default Register;
