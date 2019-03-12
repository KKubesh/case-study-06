import React, {Component} from 'react';
import Price from './Price';
import Deals from './Deals';
import OrderInfo from './OrderInfo/OrderInfo';
import Highlights from './Highlights';

class ProductDetails extends Component {
    render () {
        return (
        <div className="details-container" data-testid="product-review">
            <Price data-testid="pr-price"/>
            <Deals data-testid="pr-deals"/>
            <OrderInfo data-testid="pr-order-info"/>
            <Highlights data-testid="pr-highlights"/>
        </div>
        )
    }
}

export default ProductDetails;