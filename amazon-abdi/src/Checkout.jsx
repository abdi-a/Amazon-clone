import Subtotal from "./Subtotal"
import "./checkout.css"
const Checkout = () => {
  return (
    <div className="checkout">
<div className="checkout-left">
   <img className ="checkout-ad"src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" /> 
<div>
    <h1 className="checkout-title">
        Your Shopping Basket
    </h1>
</div>
</div>
<div className="checkout-right">
<Subtotal/>




</div>
    </div>
  )
}

export default Checkout
