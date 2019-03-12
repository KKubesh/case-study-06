import React from 'react';
import { render, cleanup } from 'react-testing-library';
import ReviewCatagories from '../components/ProductReview/ReviewResponse/ReviewCategories';

afterEach(cleanup);

test('<ReviewCatagories />', () => {
    const { getByTestId, container } = render(<ReviewCatagories/>);
    expect(getByTestId('categories')).toBeTruthy();
    expect(getByTestId('categories-review')).toBeTruthy();
    expect(getByTestId('categories-pro').textContent).toBe('PRO');
    expect(getByTestId('categories-con').textContent).toBe('CON');
    expect(getByTestId('categories-pro-text').textContent).toBe('most helpful 4-5 star review');
    expect(getByTestId('categories-con-text').textContent).toBe('most helpful 1-2 star review');
    
    expect(container.firstChild).toMatchSnapshot();
});