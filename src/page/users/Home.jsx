import { useContext } from "react"
import UserContext from "../../context/UserContext"
const Home = () => {

    const userContext = useContext(UserContext);

    return (
        <div>
          <div class="hero-section">
  <h1>Welcome to Electronic Store</h1>
  <p>We offer a wide range of electronics products</p>
  <a href="#" class="btn btn-primary">Shop Now</a>
</div>

<div class="container featured-products">
  <h2 class="text-center">Featured Products</h2>
  <div class="row">
    <div class="col-md-4">
      <div class="card">
        <img src="https://via.placeholder.com/300" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Product 1</h5>
          <p class="card-text">Description of Product 1.</p>
          <a href="#" class="btn btn-primary">Buy Now</a>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card">
        <img src="https://via.placeholder.com/300" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Product 2</h5>
          <p class="card-text">Description of Product 2.</p>
          <a href="#" class="btn btn-primary">Buy Now</a>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card">
        <img src="https://via.placeholder.com/300" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Product 3</h5>
          <p class="card-text">Description of Product 3.</p>
          <a href="#" class="btn btn-primary">Buy Now</a>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default Home