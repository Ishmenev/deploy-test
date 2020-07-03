import React, { Component } from 'react';

import styles from './_template.module.scss';

export default class _template extends Component {
    constructor(props){
        super(props);
    }


    render() {

        return (
            <div className={styles.block}></div>
        );
    }
}