import React from 'react';
import { render, cleanup } from 'react-testing-library';
import ProductReview from '../components/ProductReview/ProductReview';

afterEach(cleanup);

test('<ProductReview />', () => {
    const { getByTestId, container } = render(<ProductReview/>);
    expect(getByTestId('categories')).toBeTruthy();
    expect(getByTestId('total-review')).toBeTruthy();
    expect(getByTestId('review-response')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
});