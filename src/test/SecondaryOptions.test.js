import React from 'react';
import { render, cleanup } from 'react-testing-library';
import SecondaryOptions from '../components/ProductDetails/OrderInfo/SecondaryOptions';

afterEach(cleanup);

test('<SecondaryOptions />', () => {
    const { getByTestId, container } = render(<SecondaryOptions/>);
    expect(getByTestId('add-to-registry').textContent).toBe("Add to registry");
    expect(getByTestId('add-to-list').textContent).toBe("Add to list");
    expect(getByTestId('share').textContent).toBe("share");
    expect(container.firstChild).toMatchSnapshot();
});