import React from 'react';
import { render, cleanup } from 'react-testing-library';
import TotalReview from '../components/ProductReview/TotalReview';

afterEach(cleanup);

test('<TotalReview />', () => {
    const { getByTestId, container } = render(<TotalReview/>);
    expect(getByTestId('total-review')).toBeTruthy();
    expect(getByTestId('star-overall')).toBeTruthy();
    expect(getByTestId('total-reviews')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
});