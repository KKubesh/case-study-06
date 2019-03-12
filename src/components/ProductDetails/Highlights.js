import React, {Component} from 'react';

class Highlights extends Component {
    render () {
        return (
            <div className="product-highlights" data-testid="product-highlights">
                <h2 data-testid="highlights-title">product highlights</h2>
                <ul data-testid="highlights-details">
                    <li>Wattage Output: 1100 Watts</li>
                    <li>Number of Speeds: 3</li>
                    <li>Capacity (volume): 72.0 Oz</li>
                    <li>Appliance Capabilities: Blends</li>
                    <li>Includes: Travel Lid</li>
                    <li>Material: Plastic</li>
                    <li>Finish: Painted</li>
                    <li>Metal Finish: Chrome</li>
                    <li>Safety and Security Features: Non-Slip Base</li>
                    <li>Care and Cleaning: Easy-To-Clean, Dishwasher Safe Parts</li>
                </ul>
            </div>
        )
    }
}

export default Highlights;