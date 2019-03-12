import React, {Component} from 'react';
import tagIcon from '../../images/tag.png';

class Deals extends Component {
    render () {
        return (
            <div>
                <div className="deals" data-testid="deals">
                    <img src={tagIcon} alt="tag icon" /> spend $50, ship free<br/>
                    <img src={tagIcon} alt="tag icon" /> $25 gift card with purchase of a select Ninja Blender
                </div>
                <hr/>
            </div>
        )
    }
}

export default Deals;