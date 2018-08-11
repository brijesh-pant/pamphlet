import React, { Component } from 'react'

export default class Header extends Component {
  render () {
    return (
      <header id='header'>
        <h1>
          <a href='#'>Pamphlet</a>
        </h1>
        <nav className='links'>
          <ul>
            <li>
              <a href='#'>Lorem</a>
            </li>
            <li>
              <a href='#'>Ipsum</a>
            </li>
            <li>
              <a href='#'>Feugiat</a>
            </li>
            <li>
              <a href='#'>Tempus</a>
            </li>
            <li>
              <a href='#'>Adipiscing</a>
            </li>
          </ul>
        </nav>
        <nav className='main'>
          <ul>
            <li className='search'>
              <a className='fa-search' href='#search'>
                Search
              </a>
              <form id='search' method='get' action='#'>
                <input type='text' name='query' placeholder='Search' />
              </form>
            </li>
            <li className='menu'>
              <a className='fa-bars' href='#menu'>
                Menu
              </a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}
