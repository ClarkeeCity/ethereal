import { useEffect } from '@storybook/addons';
import * as React from 'react';
import ReactDOM from 'react-dom';

import { TitleBar } from 'stories/TitleBar/TitleBar';
import { MediaBar } from 'stories/MediaBar/MediaBar';

const App = () => {
  return (
    <div>
      <TitleBar />
      <MediaBar />
    </div>
  );
}

export default App;
