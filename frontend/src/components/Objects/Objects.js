import React from 'react';
import Title from '../UI/Title/Title';
import Button from '../UI/Button/Button';
import styles from './Objects.module.scss';
import Creator from './Creator';
import {saveLevel} from "../../actions/level";

const Objects = ({changeLevelData, levelData}) => {
    
    return (
        <div className={styles.objects}>
            <Title>
                <h2 className={styles.objects__name}>Объекты</h2>
            </Title>
            <Creator changeLevelData={changeLevelData} data={levelData}/>
            <div>
                <Button domType={'button'} onClick={() => {saveLevel(levelData)}}>Сохранить</Button>
            </div>
        </div>
    );
}

export default Objects;