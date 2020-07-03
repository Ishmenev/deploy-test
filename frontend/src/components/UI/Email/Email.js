import React, { Component } from 'react';
import styles from './Email.module.scss';

export default class Email extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: {
        errorMessage: 'Введите правильный email',
        valid: false,
        touched: false,
      }
    }
  }

  passData = (e) => {
    const {name, value} = e.target;

    if(!value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      this.setState({
        [name]: {
          touched: true,
          valid: false
        }
      })
      this.props.onInvalid(name, value)
    }

    if(value === '') {
      this.setState({
        [name]: {
          touched: true,
          valid: true
        }
      })
      this.props.onInvalid(name, value)
    } 

    if(value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      this.setState({
        [name]: {
          touched: true,
          valid: true
        }
      })
      this.props.onValid(name, value)
    }
  }

  render() {

    return(
      <div>
        <input
          type='text'
          name='email'
          value={this.props.value}
          onChange={(e) => this.passData(e)}
          placeholder='Email'
          className={styles.feedback__email}
        />

        {
          !this.state.email.valid && this.state.email.touched
            ? <span className={styles.feedback__error}>{'Введите верное значение'}</span>
            : null
        }
      
    </div>

    ) 
  }
}
