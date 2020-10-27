import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import CollectionPageContainer from '../collection/collection-page.container';

class ShopPage extends React.Component {
  componentDidMount() {
    this.props.updateCollections();
  }

  componentWillUnmount() {}

  render() {
    const { match } = this.props;
    return (
      <div className='shop-page'>
        <Route
          exact
          path={match.path}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={match.path + '/:collectionId'}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapStateToPropd = createStructuredSelector({
  isCollectionsLoaded: selectIsCollectionsLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  updateCollections: () => dispatch(fetchCollectionsStart()),
});

export default connect(mapStateToPropd, mapDispatchToProps)(ShopPage);
