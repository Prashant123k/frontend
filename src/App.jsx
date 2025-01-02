import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const isAuthenticated = localStorage.getItem("token");
  const location = useLocation();

  const publicRoutes = [
    { path: "/login", component: <LoginPage /> },
    { path: "/register", component: <RegisterPage /> },

    { path: "/", component: <HomePage /> },
    { path: "/product/:id", component: <ProductPage /> },
  ];

  const protectedRoutes = [{ path: "/cart", component: <CartPage /> }];

  return (
    <>
      {!["/login", "/register"].includes(location.pathname) && <Header />}
      <main>
        <Routes>
          {publicRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.component} />
          ))}

          {protectedRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                isAuthenticated ? (
                  route.component
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
          ))}
          <Route path="*" element={<div>page not found</div>} />
        </Routes>
      </main>
      {!["/login", "/register"].includes(location.pathname) && <Footer />}
    </>
  );
};

export default App;
