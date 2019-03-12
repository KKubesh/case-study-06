import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import MockForTestPrice from '../components/mock_test_components/MockForTestPrice';

// TEST MOCKED UP TO BE RUN WITHOUT REDUX
// SEE ProductView.test.js FOR NOTES

afterEach(cleanup);

const mockPrice = "222.22";

test('<MockForTestPrice /> confirming on load onclick events', () => {
    const { queryByTestId, getByTestId } = render(<MockForTestPrice price={mockPrice} />);
    expect(queryByTestId('price').textContent).toBe("$222.22 online price");
    expect(getByTestId('price')).toBeTruthy();
})