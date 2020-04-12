import { createSelector } from "reselect";

const selectShop = (state) => {
  return state.shop;
};

export const selectCollections = createSelector([selectShop], (shop) => {
  console.log("shop in selector", shop);
  return shop.collections;
});
