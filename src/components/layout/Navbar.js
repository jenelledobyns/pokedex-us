import React, { Component } from 'react'
import './styles/Navbar.scss';

export default class navbar extends Component {
    render() {
        return (
            <section class="nav">
            <button class="dropdown">Generation<i class="fas fa-chevron-circle-down"></i></button>
            <button class="dropdown">Type 1<i class="fas fa-chevron-circle-down"></i></button>
            <button class="dropdown greyed">Type 2<i class="fas fa-chevron-circle-down"></i></button>
            <button>Random</button>
          </section>
        )
    }
}