import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header/index';
import Footer from './Footer/index';

const Layout =
  ({ children, component }) => (
    <div className="App_Layout">
      <Header />
      <div>
        { children || component || 'No `children` or `component` property supplied.' }
      </div>
      <Footer />
    </div>
  );

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

Layout.defaultProps = {
  children: '',
  component: '',
};

export default Layout;
