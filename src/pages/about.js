import Base from "../components/Base";

function About() {
  return (
    <Base title="Electro Store / About Us" description={null}>
      <div>  <div class="jumbotron jumbotron-fluid bg-light text-center">
        <div class="container">
            <h1 class="display-4">About Us</h1>
            <p class="lead">We are your one-stop shop for all your electronic needs. From smartphones to laptops
                and everything in between, we've got you covered.</p>
        </div>
    </div>

    <section class="container">
        <div class="row">
            <div class="col-lg-6">
                <h2>Who We Are</h2>
                <p>We are a team of tech enthusiasts dedicated to providing the latest and greatest electronic
                    devices to our customers.</p>
            </div>
            <div class="col-lg-6">
                <h2>Our Mission</h2>
                <p>Our mission is to make cutting-edge technology accessible to everyone, ensuring a seamless
                    shopping experience and top-notch customer service.</p>
            </div>
        </div>
    </section>
</div>
    </Base>
  );
}

export default About;
