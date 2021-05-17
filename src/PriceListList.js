import React from 'react';

import axios from 'axios';

export default class PriceListList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`http://20.49.139.146/pricing/api/v1/price-lists?countryId=&page=1&size=50&name=&type=&sort=active,DESC`)
      .then(res => {
        const priceListList = res.data;
        this.setState({ priceListList });
      })
  }

  render() {
    return (
      <ul>
        { this.state.priceListList.map(pl => <li>{pl.name}</li>)}
      </ul>
    )
  }
}