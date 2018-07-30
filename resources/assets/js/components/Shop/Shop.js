import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "./styles.css";

export default class Shop extends Component {
    render() {
        return (
            <div className="container">
                <div className="row first-row-product">
                    <div className="col-lg-4 col-md-4 col-sm-4 product-img">
                        <a href="#">
                            <img src="http://fakeimg.pl/365x365/" className="product-thumbnail"/>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 product-img">
                        <a href="#">
                            <img src="http://fakeimg.pl/365x365/" className="product-thumbnail"/>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 product-img">
                        <a href="#">
                            <img src="http://fakeimg.pl/365x365/" className="product-thumbnail"/>
                        </a>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4 product-img">
                        <a href="#">
                            <img src="http://fakeimg.pl/365x365/" className="product-thumbnail"/>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 product-img">
                        <a href="#">
                            <img src="http://fakeimg.pl/365x365/" className="product-thumbnail"/>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 product-img">
                        <a href="#">
                            <img src="http://fakeimg.pl/365x365/" className="product-thumbnail"/>
                        </a>
                </div>
             </div>
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 product-img">
                    <a href="#">
                        <img src="http://fakeimg.pl/365x365/" className="product-thumbnail"/>
                    </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 product-img">
                    <a href="#">
                        <img src="http://fakeimg.pl/365x365/" className="product-thumbnail"/>
                    </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 product-img">
                    <a href="#">
                        <img src="http://fakeimg.pl/365x365/" className="product-thumbnail"/>
                    </a>
                </div>
             </div>
         </div>
        );
    }
}

if (document.getElementById('shop')) {
    ReactDOM.render(<Shop />, document.getElementById('shop'));
}
