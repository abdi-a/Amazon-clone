import "./Product.css";
import PropTypes from 'prop-types';
import { useStateValue } from "./StateProvider";

function Product({ title, image, price, rating }) {
 const [{basket}, dispatch] = useStateValue();
 console.log("this is abdisa basket", basket);
  const addToBasket = () => {
   
 dispatch({
   type:"ADD_TO_BASKET",
   item:{
     title:title,
     image:image,
    price:price,
    rating:rating,


   }
 })

  };

  return (
    <div className="product">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}
Product.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired
};


export default Product;
