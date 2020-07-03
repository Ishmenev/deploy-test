import React, { Component } from 'react';

import styles from './Title.module.scss';

export default class Title extends Component {
    constructor(props){
        super(props);
    }


    render() {
        const subclass = this.props.subClass || null;

        return (
            <div className={`${styles.title} ${subclass}`}>
                {this.props.children}
            </div>
        );
    }
}