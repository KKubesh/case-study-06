import React, {Component} from 'react';

class SecondaryOptions extends Component {
    render () {
        return (
            <div className="row-flex addto-margin" data-testid="secondary-options">
                <button className="button-grey" data-testid="add-to-registry">Add to registry</button>
                <button className="button-grey" data-testid="add-to-list">Add to list</button>
                <button className="button-grey" data-testid="share">share</button>
            </div>
        )
    }
}

export default SecondaryOptions;