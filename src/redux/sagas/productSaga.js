import { takeEvery, put } from 'redux-saga/effects';
import { callGetProduct } from '../request/productRequest';

function* productSaga() {
    console.log('product saga loaded');
    yield takeEvery('GET_PRODUCT', getProductSaga)
}


function* getProductSaga() {
    try {
        const getProduct = yield callGetProduct();
        yield put({
            type: 'SET_PRODUCT',
            payload: getProduct
        })
    } catch (err) {
        yield put({
            type: 'SET_PRODUCT_FAILED',
            payload: err.data
        })
    }
}

export default productSaga;