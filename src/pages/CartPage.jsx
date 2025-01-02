// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { addToCart, removeFromCart } from "../redux/slices/cartSlice";
import "./CartPage.css"

const CartPage = () => {
  // const dispatch = useDispatch();
  // const { cartItems } = useSelector((state) => state.cart);

  // Calculate total price
  // const totalPrice = cartItems.reduce(
  //   (acc, item) => acc + item.price * item.quantity,
  //   0
  // );

  // Handler to remove item
  // const handleRemove = (id) => {
  //   dispatch(removeFromCart(id));
  // };

  // Handler to change quantity
  // const handleQuantityChange = (id, quantity) => {
  //   if (quantity > 0) {
  //     dispatch(addToCart({ id, quantity }));
  //   }
  // };

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      {/* {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <Link to="/products" className="continue-shopping">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="cart-details">
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />
                <div className="cart-item-info">
                  <Link to={`/product/${item.id}`} className="cart-item-name">
                    {item.name}
                  </Link>
                  <p>Price: ₹{item.price}</p>
                  <div className="cart-item-quantity">
                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity - 1)
                      }
                      className="quantity-btn"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity + 1)
                      }
                      className="quantity-btn"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="remove-btn"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h2>Cart Summary</h2>
            <p>Total Items: {cartItems.length}</p>
            <p>Total Price: ₹{totalPrice.toFixed(2)}</p>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default CartPage;
