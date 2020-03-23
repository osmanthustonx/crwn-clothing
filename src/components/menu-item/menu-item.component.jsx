import React from 'react';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({
  title, imageUrl, size, history, linkUrl, match,
}) => (
  <div
    role="link"
    tabIndex={0}
    className={`${size} menu-item`}
    onClick={() => { history.push(`${match.url}${linkUrl}`); }}
    onKeyPress={() => { history.push(`${match.url}${linkUrl}`); }}
  >
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="content">
      <div className="title">{title.toUpperCase()}</div>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  size: PropTypes.string,
  linkUrl: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  match: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
};

MenuItem.defaultProps = {
  size: undefined,
};

export default withRouter(MenuItem);
