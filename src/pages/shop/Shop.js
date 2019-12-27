import React, { Component } from "react";

import data from "./shopData";

import PreviewCollection from "../../components/preview-collection/PreviewCollection";

class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: data
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <PreviewCollection key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default Shop;
