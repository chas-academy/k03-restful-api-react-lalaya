import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';


export default class AdminProductList extends Component {
    render() {
        return (
            <div className="container">
              <div className="col justify-content-center">
                <form className="edit-products">

                  <div className="form-group">
                    <label htmlFor="search-by-category">Category</label>
                      <select className="form-control" id="search-by-category">
                        <option>Print</option>
                        <option>Postcard</option>
                      </select>
                  </div>

                  <div className="form-group">
                  <label htmlFor="search-by-size">Product Size</label>
                    <select className="form-control" id="search-by-size">
                      <option>50x70</option>
                      <option>30x40</option>
                    </select>
                  </div>

                  <div className="form-group">
                  <label htmlFor="search-by-size">Product</label>
                    <select className="form-control" id="search-by-size">
                      <option>Alpha A</option>
                      <option>Alpha M</option>
                      <option>Alpha X</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="text">Product Title</label>
                    <input type="name" className="form-control" id="product-title" placeholder="Product Title" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="text">Product Description</label>
                    <input type="name" className="form-control" id="product-description" placeholder="Product Description"/>
                  </div>

                  <div className="form-group">
                    <label htmlFor="text">Paper</label>
                    <input type="name" className="form-control" id="product-description" placeholder="Paper"/>
                  </div>

                  <div className="form-group">
                    <label htmlFor="text">Print Type</label>
                    <input type="name" className="form-control" id="product-description" placeholder="Print Type"/>
                  </div>

                  <div className="form-group">
                    <label htmlFor="thumbnail">Thumbnail</label>
                    <input type="file" class="form-control-file" id="thumbnail" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="image-1">Image</label>
                    <input type="file" class="form-control-file" id="image-1" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="image-2">Image</label>
                    <input type="file" class="form-control-file" id="image-2" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="image-3">Image</label>
                    <input type="file" class="form-control-file" id="image-3" />
                  </div>

                  <div className="form-group">
                    <button type="submit" className="btn btn-block btn-primary">Edit product</button>
                  </div>

                  <div className="form-group">
                    <button type="submit" className="btn btn-block btn-danger">Delete product</button>
                  </div>
                  
                </form>
              </div>
            </div>
        );
    }
}
    
if (document.getElementById('adminProductList')) {
    ReactDOM.render(<AdminProductList />, document.getElementById('adminProductList'));
}