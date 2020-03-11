import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
} from './menu-item.styles';

const MenuItem = ({
  title, imageUrl, size, history, linkUrl, match,
}) => (
  <MenuItemContainer
    role="link"
    tabIndex={0}
    size={size}
    onClick={() => { history.push(`${match.url}${linkUrl}`); }}
    onKeyPress={() => { history.push(`${match.url}${linkUrl}`); }}
  >
    <BackgroundImageContainer
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <ContentContainer>
      <ContentTitle>{title.toUpperCase()}</ContentTitle>
      <ContentSubtitle>SHOP NOW</ContentSubtitle>
    </ContentContainer>
  </MenuItemContainer>
);

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  match: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
};

export default withRouter(MenuItem);
