import React, {Component} from 'react';

// MOCKED UP TO BE RUN WITH MOCK TEST
// SEE ProductView.test.js FOR NOTES

class MockForTestPrice extends Component {
    state = {
        price: "222.22"
    };
    
    render () {
        const price = this.state.price
        return (
            <div>
                <div className="price" data-testid="price">
                    <span>${price} <detail-text>online price</detail-text></span>
                </div>
                <hr/>
            </div>
        )
    }
}

export default MockForTestPrice;