import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectIsFetching } from '../../redux/shop/shop.selectors';
import CollectionPage from '../collection/collection-page.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  componentDidMount() {
    this.props.updateCollections();
  }

  componentWillUnmount() {}

  render() {
    const { match, isFetching } = this.props;
    return (
      <div className='shop-page'>
        <Route
          exact
          path={match.path}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={isFetching} {...props} />
          )}
        />
        <Route
          path={match.path + '/:collectionId'}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={isFetching} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapStateToPropd = createStructuredSelector({
  isFetching: selectIsFetching,
});

const mapDispatchToProps = (dispatch) => ({
  updateCollections: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToPropd, mapDispatchToProps)(ShopPage);
