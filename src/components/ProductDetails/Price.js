import React, {Component} from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        price: state.productDetails.price,
    }
}

class Price extends Component {

    componentDidMount() {
        this.props.dispatch({
            type: 'GET_PRODUCT'
        })
    }
    
    render () {
        console.log("LOGGING THIS PROPS", this.props);
        const price = this.props.price
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

export default connect(mapStateToProps)(Price);