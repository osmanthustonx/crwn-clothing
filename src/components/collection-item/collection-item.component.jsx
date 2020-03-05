import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.action';

import './collection-item.styles.scss';

const CollectionItem = ({ item, addItemAction }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-fo oter">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton type="button" inverted onClick={() => addItemAction(item)}>
      ADD TO CART
      </CustomButton>
    </div>
  );
};

CollectionItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    imageUrl: PropTypes.string,
  }).isRequired,
  addItemAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addItemAction: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
