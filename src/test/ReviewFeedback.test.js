import React from 'react';
import { render, cleanup } from 'react-testing-library';
import ReviewFeedback from '../components/ProductReview/ReviewResponse/ReviewFeedback';

afterEach(cleanup);

test('<ReviewFeedback />', () => {
    const { getByTestId, container } = render(<ReviewFeedback/>);
    expect(getByTestId('review-feedback')).toBeTruthy();
    expect(getByTestId('review')).toBeTruthy();
    expect(getByTestId('reviewer')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
});