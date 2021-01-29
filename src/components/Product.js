import React, { Component } from 'react';
class Product extends Component {
    addCart = ()=>{
        alert(this.props.name);
    }
    render() {
        return (
            <div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <img className="img-responsive" alt="" src={this.props.image} />
                    <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <h3>{this.props.name}</h3>
                            <h4>{this.props.price} VND</h4>
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 mt-5" >
                            <button type="button" className="btn btn-primary" onClick={this.addCart}>Mua ngay</button>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default Product;
