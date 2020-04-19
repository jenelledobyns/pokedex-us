import React, { Component } from 'react'
import './styles/Search.scss';

export default class navbar extends Component {
    render() {
        return (
        <div class="search">
            <h1>Pokedex.us</h1>

              <input type="text" placeholder="Search..." />
      
          </div>
        )
    }
}