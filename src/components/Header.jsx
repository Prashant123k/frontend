import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosConfig";
import { FaSignOutAlt } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axiosInstance.get("/products");
        console.log("response", response);
        setCartItems(response.data);
      } catch (error) {
        setError(error.message || "Failed to fetch cart items");
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  if (loading) {
    return <div>Loading cart...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="header">
      <div className="logo">
        <div onClick={() => navigate("/")}>
          <h1>ShopNow</h1>
        </div>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <div onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
              Home
            </div>
          </li>
          <li>
            <div
              onClick={() => navigate("/cart")}
              className="cart-link"
              style={{ cursor: "pointer" }}
            >
              <i className="fas fa-shopping-cart"></i>
              {cartItems.length > 0 && (
                <span className="cart-count">{cartItems.length}</span>
              )}
            </div>
          </li>
          <li>
            <div
              onClick={handleLogout}
              className="logout-link"
              style={{ cursor: "pointer" }}
            >
              <FaSignOutAlt className="logout-icon" /> Logout
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
