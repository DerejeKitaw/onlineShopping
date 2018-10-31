import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductLayout from '../../hoc/ProductLayout';
// ProductDashboard component
export default class extends Component {
  render() {
    return (
      <ProductLayout>
        <div className="col-lg-9 my-4">
        <div className="row">
        Computers
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <Link to="/">
                  <img
                    className="card-img-top"
                    src="http://placehold.it/700x400"
                    alt=""
                  />
                </Link>
                <div className="card-body">
                  <h4 className="card-title">
                    <Link to="/">Item One</Link>
                  </h4>
                  <h5>$24.99</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Amet numquam aspernatur!
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">
                    &#9733; &#9733; &#9733; &#9733; &#9734;
                  </small>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <Link to="/">
                  <img
                    className="card-img-top"
                    src="http://placehold.it/700x400"
                    alt=""
                  />
                </Link>
                <div className="card-body">
                  <h4 className="card-title">
                    <Link to="/">Item Two</Link>
                  </h4>
                  <h5>$24.99</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Amet numquam aspernatur! Lorem ipsum dolor sit amet.
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">
                    &#9733; &#9733; &#9733; &#9733; &#9734;
                  </small>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <Link to="/">
                  <img
                    className="card-img-top"
                    src="http://placehold.it/700x400"
                    alt=""
                  />
                </Link>
                <div className="card-body">
                  <h4 className="card-title">
                    <Link to="/">Item Three</Link>
                  </h4>
                  <h5>$24.99</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Amet numquam aspernatur!
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">
                    &#9733; &#9733; &#9733; &#9733; &#9734;
                  </small>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <Link to="/">
                  <img
                    className="card-img-top"
                    src="http://placehold.it/700x400"
                    alt=""
                  />
                </Link>
                <div className="card-body">
                  <h4 className="card-title">
                    <Link to="/">Item Four</Link>
                  </h4>
                  <h5>$24.99</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Amet numquam aspernatur!
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">
                    &#9733; &#9733; &#9733; &#9733; &#9734;
                  </small>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <Link to="/">
                  <img
                    className="card-img-top"
                    src="http://placehold.it/700x400"
                    alt=""
                  />
                </Link>
                <div className="card-body">
                  <h4 className="card-title">
                    <Link to="/">Item Five</Link>
                  </h4>
                  <h5>$24.99</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Amet numquam aspernatur! Lorem ipsum dolor sit amet.
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">
                    &#9733; &#9733; &#9733; &#9733; &#9734;
                  </small>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <Link to="/">
                  <img
                    className="card-img-top"
                    src="http://placehold.it/700x400"
                    alt=""
                  />
                </Link>
                <div className="card-body">
                  <h4 className="card-title">
                    <Link to="/">Item Six</Link>
                  </h4>
                  <h5>$24.99</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Amet numquam aspernatur!
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">
                    &#9733; &#9733; &#9733; &#9733; &#9734;
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ProductLayout>
    );
  }
}
