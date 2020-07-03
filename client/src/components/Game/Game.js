import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import styles from './Game.module.scss'
import {gameSaver} from "../../actions/saveGame";
import {connect} from "react-redux";

class Game extends Component {
  constructor(props) {
    super(props);
    this.keyListener = this.keyListener.bind(this);
    this.movePlayer = this.movePlayer.bind(this);
  }

  componentDidMount(){
    document.addEventListener("keydown", this.keyListener, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyListener);
  }

  keyListener(e) {
    const keyCode = e.code;
    let {positionY, positionX} = this.props.game.player;

    if (keyCode === "KeyW" || keyCode === "ArrowUp") {
      this.movePlayer(
          positionX,
          --positionY,
    )} else if (keyCode === "KeyS" || keyCode === "ArrowDown") {
        this.movePlayer(
            positionX,
            ++positionY,
    )} else if (keyCode === "KeyA" || keyCode === "ArrowLeft") {
        this.movePlayer(
            --positionX,
            positionY

    )} else if (keyCode === "KeyD" || keyCode === "ArrowRight") {
        this.movePlayer(
            ++positionX,
            positionY

    )}
  }

  movePlayer(newPositionX, newPositionY) {
    const {level} = this.props.game;

    let nextFieldIndex = 0;
    let nextField = null;

    level.forEach((item, index) => {
      if (
        item.y === newPositionY &&
        item.x === newPositionX
      ) {
        nextFieldIndex= index;
        nextField = item;
      }
    });

    if (nextField) {
      this.ckeckNewPlace(nextField, nextFieldIndex, newPositionX, newPositionY)
    } else {
      console.log("Некуда идти")
    }
  }

  ckeckNewPlace(nextField, nextFieldIndex, nextFieldX, nextFieldY) {
    const fieldItem = nextField.object;
    const fieldSpecialType = nextField.type;
    const canMove = nextField.passable;
    let {level, inventory: {keys}} = this.props.game;
    let newLevel = level;

    if (fieldItem !== null) {
      newLevel[nextFieldIndex].object = null;
      let inventoryItemCount = this.props.game.inventory[fieldItem];

      this.props.gameSaver({
        level: newLevel,
        player: {
          positionX: nextFieldX,
          positionY: nextFieldY,
        },
        inventory: {
          [fieldItem]: ++inventoryItemCount
        }
      })
    }

    if (fieldSpecialType === "exit") {
      this.props.gameSaver({
        player: {
          positionX: nextFieldX,
          positionY: nextFieldY,
        }
      })
      alert('Вы выиграли!')
    }
    //
    // else if (fieldSpecialType === "portfolioGate") {
    //     this.props.history.push('/portfolio')
    // }
    //
    // else if (fieldSpecialType === "contactsGate") {
    //     this.props.history.push('/contacts')
    // }

    else if (fieldSpecialType === "door" && keys > 0) {
      newLevel[nextFieldIndex].type = null;
      newLevel[nextFieldIndex].passable = true;

      this.props.gameSaver({
        level: newLevel,
        player: {
            positionX: nextFieldX,
            positionY: nextFieldY,
        },
        inventory: {
            keys: --keys
        }
      })
    }

    else if (canMove) {
      this.props.gameSaver({
        player: {
          positionX: nextFieldX,
          positionY: nextFieldY,
        }
      })
    }

    else {
      console.log('Сюда нельзя!')
    }
  }

  render() {
    const {level, player, width, height, inventory} = this.props.game;
    let elements = [];

    level.forEach((field, index) => {
      const fielsBaseClass = styles.field;
      const fieldTypeClass = styles[field.type] || '';
      const fieldObjectClass = styles[field.object] || '';
      let playerClass = '';

      if (field.x === player.positionX && field.y === player.positionY)  {
        playerClass = styles.player;
      }

      const fieldFinalClass = `${fielsBaseClass} ${fieldTypeClass} ${fieldObjectClass} ${playerClass}`;

      elements.push(<div key={index} className={fieldFinalClass} />)
    });
    
    

    const levelWidth = width * 40 + "px";
    const levelHeight = height * 40 + "px";

    let wrapperStyles  = {
      width: levelWidth,
      height: levelHeight
    };

    return (
      <React.Fragment>
        <div
          className={styles.wrapper}
          style={wrapperStyles}>
            {elements}
        </div>
        <div className={styles.keysCounter}>
            Количество ключей:
            <span>{inventory.keys}</span>
        </div>
      </React.Fragment>
    )
  }
}


const mapStateToProps = (store) => {
  return {
    game: store.game
  }
}

export default connect(mapStateToProps, {gameSaver})(withRouter(Game))