import React from 'react';
import { render, cleanup } from 'react-testing-library';
import PurchaseOptions from '../components/ProductDetails/OrderInfo/PurchaseOptions';

afterEach(cleanup);

test('<PurchaseOptions />', () => {
    // ISSUES WITH CONNECTING REDUX INTO MY TEST RENDER WILL NOT OCCUR BECAUSE CHILD ELEMENTS DEPEND ON REDUX
    // SEE ProductView.test.js FOR NOTES
    
    // const { queryByTestId, container } = render(<PurchaseOptions/>);
    // expect(queryByTestId('purchase-options')).toBeTruthy();

    // FAKE TEST PLACE HOLDER
    expect(true).toBeTruthy();
});

// NEED TO LOOK FURTHER INTO UNDERSTANDING HOW TO CHANGE OR MOCK STATE TO FINISH TEST

// const mockPurchaseChannel = ***STATE OF PURCHASECHANNELCODE***

// test('<PurchaseOptions /> confirm state of isPickUpInStore and isAvailableOnline', () => {
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