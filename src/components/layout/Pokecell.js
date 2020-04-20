import React, { Component } from 'react';
import './styles/Pokecell.scss';



export default class Pokecell extends Component {

  addDefaultSrc(ev){
    ev.target.src = 'https://svgur.com/i/KGM.svg';
  }

  state = {
    name: '',
    img: '',
    id: '',
    type1: '',
    type2: '',
    imageLoading: true,
    imgLoadErr: false
  };

  componentDidMount () {
    const { name, url } = this.props;
    const img = `https://projectpokemon.org/images/normal-sprite/${name}.gif`
    const id = url.split('/')[url.split('/').length - 2];

    this.setState({ name, img, id });
  }

    render() {

        return (
        <div className="cell">
            <div className="sprite">
                <img src={this.state.img}
                onError={this.addDefaultSrc} />
            </div>
            <div className="number">
              <h4>#{this.state.id}</h4>
            </div>
            <div className="name">
              <h3>{this.state.name}</h3>
            </div>
          </div>
        )
    }
}