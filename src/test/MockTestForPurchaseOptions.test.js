import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import MockForTestPurchaseOptions from '../components/mock_test_components/MockForTestPurchaseOptions';

// TEST MOCKED UP TO BE RUN WITHOUT REDUX
// SEE ProductView.test.js FOR NOTES

afterEach(cleanup);

test('<MockForTestPurchaseOptions /> confirming on load onclick events', () => {
    const { getByTestId } = render(<MockForTestPurchaseOptions />);
    expect(getByTestId('purchase-options')).toBeTruthy();
})

// NEED TO LOOK FURTHER INTO UNDERSTANDING HOW TO CHANGE OR MOCK STATE TO FINISH TEST

// const mockPurchaseChannel = ***STATE OF PURCHASECHANNELCODE***

// test('<MockForTestPurchaseOptions /> confirm state of isPickUpInStore and isAvailableOnline', () => {
//     CHANGE mockPurchaseChannel = 0
//     EXPECT isPickUpInStore TO RETURN true
//     EXPECT isAvailableOnline TO RETURN true
//     CHANGE mockPurchaseChannel = 1
//     EXPECT isPickUpInStore TO RETURN false
//     EXPECT isAvailableOnline TO RETURN true
//     CHANGE mockPurchaseChannel = 2
//     EXPECT isPickUpInStore TO RETURN false
//     EXPECT isAvailableOnline TO RETURN true
// })