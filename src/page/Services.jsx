import Base from "../components/Base";
import React from 'react'
function Services() {
  return (
    <Base
      title="Services we provide"
      description="In this page we will discuss about the services that we provide."
      buttonEnabled={true}
      buttonLink="/"
      buttonType="warning"
      buttonText="Home"
    >
        <div class="container my-4">
    <div class="row">
      <div class="col-lg-3">
        <h3>Categories</h3>
        <ul class="list-group">
          <li class="list-group-item">Laptops</li>
          <li class="list-group-item">Smartphones</li>
          <li class="list-group-item">Tablets</li>
          <li class="list-group-item">Accessories</li>
        </ul>
      </div>
      <div class="col-lg-9">
        <h1>Welcome to Electronic Store</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec ligula ac odio aliquam vestibulum. Integer quis eros justo. Sed viverra eu nunc id malesuada. Quisque vehicula pharetra urna non egestas. Nullam ac augue sit amet magna malesuada malesuada. Integer lacinia urna vel sapien sodales dictum. Quisque lacinia nisi ac odio varius, non dictum est hendrerit.</p>
        <p>Explore our wide range of electronic products and accessories.</p>
      </div>
    </div>
  </div>
    </Base>
  );
}

export default Services;
