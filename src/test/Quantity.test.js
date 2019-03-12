import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Quantity from '../components/ProductDetails/OrderInfo/Quantity';

afterEach(cleanup);

test('<Quantity />', () => {
    const { getByTestId, container } = render(<Quantity/>);
    expect(getByTestId('quantity')).toBeTruthy();
    expect(getByTestId('quantity').textContent).toBe("quantity:1");

    expect(container.firstChild).toMatchSnapshot();
});