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

const productDetailsItem = (state = initialState, action) => {
    switch (action.type){
        case 'ITEM_QUANTITY_CHANGE':
            // NOT CURRENTLY BEING USED
            return Object.assign({}, state, { });
        default: 
            return state;
    }
}

export default productDetailsItem