import React, {Component} from 'react';
import redStar from '../../../images/red-star.png';
import greyStar from '../../../images/grey-star.png';

class ReviewFeedback extends Component {

    render () {
        return (
            <div className="row-flex" data-testid="review-feedback">
                <div className="review" data-testid="review">
                    <div className="reviewer" data-testid="reviewer">
                        <img src={redStar} alt="postive star 1"/><img src={redStar} alt="postive star 2"/><img src={redStar} alt="postive star 3"/><img src={redStar} alt="postive star 4"/><img src={redStar} alt="postive star 5"/>
                    </div>
                    <h3>Fantastic Blender</h3>
                    This blender works amazingly, and blends within seconds.  The single serve cups also work really well for smoothies or protein shakes!
                    <br/>
                    <br/>
                    <a href="https://www.google.com/search?q=eric">Eric</a> April 18, 2013
                </div>
                <div className="review" data-testid="review">
                    <div className="reviewer" data-testid="reviewer">
                        <img src={redStar} alt="postive star 1"/><img src={greyStar} alt="negative star 1"/><img src={greyStar} alt="negative star 2"/><img src={greyStar} alt="negative star 3"/><img src={greyStar} alt="negative star 4"/>
                    </div>
                    <h3>Very unhappy</h3>
                    Less than 2 months after purchase it completely stopped working. First it wouldn't detect the pitcher when trying to blend a significant amount, a couple weeks later it wouldn't detect the single serve cup.
                    <br/>
                    <br/>
                    <a href="https://www.google.com/search?q=New+York">New York</a> March 11, 2013
                </div>
            </div>  
        )
    }
}

export default ReviewFeedback;