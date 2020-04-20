import { shopTypes } from "./shop.types";

export const updateCollection = (collectionsMap) => ({
  type: shopTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});
