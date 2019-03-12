import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Deals from '../components/ProductDetails/Deals';

afterEach(cleanup);

test('<Deals />', () => {
    const { getByTestId, container } = render(<Deals/>);
    expect(getByTestId('deals').textContent).toBe(" spend $50, ship free $25 gift card with purchase of a select Ninja Blender");
    expect(container.firstChild).toMatchSnapshot();
});