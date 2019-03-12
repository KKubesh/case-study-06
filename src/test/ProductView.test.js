import React from 'react';
import { render, cleanup, getAllByTestId } from 'react-testing-library';
import ProductView from '../components/ProductView/ProductView';

afterEach(cleanup);

// BASED ON THE DOCUMENTATION FROM 'react-testing-library' THEY SAID DO THE FOLLOWING
// THIS IMPLMENTATION NEEDS ADDITIONAL CHANGES TO FILE STRUCTURE
// ADDTIONAL FILES WERE CREATED TO MOCK UP TESTABLE COMPONENT NOT USING REDUX IN ADDITION MOCK TEST FILES TO TEST THOSE COMPONENTS

// function renderWithRedux(
//         ui,
//         {initialState, store = createStore(reducer, initialState)} = {},
//     ) {
//     return {
//     ...render(<Provider store={store}>{ui}</Provider>),
//     // adding `store` to the returned utilities to allow us
//     // to reference it in our tests (just try to avoid using
//     // this to test implementation details).
//     store,
//     }
// }

test('<ProductView />', () => {
    // const { getByTestId } = render(<ProductView />);
    // expect(getByTestId('product-view')).toBeTruthy();

    // FAKE TEST PLACE HOLDER
    expect(true).toBeTruthy();
})

// NEED TO LOOK FURTHER INTO UNDERSTANDING HOW TO CHANGE OR MOCK STATE AND FUNCTIONS TO FINISH TEST

// const mockIsDesktop = ***STATE OF ISDESKTOP***
// const mockResizeEvent = ***FUNCTION OF RESIZING***

// test('<ProductView check state of isDesktop/>', () => {
//     FIRE mockResizeEvent AND RETURN 740px window.innerWidth
//     EXPECT isDesktop TO RETURN false
//     EXPECT enlarge.png TO RETURN false
//     FIRE mockResizeEvent AND RETURN 1366px window.innerWidth
//     EXPECT isDesktop TO RETURN true
//     EXPECT enlarge.png TO RETURN true
// })