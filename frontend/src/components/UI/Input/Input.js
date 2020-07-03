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
      number: {
        errorMessage: 'Введите правильный number',
        valid: false,
        touched: false,
      }
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
      });
      this.props.onValid(name, value)
    }
  };
  
  validateNumber = (e) => {
    const {name, value} = e.target;
    
    if (+value < this.props.minNumber || +value > this.props.maxNumber) {
      this.props.onInvalid(name, value)
    }
    
    else {
      this.props.onValid(name, value)
    }
  };

  render() {
    let content = null;
    let {inputType} = this.props;

    if (inputType === 'username') {
      content =       
        <div>
          <input
            type='text'
            name='username'
            value={this.props.value}
            onChange={(e) => this.validateText(e)}
            placeholder='Имя'
            className={styles.input}
          />
          {
            !this.state.username.valid && this.state.username.touched
              ? <span className={styles.error}>{'Введите верное значение'}</span>
              : null
          }
          
        </div>

    } 
    else if (inputType === 'lastname') {
      content =       
      <div>
        <input
          type='text'
          name={inputType}
          value={this.props.value}
          onChange={(e) => this.validateText(e)}
          placeholder='Фамилия'
          className={styles.input}
        />

        {
          !this.state.lastname.valid && this.state.lastname.touched
            ? <span className={styles.error}>{'Введите верное значение'}</span>
            : null
        }
      </div>
    }
    else if (inputType === 'subject') {
      content =       
      <div>
        <input
          type='text'
          name={this.props.name || inputType}
          value={this.props.value}
          onChange={(e) => this.validateText(e)}
          placeholder={this.props.placeholder || 'Тема сообщения'}
          className={styles.input}
          style={{
            marginTop: this.props.marginTop
          }}
        />

        {
          !this.state.subject.valid && this.state.subject.touched
            ? <span className={styles.error}>{'Введите верное значение'}</span>
            : null
        }
      </div>
    }
    else if (inputType === 'subject') {
      content =       
      <div>
        <input
          type='text'
          name={this.props.name || inputType}
          value={this.props.value}
          onChange={(e) => this.validateText(e)}
          placeholder={this.props.placeholder || 'Тема сообщения'}
          className={styles.input}
          style={{
            marginTop: this.props.marginTop
          }}
        />

        {
          !this.state.subject.valid && this.state.subject.touched
            ? <span className={styles.error}>{'Введите верное значение'}</span>
            : null
        }
      </div>
    }
    else if (inputType === 'description') {
      content =       
      <div>
        <input
          type='text'
          name={this.props.name || inputType}
          value={this.props.value}
          onChange={(e) => this.validateText(e)}
          placeholder={this.props.placeholder}
          className={styles.input}
          style={{
            marginTop: this.props.marginTop
          }}
        />
      </div>
    }

    else if (inputType === 'number') {
      content =
          <div className={styles.wrapper}>
            <input
                type='number'
                name={this.props.name}
                value={this.props.value}
                onChange={(e) => this.validateNumber(e)}
                placeholder={this.props.placeholder || ''}
                className={styles.input}
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
