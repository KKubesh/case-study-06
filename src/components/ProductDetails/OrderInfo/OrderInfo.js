import React, {Component} from 'react';
import Quantity from './Quantity';
import PurchaseOptions from './PurchaseOptions';
import SecondaryOptions from './SecondaryOptions';

class OrderInfo extends Component {
    render () {
        return (
            <div data-testid="order-info">
                <Quantity data-testid="quantity"/>
                <PurchaseOptions data-testid="purchase-options"/>
                <SecondaryOptions data-testid="secondary-options"/>
            </div>
        )
    }
}

export default OrderInfo;