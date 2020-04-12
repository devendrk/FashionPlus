import { SHOP_DATA } from "./shopData";

const INITIAL_STATE = {
  collections: SHOP_DATA,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      console.log("state in reducer", state);
      return state;
  }
};

export default shopReducer;
