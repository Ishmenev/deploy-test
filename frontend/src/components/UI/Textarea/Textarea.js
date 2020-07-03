import React, { Component } from 'react';
import styles from './Textarea.module.scss';

export default class Textarea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textarea: {
        errorMessage: 'Введите правильный textarea',
        valid: false,
        touched: false,
      }
    }
  }

  passData = (e) => {
    const {name, value} = e.target;

    if(value.length < 10) {
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

    if(value.length >= 10) {
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
        <textarea
          type='text'
          name='textarea'
          rows='5'
          value={this.props.value}
          onChange={(e) => this.passData(e)}
          placeholder='Введите ваше сообщение'
          className={styles.feedback__textarea}
        />
        {
          !this.state.textarea.valid && this.state.textarea.touched
            ? <span className={styles.feedback__error}>{'Введите верное значение'}</span>
            : null
        }
        
      </div>
    
    ) 
  }
}
