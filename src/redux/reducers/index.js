import { combineReducers } from 'redux';
import productView from './productViewReducer';
import productDetails from './productDetailsReducer';

const store = combineReducers({
    productView,
    productDetails
})

export default store;