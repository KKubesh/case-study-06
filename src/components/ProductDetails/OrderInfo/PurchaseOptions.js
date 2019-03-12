import React, {Component} from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        price: state.productDetails.price,
        purchaseChannelCode: state.productDetails.purchaseChannelCode
    }
}

class PurchaseOptions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPickUpInStore: false,
            isAvailableOnline: false
        };
        this.updateButtons = this.updateButtons.bind(this);
    }

    componentWillMount() {
        this.updateButtons();
    }
    
    updateButtons() {
        if (this.props.purchaseChannelCode  === "0" || this.props.purchaseChannelCode  === "2"){
            this.setState({ isPickUpInStore: true });
        }
        if (this.props.purchaseChannelCode  === "0" || this.props.purchaseChannelCode  === "1"){
            this.setState({ isAvailableOnline: true });
        }
    }



    render () {
        return (
            <div data-testid="purchase-options">
                <div className="row-flex">
                    <div className={this.state.isPickUpInStore ? '' : 'hidden'}>
                        <button className="button-black">Pick Up In Store</button>
                        <h6>find in a store</h6>
                    </div>
                    <div className={this.state.isAvailableOnline ? '' : 'hidden'}>
                        <button className="button-red">Add to cart</button>
                    </div>
                </div>
                <div className="row-flex return-margin">
                    <div className="returns">returns</div>
                    <div><h5>This item must be returned within 30 days of the ship date. See return policy for details. Prices, promotions, styles and availability may vary by store and online.</h5></div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(PurchaseOptions);