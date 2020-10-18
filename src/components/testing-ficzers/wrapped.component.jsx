import React from 'react';
import HocTest from './hoc-test.component';

const Wrapped = ({ test }) => (
  <div>
    <h1>Im wrapped?</h1>
    <button onClick={() => test('kmao')}>click me bro</button>
  </div>
);

export default HocTest(Wrapped);
