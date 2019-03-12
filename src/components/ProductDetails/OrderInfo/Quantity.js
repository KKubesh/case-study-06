import React, {Component} from 'react';
import plus from '../../../images/plus.png';
import minus from '../../../images/minus.png';


class Quantity extends Component {
    render () {
        return (
            <div className="quantity" data-testid="quantity">
                quantity:
                <div className="quantity-buttons">
                    <img src={minus} alt="remove item"/>
                    1
                    <img src={plus} alt="add item"/>
                </div>
            </div>
                
        )
    }
}

export default Quantity;