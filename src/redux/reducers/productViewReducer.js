import ItemData from '../../data/item-data.json';

const dataObject = ItemData.CatalogEntryView[0]
const title = dataObject.title;
const images = dataObject.Images[0].AlternateImages;
const primaryImage = dataObject.Images[0].PrimaryImage[0].image;
images.unshift({image: primaryImage})

const initialState = {
    title: title, 
    images: images,
    primaryImage: primaryImage,
    carouselLocation: 0
}

const productViewItems = (state = initialState, action) => {
    switch (action.type){
        case 'NEXT_IMAGE':
            return Object.assign({}, state, { carouselLocation: action.payload.newIndex, primaryImage:action.payload.newImage.image });
        case 'PREV_IMAGE':
            return Object.assign({}, state, { carouselLocation: action.payload.newIndex, primaryImage:action.payload.newImage.image });
        default: 
            return state;
    }
}

export default productViewItems