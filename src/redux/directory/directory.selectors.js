const { createSelector } = require('reselect');

const selectDirectory = (state) => state.directory;

export const selectSections = createSelector(
  [selectDirectory],
  (directory) => directory.sections
);
