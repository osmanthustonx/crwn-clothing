import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';


import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';


class ShopPage extends Component {
  componentDidMount() {
    const { fetchCollectionsStartAction } = this.props;
    fetchCollectionsStartAction();
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
      </div>
    );
  }
}

ShopPage.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
  fetchCollectionsStartAction: PropTypes.func.isRequired,
};


const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAction: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
