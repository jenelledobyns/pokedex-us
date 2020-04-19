import React, { Component } from 'react';
import styled from 'styled-components';
import './styles/Pokecell.scss';

const sprite = styled.img `
width: 5em;
height: 5em;
display: none;
`;

export default class Pokecell extends Component {

  state = {
    name: '',
    img: '',
    id: ''
  };

  componentDidMount () {
    const { name, url } = this.props;
    const img = `https://raw.githubusercontent.com/tdmalone/pokecss-media/master/graphics/pokemon/ani-front/${name}.gif`
    const id = url.split('/')[url.split('/').length - 2];

    this.setState({ name, img, id });
  }

    render() {

        return (
        <div class="cell">
            <div class="sprite">
                <img src={this.state.img}></img>
            </div>
            <div class="number">
              <h4>#{this.state.id}</h4>
            </div>
            <div class="name">
              <h3>{this.state.name}</h3>
            </div>
          </div>
        )
    }
}