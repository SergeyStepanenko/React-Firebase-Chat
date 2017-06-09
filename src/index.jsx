import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Chat from './components/chat.jsx';

render( <AppContainer><Chat/></AppContainer>, document.querySelector("#content"));

if (module && module.hot) {
  module.hot.accept('./components/chat.jsx', () => {
    const App = require('./components/chat.jsx').default;
    render(
      <AppContainer>
        <App/>
      </AppContainer>,
      document.querySelector("#content")
    );
  });
}
