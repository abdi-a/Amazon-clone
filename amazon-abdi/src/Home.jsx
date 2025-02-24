import banner from "./assets/banner.jpg"
import "./home.css"
import Product from "./product"
const Home = () => {
  return (
    <div className= "home">
   <div className="home-container">
    <img className = "home-image" src={banner} alt="" />
   
   
   <div className="home-row">

<Product />
<Product />




   </div>
   <div className="home-row">
<Product />
<Product />
<Product />


<div className="home-row">





</div>



   </div>
   
<Product />

   
   </div>

</div>
  )
}

export default Home
