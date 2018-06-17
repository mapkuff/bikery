import React from 'react';
import { HashLoader } from 'react-spinners';

import './Loader.scss';

// TODO use react measure
const Loader =
  () => (
    <div className="Loader">
      <HashLoader color="#DD000B" />
    </div>
  );

export default Loader;
