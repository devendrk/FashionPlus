import React from "react";
import { connect } from "react-redux";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { selectCollections } from "../../redux/shop/shop.selector";

const ShopePage = ({ collections }) => {
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => {
        return <CollectionPreview key={id} {...otherCollectionProps} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  collections: selectCollections(state),
});

export default connect(mapStateToProps)(ShopePage);
