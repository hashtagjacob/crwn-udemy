import React from 'react';
import FakeShopData from '../../assets/fakeData';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
  constructor() {
    super();
    this.state = {
      collections: FakeShopData,
    };
  }

  render() {
    return (
      <div className='shop-page'>
        {this.state.collections.map((collection) => (
          <CollectionPreview
            key={collection.id}
            title={collection.title}
            items={collection.items}
          />
        ))}
      </div>
    );
  }
}

export default ShopPage;
