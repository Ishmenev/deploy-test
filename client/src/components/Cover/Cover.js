import React from 'react';
import Title from '../UI/Title/Title';
import Button from '../UI/Button/Button';
import styles from './Cover.module.scss';
import Input from "../UI/Input/Input";

class Cover extends React.Component {

  render() {
    const {imageLink} = this.props.levelData;
    return (
      <div className={styles.cover}>
        <Title>
          <h2 className={styles.cover__name}>Обложка</h2>
        </Title>
        <p className={styles.cover__description}>Вес файла не должен превышать <span
          className={styles.cover__measure}>2мб</span>, <br/>допустимые форматы изображений - <span
          className={styles.cover__measure}>.jps, .png.</span></p>
        <div className={styles.cover__input}>
          <Input nameType={'description'}
            placeholder={'Ссылка на изображение'}
            value={imageLink}
            name={'image'}
            onValid={this.props.changeLevelData}
            onInvalid={() => {}}
          />
        </div>
        <Title>
          <h2 className={styles.cover__start}>Создать уровнь</h2>
        </Title>
        <Button domType={'button'} onClick={() => {
          this.props.changeStep('second')}}>
          Создать
        </Button>
      </div>
    )
  }
}

export default Cover;