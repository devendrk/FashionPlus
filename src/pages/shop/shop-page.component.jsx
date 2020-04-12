import React, { Component } from "react";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { SHOP_DATA } from "./shopData";

export default class ShopePage extends Component {
  state = {
    collections: SHOP_DATA
  };
  render() {
    const collections = this.state.collections;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => {
          return <CollectionPreview key={id} {...otherCollectionProps} />;
        })}
      </div>
    );
  }
}
