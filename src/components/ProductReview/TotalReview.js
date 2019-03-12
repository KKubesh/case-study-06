import React, {Component} from 'react';
import redStar from '../../images/red-star.png';

class TotalReview extends Component {

    render () {
        return (
            <div className="row-flex" data-testid="total-review">
                <div className="stars-overall" data-testid="star-overall">
                    <img src={redStar} alt="postive star 1"/><img src={redStar} alt="postive star 2"/><img src={redStar} alt="postive star 3"/><img src={redStar} alt="postive star 4"/><img src={redStar} alt="postive star 5"/> overall
                </div>
                <div className="total-reviews"  data-testid="total-reviews">
                    view all 14 reviews
                </div>
            </div>
        )
    }
}

export default TotalReview;