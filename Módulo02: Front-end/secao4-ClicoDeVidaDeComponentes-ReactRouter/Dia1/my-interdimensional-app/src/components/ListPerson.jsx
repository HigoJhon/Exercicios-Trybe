import React, { Component } from 'react';
import Carregar from './Carregar';

class ListPerson extends Component {
  constructor() {
    super();

    this.state = {
      pessoas: [],
      loading: true,
    };
  }

  componentDidMount() {
    const url = 'https://api.randomuser.me/';
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          pessoas: data.results,
          loading: false,
        });
      });
  }

  render() {
    const { loading } = this.state;
    if (loading ) return <Carregar />
    return (
      <div></div>
    );
  }
}

export default ListPerson;