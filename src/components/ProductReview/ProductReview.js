import React, {Component} from 'react';
import TotalReview from './TotalReview';
import ReviewResponse from './ReviewResponse/ReviewResponse';

class ProductReview extends Component {

    render () {
        return (
        <div className="product-review" data-testid="product-review">
            <TotalReview/>
            <ReviewResponse/>
        </div>
        )
    }
}

export default ProductReview;