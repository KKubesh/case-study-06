import ItemData from '../../data/item-data.json';

const dataObject = ItemData.CatalogEntryView[0]
const priceData = dataObject.Offers[0].OfferPrice[0].priceValue
const channelCode = dataObject.purchasingChannelCode

function dollarAmount (priceData) {
    return (priceData / 100).toFixed(2);
}

let usDollarAmount = dollarAmount(priceData);


const initialState = {
    price: usDollarAmount,
    purchaseChannelCode: channelCode
}

const productDetails = (state = [], action) => {
    console.log('product-data', action);
    switch (action.type){
        case 'SET_PRODUCT':
            return action.payload;
        default: 
            return state;
    }
}

export default productDetails