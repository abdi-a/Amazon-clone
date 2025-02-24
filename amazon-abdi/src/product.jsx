import "./product.css"
import coffee from "./assets/coffe.jpg"
const product = () => {
  return (
    <div className = "product">
      <div className="product-info">
        <p>The lean startup </p>
        <p className="product-price">
            <small>$</small>
            <strong>19.99</strong>
        </p>
      <div className="product-rating">
 <p>🌟</p>         

 </div>
     
        </div>
 <img src={coffee} alt="" />
        <button>Add to basket</button>
    </div>
  )
}

export default product
