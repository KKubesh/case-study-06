import React, {Component} from 'react';

// MOCKED UP TO BE RUN WITH MOCK TEST
// SEE ProductView.test.js FOR NOTES

class MockForTestPurchaseOptions extends Component {
    state = {
        isPickUpInStore: false,
        isAvailableOnline: false,
        price: "222.22",
        purchaseChannelCode: "0"
    };    

    componentWillMount() {
        this.updateButtons();
    }
    
    updateButtons() {
        if (this.state.purchaseChannelCode  === "0" || this.state.purchaseChannelCode  === "2"){
            this.setState({ isPickUpInStore: true });
        }
        if (this.state.purchaseChannelCode  === "0" || this.state.purchaseChannelCode  === "1"){
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

export default MockForTestPurchaseOptions;