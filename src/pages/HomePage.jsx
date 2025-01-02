import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";

const HomePage = () => {
  const products = [];
  const status = "succeeded";
  return (
    <div className="container">
      <h1>Products</h1>
      {status === "loading" && <Loader />}
      {status === "succeeded" && (
        <div className="grid">
          {products &&
            products?.length > 0 &&
            products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
        </div>
      )}
      {status === "failed" && <p>Error loading products</p>}
    </div>
  );
};

export default HomePage;
