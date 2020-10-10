import React from 'react';
import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectCollections } from '../../redux/shop/shop.selectors';
import './collections-overview.styles.scss';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

const CollectionsOverview = ({ collections }) => (
  <div className='collections-overview'>
    {collections.map((collection) => (
      <CollectionPreview
        key={collection.id}
        title={collection.title}
        items={collection.items}
      />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(CollectionsOverview);
