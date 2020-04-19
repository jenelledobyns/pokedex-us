import React, { Component } from 'react'
import Search from './Search';
import './styles/Header.scss';

export default class navbar extends Component {
    render() {
        return (
         <section class="header">
            <div class="pokelogo">
            </div>
            <Search />
          </section>
        )
    }
}