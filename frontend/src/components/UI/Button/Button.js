import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styles from './Button.module.scss';

export default class Button extends Component {
    constructor(props){
        super(props);
    }


    render() {
        const {domType, href} = this.props;
        let content = null;

        if (domType === 'link') {
            content = <Link className={styles.button} to={href}>{this.props.children}</Link>
        }
    
        else if (domType === 'a') {
            content = <a className={styles.button} href={href}>{this.props.children}</a>
        }

        else if (domType === 'button') {
            content = <button className={styles.button} onClick={this.props.onClick}>{this.props.children}</button>
        }

        else if (domType === 'simple') {
            content = <div className={`${styles.button} ${styles.button_simple}`}>{this.props.children}</div>
        }

        return (
            content
        );
    }
}