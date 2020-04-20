import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionOverview from "../../components/collection-overview/collection-overview";
import Collection from "../collection/collection.component";
import { updateCollection } from "../../redux/shop/shop.actions";
import {
  firestore,
  convertCollectionSnapShotToMap,
} from "../../firebase/firebase.utils";

class ShopePage extends React.Component {
  unsubscribeFromSnapShot = null;
  componentDidMount() {
    const { updateCollection } = this.props;
    // fetch collections from fire store
    const collectionRef = firestore.collection("collection");

    collectionRef.onSnapshot(async (snapShot) => {
      const collectionMap = convertCollectionSnapShotToMap(snapShot);
      updateCollection(collectionMap);
    });
  }
  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route path={`${match.path}/:collectionId`} component={Collection} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollection: (collectionMap) =>
    dispatch(updateCollection(collectionMap)),
});

export default connect(null, mapDispatchToProps)(ShopePage);
