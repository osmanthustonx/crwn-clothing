import React, { useEffect, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Spinner from '../../components/spinner/spinner.component';
import { ShopPageContainer } from './shop-styles';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

const CollectionsOverviewContainer = lazy(() => import('../../components/collections-overview/collections-overview.container'));
const CollectionPageContainer = lazy(() => import('../collection/collection.container'));

const ShopPage = ({ fetchCollectionsStartAction, match }) => {
  useEffect(() => {
    fetchCollectionsStartAction();
  }, [fetchCollectionsStartAction]);

  return (
    <ShopPageContainer>
      <Suspense fallback={<Spinner />}>
        <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
      </Suspense>
    </ShopPageContainer>
  );
};

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
