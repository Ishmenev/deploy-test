import React, { Component } from 'react';
import styles from './Input.module.scss';

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: {
        errorMessage: 'Введите правильный username',
        valid: false,
        touched: false,
      },
      lastname: {
        errorMessage: 'Введите правильный lastname',
        valid: false,
        touched: false,
      },
      subject: {
        errorMessage: 'Введите правильный subject',
        valid: false,
        touched: false,
      },
      description: {
        valid: false,
        touched: false,
      },
      number: {
        errorMessage: 'Введите правильный number',
        valid: false,
        touched: false,
      }
    }
  }

  passData = (e) => {
    const {name, value} = e.target;

    if(value.length < 6) {
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

    if(value.length >= 6) {
      this.setState({
        [name]: {
          touched: true,
          valid: true
        }
      })
      this.props.onValid(name, value)
    }
  }

  validateText = (e) => {
    const {name, value} = e.target;
    const minLength = this.props.minLength || 6;
    const maxLength = this.props.minLength || 6;
    
    if(value.length < minLength || value.length > maxLength) {
      this.setState({
        [name]: {
          touched: true,
          valid: false
        }
      });
      this.props.onValid(name, value)
      this.props.onInvalid(name, value)
    }

    else {
      this.setState({
        [name]: {
          touched: true,
          valid: true
        }
      })
      this.props.onValid(name, value)
    }
  }

  validateNumber = (e) => {
    const {name, value} = e.target;
    
    if (+value < this.props.minNumber || +value > this.props.maxNumber) {
      this.props.onInvalid(name, value)
    }
    
    else {
      this.props.onValid(name, value)
    }
  }



  render() {
    let content = null;
    let {nameType} = this.props;

    if (nameType === 'username') {
      content =       
        <div>
          <input
            type='text'
            name='username'
            value={this.props.value}
            onChange={(e) => this.passData(e)}
            placeholder='Имя'
            className={styles.feedback__input}
          />
          {
            !this.state.username.valid && this.state.username.touched
              ? <span className={styles.feedback__error}>{'Введите верное значение'}</span>
              : null
          }
          
        </div>

    } 
    else if (nameType === 'lastname') {
      content =       
      <div>
        <input
          type='text'
          name={nameType}
          value={this.props.value}
          onChange={(e) => this.passData(e)}
          placeholder='Фамилия'
          className={styles.feedback__input}
        />

        {
          !this.state.lastname.valid && this.state.lastname.touched
            ? <span className={styles.feedback__error}>{'Введите верное значение'}</span>
            : null
        }
      </div>
    }
    else if (nameType === 'subject') {
      content =       
      <div>
        <input
          type='text'
          name={nameType}
          value={this.props.value}
          onChange={(e) => this.passData(e)}
          placeholder={this.props.placeholder}
          className={styles.feedback__input}
        />

        {
          !this.state.subject.valid && this.state.subject.touched
            ? <span className={styles.feedback__error}>{'Введите верное значение'}</span>
            : null
        }
      </div>
    }
    else if (nameType === 'description') {
      content =       
      <div>
        <input
          type='text'
          name={this.props.name}
          value={this.props.value}
          onChange={(e) => this.validateText(e)}
          placeholder={this.props.placeholder}
          className={`${styles.feedback__input} ${styles.feedback__input_creation}`}
        />
      </div>
    }
    else if (nameType === 'number') {
      content = 
      <div className={styles.wrapper}>
        <input
            type='number'
            name={this.props.name}
            value={this.props.value}
            onChange={(e) => this.validateNumber(e)}
            placeholder={this.props.placeholder}
            className={`${styles.feedback__input} ${styles.feedback__input_creation}`}
        />
    
        {
          !this.state.number.valid && this.state.number.touched
              ? <span className={styles.error}>{`Введите значение от ${this.props.minNumber} до ${this.props.maxNumber}`}</span>
              : null
        }
      </div>
    }



    return(
      content
    ) 
  }
}
