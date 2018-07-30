import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import alpha_30x40cm from '../Image/Print/alphaA_30x40cm_unsigned.png';


export default class Products extends Component {
    render() {
        return (
            <div className="container">
                <div className="card product-card justify-content-center">
                    <div className="row">
                        <div className="col">
                            <div className="card-block">
                                <img className="card-img-top" src={alpha_30x40cm} alt="Product Image"/>
                                    <div className="card-body">
                                        <div className="card-block px-2">
                                            <h3 className="card-title">Alpha A</h3>
                                            <p className="card-text">Our favorite letters A, M & X in print.</p>
                                            <h6 className="product-title">Paper</h6>
                                                <p className="product-paper-type">Amber Graphic | 200 gsm</p>
                                            <h6 className="product-title">Print Type</h6>
                                                <p className="product-print-type">Hybrid Print Technology</p>
                                            <div className="btn-group btn-block" role="group">
                                            <button id="btn-product-size" type="submit" className="btn btn-block dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Size
                                            </button>
                                            <div className="dropdown-menu btn-block" aria-labelledby="btn-product-size">
                                                <a className="dropdown-item" href="#">30x40cm</a>
                                                <a className="dropdown-item" href="#">50x70cm</a>
                                            </div>
                                        </div>
                                        <a href="#" type="submit" className="btn btn-block btn-primary buy-btn">Add to <i class="fas fa-shopping-bag"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
        );
    }
}

if (document.getElementById('products')) {
    ReactDOM.render(<Products />, document.getElementById('products'));
}
