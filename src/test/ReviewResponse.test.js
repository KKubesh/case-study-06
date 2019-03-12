import React from 'react';
import { render, cleanup } from 'react-testing-library';
import ReviewResponse from '../components/ProductReview/ReviewResponse/ReviewResponse';

afterEach(cleanup);

test('<ReviewResponse />', () => {
    const { getByTestId, container } = render(<ReviewResponse/>);
    expect(getByTestId('review-response')).toBeTruthy();
    expect(getByTestId('categories')).toBeTruthy();
    expect(getByTestId('review-feedback')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
});