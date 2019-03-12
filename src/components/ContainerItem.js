import React, {Component} from 'react';
import ProductView from './ProductView/ProductView';
import ProductReview from './ProductReview/ProductReview';
import ProductDetails from './ProductDetails/ProductDetails';

class ContainerItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDesktop: false,
        };

        this.updateOrder = this.updateOrder.bind(this);
    }

    componentDidMount() {
        this.updateOrder();
        window.addEventListener("resize", this.updateOrder);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateOrder);
    }
    
    updateOrder() {
        this.setState({ isDesktop: window.innerWidth > 1080 });
    }
    
    render () {
        const isDesktop = this.state.isDesktop;

        return (
        <div className="page-styling">
            {isDesktop ? (
                <div className="container-order">
                    <div>
                        <ProductView/>
                        <ProductReview/>
                    </div>
                    <ProductDetails/>
                </div>
            ) : (
                <div>
                    <ProductView/>
                    <ProductDetails/>
                    <ProductReview/>
                </div>
            )}
        </div>
        )
    }
}

export default ContainerItem;