import SHOP_DATA from './shop.data';

const INITIAL_STATE = {
    
    collections: SHOP_DATA
};

const shopReducer = (state = INITIAL_STATE, action) => {
    console.log('tets',SHOP_DATA)
    switch(action.type){
        default:
            return state;
    }
}

export default shopReducer;