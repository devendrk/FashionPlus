import React from "react";
import { connect } from "react-redux";

import CollectionPreview from "../collection-preview/collection-preview.component";
import { selectCollectionForPreview } from "../../redux/shop/shop.selector";

import "./collection-overview.scss";

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => {
        return <CollectionPreview key={id} {...otherCollectionProps} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  collections: selectCollectionForPreview(state),
});

export default connect(mapStateToProps)(CollectionOverview);
