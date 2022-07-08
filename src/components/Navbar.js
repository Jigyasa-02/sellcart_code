import React from 'react';

class navbar  extends React.Component {
    state = {  } 
    render() { 
        return (
          <div>
            <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1">Sellcart</span>
  </div>
</nav>
      <div>
      <div
  id="carouselExampleInterval"
  className="carousel slide"
  data-bs-ride="carousel"
>
  <div className="carousel-inner">
    <div className="carousel-item active" data-interval='2'>
      <img
        // style={{ height: 600, width: "650 px" }}
        src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Probably_the_best_one_for_the_blog.max-900x900.jpg"
        className="d-block w-100"
        alt="..."
      />
    </div>
    <div className="carousel-item" data-interval='2'>
      <img src="https://static1.anpoimages.com/wordpress/wp-content/uploads/2021/10/Google-Pixel-6%EF%BC%9AComing-Soon-%E7%AF%87-0-19-screenshot.png?q=50&fit=crop&w=1920&dpr=1.5" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item" data-interval='2'>
      <img src="https://images.news18.com/ibnlive/uploads/2021/09/pixel-6-series-ad-photos-2.jpg?impolicy=website&width=0&height=0" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleInterval"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleInterval"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

      </div>
 
      </div>
        );
    }
}
 
export default navbar;