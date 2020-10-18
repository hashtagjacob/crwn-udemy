import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import Wrapped from '../../components/testing-ficzers/wrapped.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import {
  convertCollectionsToMap,
  firestore,
} from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';
import CollectionPage from '../collection/collection-page.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  state = {
    isLoading: true,
  };

  componentDidMount() {
    const collectionRef = firestore.collection('collections');
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        this.props.updateCollections(convertCollectionsToMap(snapshot));
        this.setState({ isLoading: false });
      }
    );
  }

  componentWillUnmount() {
    this.unsubscribeFromSnapshot();
  }

  render() {
    const { match } = this.props;
    const { isLoading } = this.state;
    return (
      <div className='shop-page'>
        <Route
          exact
          path={match.path}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />
          )}
        />
        <Route
          path={match.path + '/:collectionId'}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={isLoading} {...props} />
          )}
        />
        <Wrapped />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collections) => dispatch(updateCollections(collections)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
