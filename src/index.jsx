import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Header from './Header.jsx'
import Content from './Content.jsx';

render( <AppContainer><Header/></AppContainer>, document.querySelector("#header"));

if (module && module.hot) {
  module.hot.accept('./Header.jsx', () => {
    const Header = require('./Header.jsx').default;
    render(
      <AppContainer>
        <Header/>
      </AppContainer>,
      document.querySelector("#header")
    );
  });
}

render( <AppContainer><Content/></AppContainer>, document.querySelector("#content"));

if (module && module.hot) {
  module.hot.accept('./Content.jsx', () => {
    const Content = require('./Content.jsx').default;
    render(
      <AppContainer>
        <Content/>
      </AppContainer>,
      document.querySelector("#content")
    );
  });
}
