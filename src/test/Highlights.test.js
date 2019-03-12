import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Highlights from '../components/ProductDetails/Highlights';

afterEach(cleanup);

test('<Highlights />', () => {
    const { queryByTestId, container } = render(<Highlights/>);
    expect(queryByTestId('highlights-title').textContent).toBe('product highlights');
    expect(queryByTestId('highlights-title')).toBeTruthy();
    expect(queryByTestId('highlights-details')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
});