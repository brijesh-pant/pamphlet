import React, { Component } from 'react'
import PropTypes from 'prop-types'

import apiRequest from '../../../utils/apiRequest'

import Styles from './LoginView.scss'

export default class LoginView extends Component {
  constructor (props) {
    super(props)
    this.state = {
      formData: {
        email: '',
        password: ''
      }
    }
  }
  handleInputChange = event => {
    event.persist() // Tip: comment this code to see an error
    this.setState(prevState => ({
      formData: { ...prevState.formData, [event.target.name]: event.target.value }
    }))
  };

  handleLogIn = event => {
    event.preventDefault()
    const data = this.state.formData
    apiRequest({
      method: 'post',
      url: 'api/auth',
      data
    }).then(response => {
      const {
        data: {
          user: { token }
        }
      } = response
      localStorage.setItem('app_token', token)
      this.props.router.push('/')
    })
  };

  render () {
    return (
      <div className='loginWrapper'>
        <div className='wrapper'>
          <div id='main'>
            <form method='post' action='#'>
              <div className='fields'>
                <div className='field'>
                  <input type='email' name='email' id='email' placeholder='Email' onChange={this.handleInputChange} />
                </div>
                <div className='field'>
                  <input
                    type='password'
                    name='password'
                    id='password'
                    placeholder='Password'
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
              <ul className='actions special'>
                <li>
                  <a href='#' className='button' onClick={this.handleLogIn}>
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

LoginView.propTypes = {
  router: PropTypes.object
}
