import React, {Component} from 'react';
import MockForTestProductCarousel from './MockForTestProductCarousel';
import enlarge from '../../images/enlarge.png';

// MOCKED UP TO BE RUN WITH MOCK TEST
// SEE ProductView.test.js FOR NOTES

class MockForTestProductView extends Component {
    state = {
        isDesktop: false,
        title: "Mock Title",
        primaryImage: "http://target.scene7.com/is/image/Target/14263758"
    };

    updateEnlargeViewIcon = this.updateEnlargeViewIcon.bind(this);

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
            <h1 data-testid="product-title">{this.state.title}</h1>
            <img src={this.state.primaryImage} className="main-image" alt={this.state.title+" primary image"} data-testid="product-image"></img>
            {isDesktop ? (<div className="enlarge-view">
                <img src={enlarge} alt="enlarge view"/>
            </div>) : (<div className="enlarge-view"></div>)}
            <MockForTestProductCarousel />
        </div>
        )
    }
}

export default MockForTestProductView;