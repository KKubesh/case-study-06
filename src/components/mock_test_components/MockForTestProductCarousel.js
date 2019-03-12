import React, {Component} from 'react';
import rightArrow from '../../images/right-arrow.png';
import leftArrow from '../../images/left-arrow.png';

// MOCKED UP TO BE RUN WITH MOCK TEST
// SEE ProductView.test.js FOR NOTES

class MockForTestProductCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrowNext: true,
            arrowPrev: false,
            title: "Mock Title",
            images: [
                "http://target.scene7.com/is/image/Target/14263758",
                "https://target.scene7.com/is/image/Target/GUEST_83705133-fb5e-4357-be37-94ae1392b915", 
                "https://target.scene7.com/is/image/Target/GUEST_40a6190c-d9e3-4ddf-b06d-6db6a13927f3", 
                "https://target.scene7.com/is/image/Target/GUEST_48a32ee0-bfbe-4405-a013-2af22605e5e4",
                "https://target.scene7.com/is/image/Target/GUEST_5ed54625-2574-4f4b-9b14-da6e1a089a6c",
                "https://target.scene7.com/is/image/Target/GUEST_8b7c9ba9-7860-422e-ac5b-ae72f903bac7",
                "https://target.scene7.com/is/image/Target/GUEST_a73f36d1-efa4-483d-81e5-bb8c8d7eacd0"

            ],
            carouselLocation: 0
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
        if (newIndex >= this.state.images.length-1){
            this.setState({ arrowNext: false });
        }
        if (newIndex < this.state.images.length-1){
            this.setState({ arrowNext: true });
        }
    }

    nextImage = () => {
        const newIndex = this.state.carouselLocation + 1
        this.setState({
            carouselLocation: newIndex
        })
        this.updateButtons(newIndex);
    }

    prevImage = () => {
        const newIndex = this.state.carouselLocation - 1
        this.setState({
            carouselLocation: newIndex
        })
        this.updateButtons(newIndex);
    }

    render () {
        const { prevImage, nextImage } = this.props;

        let altImages = this.state.images.map(altPhoto => {
            let imgKey = this.state.images.indexOf(altPhoto)+1;
            return (
                <img id={imgKey} src={altPhoto.image} key={imgKey} alt={this.state.title+" image0"+imgKey}></img>
            )
        })

        return (
            <div className="carousel-container">
                <div className="carousel-arrows">
                    <img src={leftArrow} onClick={this.state.arrowPrev ? prevImage : null} alt="previous arrow" data-testid="prev-arrow"/>
                </div>
                <div className="carousel-images">
                    <div className="carousel-wrapper" style={{'transform': `translateX(-${this.state.carouselLocation*(100/this.state.images.length)}%)`}}>
                        {altImages}
                    </div>
                </div>
                <div className="carousel-arrows">
                    <img src={rightArrow} onClick={this.state.arrowNext ? nextImage : null} alt="next arrow" data-testid="next-arrow"/>
                </div>
            </div>
        )
    }
}

export default MockForTestProductCarousel;