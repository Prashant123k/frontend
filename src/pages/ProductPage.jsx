import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${id}`);
      setProduct(data);
      setLoading(false);
    };
    fetchProduct();
  }, [id]);

  return (
    <div className="product-page">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>${product.price}</p>
          <p>{product.description}</p>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
