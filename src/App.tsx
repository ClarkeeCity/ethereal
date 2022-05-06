import { useEffect } from '@storybook/addons';
import * as React from 'react';
import ReactDOM from 'react-dom';

import { TitleBar } from './stories/TitleBar/TitleBar';

const App = () => {
  // // If the OS type has not been saved, fetch it.
  // const setOSDispatch = useDispatch();
  // setOSDispatch(setOS({fetchOSType}));

  return (
    <TitleBar />
  );
}

export default App;
