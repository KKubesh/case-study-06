import React, {Component} from 'react';

class ReviewCatagories extends Component {

    render () {
        return (
            <div className="row-flex" data-testid="categories">
                <div className="categories-review" data-testid="categories-review">
                    <h3 data-testid="categories-pro">PRO</h3>
                    <h4 data-testid="categories-pro-text">most helpful 4-5 star review</h4>
                </div>
                <div className="categories-review" data-testid="categories-review">
                    <h3 data-testid="categories-con">CON</h3>
                    <h4 data-testid="categories-con-text">most helpful 1-2 star review</h4>
                </div>
            </div>   
        )
    }
}

export default ReviewCatagories;