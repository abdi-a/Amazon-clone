import "./Header.css"
import logo from "./assets/amazon-logo-white.png"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from "react-router-dom"
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
const Header = () => {

const [{basket, user}, dispatch] = useStateValue();

const handleAuthentication = () => {
  if (user) {
    auth.signOut();
  }
}




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
<Link to="login">
 <div onClick={handleAuthentication} className="header-option">
   <span className="header-optionLineOne">
    Hello Abdi
  </span> <span className="header-optionLineTwo">
    {user ? 'Sign Out' : 'Sign In'}
  </span>
  </div> 
</Link>
      

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
