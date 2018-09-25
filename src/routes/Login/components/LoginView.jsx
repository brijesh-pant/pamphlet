import React, { Component } from 'react'

import Styles from './LoginView.scss'

export default class LoginView extends Component {
  render () {
    return (
      <div className='loginWrapper'>
        <div className='wrapper'>
          <div id='main'>
            <form method='post' action='#'>
              <div className='fields'>
                <div className='field'>
                  <input type='email' name='email' id='email' placeholder='Email' />
                </div>
                <div className='field'>
                  <input type='password' name='password' id='password' placeholder='Password' />
                </div>
              </div>
              <ul className='actions special'>
                <li>
                  <a href='#' className='button'>
                    Login
                  </a>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
