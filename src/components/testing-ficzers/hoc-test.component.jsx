import React from 'react';

const HocTest = (WrappedComponent) => (props) => {
  const test = (textToPrint) => {
    console.log(textToPrint);
  };
  return <WrappedComponent test={test} {...props} />;
};

export default HocTest;
