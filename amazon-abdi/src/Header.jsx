import "./Header.css"
import logo from "./assets/amazon-logo-white.png"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from "react-router-dom"
import { useStateValue } from "./StateProvider";
const Header = () => {

const [{basket}, dispatch] = useStateValue();






  return (
    <div className="header">
<Link to = "/">

      <img 
      className="header-logo"
       src= {logo} alt="" />


</Link>

    <div className="header-search">
  <input className="header-searchInput" 
  type="text" />
  < SearchIcon 
  className= "header-serachIcon"/>

     </div>
  <div className="header_nav">
 <div className="header-option">
   <span className="header-optionLineOne">
    Hello Abdi
  </span> <span className="header-optionLineTwo">
    Sign In
  </span>
  
  </div> 
<div className="header-option">
    <span className="header-optionLineOne">
    Returns
  </span> <span className="header-optionLineTwo">
    Orders
  </span> 
</div>
<div className="header-option">
  <span className="header-optionLineOne">
    Your
  </span> <span className="header-optionLineTwo">
    Prime
  </span> 
</div>
 <Link to="/checkout">
          <div className="header-optionBasket">
            <ShoppingBasketIcon />
            <span className="header-optionLineTwo header-basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>


</div>
</div>

  )
}

export default Header
