import FakeShopData from '../../assets/fakeData';
const INITIAL_STATE = {
  collections: FakeShopData,
};
const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default shopReducer;
