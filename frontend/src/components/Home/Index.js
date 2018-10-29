import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CategoryList from '../category/CategoryList';

export default class extends Component {
  render() {
    return (
      <div className="container">

      <div className="row">

<CategoryList/>

        <div className="col-lg-9">

          <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <img className="d-block img-fluid" src="http://placehold.it/900x350" alt="First slide"/>
              </div>
              <div className="carousel-item">
                <img className="d-block img-fluid" src="http://placehold.it/900x350" alt="Second slide"/>
              </div>
              <div className="carousel-item">
                <img className="d-block img-fluid" src="http://placehold.it/900x350" alt="Third slide"/>
              </div>
            </div>
            <Link className="carousel-control-prev" to="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </Link>
            <Link className="carousel-control-next" to="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </Link>
          </div>

          <div className="row">

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <Link to="/"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></Link>
                <div className="card-body">
                  <h4 className="card-title">
                    <Link to="/">Item One</Link>
                  </h4>
                  <h5>$24.99</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <Link to="/"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></Link>
                <div className="card-body">
                  <h4 className="card-title">
                    <Link to="/">Item Two</Link>
                  </h4>
                  <h5>$24.99</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <Link to="/"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></Link>
                <div className="card-body">
                  <h4 className="card-title">
                    <Link to="/">Item Three</Link>
                  </h4>
                  <h5>$24.99</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <Link to="/"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></Link>
                <div className="card-body">
                  <h4 className="card-title">
                    <Link to="/">Item Four</Link>
                  </h4>
                  <h5>$24.99</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <Link to="/"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></Link>
                <div className="card-body">
                  <h4 className="card-title">
                    <Link to="/">Item Five</Link>
                  </h4>
                  <h5>$24.99</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <Link to="/"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></Link>
                <div className="card-body">
                  <h4 className="card-title">
                    <Link to="/">Item Six</Link>
                  </h4>
                  <h5>$24.99</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
    )
  }
}

