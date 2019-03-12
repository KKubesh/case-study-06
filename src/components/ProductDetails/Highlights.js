import React, {Component} from 'react';

class Highlights extends Component {
    state = {
        details: [
            "Wattage Output: 1100 Watts",
            "Number of Speeds: 3",
            "Capacity (volume): 72.0 Oz",
            "Appliance Capabilities: Blends",
            "Includes: Travel Lid",
            "Material: Plastic",
            "Finish: Painted",
            "Metal Finish: Chrome",
            "Safety and Security Features: Non-Slip Base",
            "Care and Cleaning: Easy-To-Clean, Dishwasher Safe Parts"
        ]
    }
    render () {
        let detailItems = this.state.details.map(item => {
            return (
                <li><span>{item}</span></li>
            )
        })
        return (
            <div className="product-highlights" data-testid="product-highlights">
                <h2 data-testid="highlights-title">product highlights</h2>
                <ul data-testid="highlights-details">
                    {detailItems}
                </ul>
            </div>
        )
    }
}

export default Highlights;