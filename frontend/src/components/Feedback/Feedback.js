import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import Title from '../UI/Title/Title';
import styles from './Feedback.module.scss';
import Input from '../UI/Input/Input';
import Email from '../UI/Email/Email';
import Textarea from '../UI/Textarea/Textarea';

const initialState = {
  submitted: false,
  error: false,
  isFormValid: false,
  errorsCount: 5,
  username: '',
  lastname: '',
  email: '',
  subject: '',
  textarea: '',
  errors: {
    username: true,
    lastname: true,
    email: true,
    subject: true,
    textarea: true
  }
}

export default class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = initialState
  }

  onValid = (name, value) => {
    console.log(name, value)

    let errors = this.state.errors;

    switch(name) {
      case 'username':
        errors.username = false;
      break
      case 'lastname':
        errors.lastname = false;
      break
      case 'email':
        errors.email = false;
      break
      case 'subject':
        errors.subject = false;
      break
      case 'textarea':
        errors.textarea = false;
      break
      default:
      break
    }

    this.setState({
      errors,
      [name]: value,
      errorsCount: this.countErrors(this.state.errors)
    })
    this.setState({isFormValid: this.validateForm(this.state.errorsCount)})
  }

  validateForm = (errorsCount) => {
    let valid = true;

    if(errorsCount > 0) {
      valid = false
    } else {
      valid = true
    }
    return valid
  }

  onInvalid = (name, value) => {
    this.setState({
      [name]: value
    })

  }

  countErrors = (errors) => {
    let count = 0;
    Object.values(errors).forEach(
      (val) => val === true && (count = count+1)
    );
    return count;
  }

  submitHandler = (e) => {
    e.preventDefault();
    if(!this.state.isFormValid) {
      this.setState({
        error: true
      })
    } else {
      this.setState({...initialState}, () => {
        this.setState({
          error: false,
          submitted: true
        })
      })
      
    }
  
   
  }

  render() {

    let content = null;
    
    if (this.state.submitted) {
      content = <Container>
        <Title>
          <h2 className={styles.feedback__name}>Спасибо, форма отправлена!</h2>
        </Title>
      </Container>
    }
    
    else {
      content = <Container>
        <Title>
          <h2 className={styles.feedback__name}>Связаться</h2>
        </Title>
        <form id='form' onSubmit={this.submitHandler} action='get'>
          <Row>
            <Col sm={12} md={6}>
              <Input
                  inputType='username'
                  value={this.state.username}
                  onValid={this.onValid}
                  onInvalid={this.onInvalid}
              />
            </Col>
            <Col sm={12} md={6}>
              <Input
                  inputType='lastname'
                  value={this.state.lastname}
                  onValid={this.onValid}
                  onInvalid={this.onInvalid}
              />
            </Col>
            <Col sm={12} md={6}>
              <Email
                  value={this.state.email}
                  onValid={this.onValid}
                  onInvalid={this.onInvalid}
              />
            </Col>
            <Col sm={12} md={6}>
              <Input
                  inputType='subject'
                  value={this.state.subject}
                  onValid={this.onValid}
                  onInvalid={this.onInvalid}
                  marginTop={'30px'}
              />
            </Col>
            <Col lg={12}>
              <Textarea
                  value={this.state.textarea}
                  onValid={this.onValid}
                  onInvalid={this.onInvalid}
              />
            </Col>
            <Col lg={12}>
              <button className={styles.feedback__button}>
                Отправить
              </button>
            </Col>
            {this.state.error && <p className={styles.feedback__error}>Данные заполнены некорректно, пожалуйста, проверьте перед отправкой формы</p>}
          </Row>
        </form>
      </Container>
    }

    return (
      <div className={styles.feedback}>
        {content}
      </div>
    )

  }
}


