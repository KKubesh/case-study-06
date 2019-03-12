import React, {Component} from 'react';
import { connect } from 'react-redux';
import rightArrow from '../../images/right-arrow.png';
import leftArrow from '../../images/left-arrow.png';

const mapStateToProps = state => {
    return {
        title: state.productView.title,
        images: state.productView.images,
        carouselLocation: state.productView.carouselLocation
    }
}

class ProductCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrowNext: true,
            arrowPrev: false
        };
        this.updateButtons = this.updateButtons.bind(this);
    }
    
    updateButtons(newIndex) {
        if (newIndex !== 0){
            this.setState({ arrowPrev: true });
        }
        if (newIndex === 0){
            this.setState({ arrowPrev: false });
        }
        if (newIndex >= this.props.images.length-1){
            this.setState({ arrowNext: false });
        }
        if (newIndex < this.props.images.length-1){
            this.setState({ arrowNext: true });
        }
    }

    nextImage = () => {
        const newIndex = this.props.carouselLocation + 1
        const newImage = this.props.images[newIndex]
        this.props.dispatch({
            type: 'NEXT_IMAGE',
            payload: {newIndex, newImage}
        })
        this.updateButtons(newIndex);
    }

    prevImage = () => {
        const newIndex = this.props.carouselLocation - 1
        const newImage = this.props.images[newIndex]
        this.props.dispatch({
            type: 'PREV_IMAGE',
            payload: {newIndex, newImage}
        })
        this.updateButtons(newIndex);
    }

    render () {
        
        let altImages = this.props.images.map(altPhoto => {
            let imgKey = this.props.images.indexOf(altPhoto)+1;
            return (
                <img id={imgKey} src={altPhoto.image} key={imgKey} alt={this.props.title+" image0"+imgKey}></img>
            )
        })

        return (
            <div className="carousel-container">
                <div className="carousel-arrows">
                    <img src={leftArrow} onClick={this.state.arrowPrev ? this.prevImage : null} alt="previous arrow" data-testid="prev-arrow"/>
                </div>
                <div className="carousel-images">
                    <div className="carousel-wrapper" style={{'transform': `translateX(-${this.props.carouselLocation*(100/this.props.images.length)}%)`}}>
                        {altImages}
                    </div>
                </div>
                <div className="carousel-arrows">
                    <img src={rightArrow} onClick={this.state.arrowNext ? this.nextImage : null} alt="next arrow" data-testid="next-arrow"/>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(ProductCarousel);