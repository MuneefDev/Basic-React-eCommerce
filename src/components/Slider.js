import image1 from "../assets/image-1.jpg";
import image2 from "../assets/image-2.jpg";
import image3 from "../assets/image-3.jpg";
import "../App.css";

function Slider() {
  return (
    <>
      <div id="carouselExample" className="carousel slide">
        <div className="intro-text">
          <h1>Where All your needs </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
            molestiae praesentium excepturi amet cum repudiandae.
          </p>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image1} className="d-block w-100" alt="landing_image1" />
          </div>
          <div className="carousel-item">
            <img src={image2} className="d-block w-100" alt="landing_image2" />
          </div>
          <div className="carousel-item">
            <img src={image3} className="d-block w-100" alt="landing_image3" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Slider;
