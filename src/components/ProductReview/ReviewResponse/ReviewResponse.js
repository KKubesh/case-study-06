import React, {Component} from 'react';
import ReviewCatagories from './ReviewCategories';
import ReviewFeedback from './ReviewFeedback';

class ReviewResponse extends Component {

    render () {
        return (
            <div className="reviews" data-testid="review-response">
                <ReviewCatagories/>   
                <hr width="92%"/>
                <ReviewFeedback/> 
            </div>
        )
    }
}

export default ReviewResponse;