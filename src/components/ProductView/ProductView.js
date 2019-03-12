import React, {Component} from 'react';
import ProductCarousel from './ProductCarousel';
import { connect } from 'react-redux';
import enlarge from '../../images/enlarge.png';


const mapStateToProps = state => {
    return {
        title: state.productView.title,
        primaryImage: state.productView.primaryImage,
    }
}


class ProductView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDesktop: false,
        };

        this.updateEnlargeViewIcon = this.updateEnlargeViewIcon.bind(this);
    }

    componentDidMount() {
        this.updateEnlargeViewIcon();
        window.addEventListener("resize", this.updateEnlargeViewIcon);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateEnlargeViewIcon);
    }
    
    updateEnlargeViewIcon() {
        this.setState({ isDesktop: window.innerWidth > 1080 });
    }

    render () {    
        const isDesktop = this.state.isDesktop;    
        return (
        <div className="product-view" data-testid="product-view">
            <h1 data-testid="product-title">{this.props.title}</h1>
            <img src={this.props.primaryImage} className="main-image" alt={this.props.title+" primary image"} data-testid="product-image"></img>
            {isDesktop ? (<div className="enlarge-view">
                <img src={enlarge} alt="enlarge view"/>
            </div>) : (<div className="enlarge-view"></div>)}
            <ProductCarousel />
        </div>
        )
    }
}

export default connect(mapStateToProps)(ProductView);