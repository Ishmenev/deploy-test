import React, {Component} from "react";
import styles from './Game.module.scss';


class Creator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: [
            ],
            player: {
                positionX: null,
                positionY: null
            },
            levelSize: {
                width: 1,
                height: 1,
            },
            checkedElemParams: {
                type: "ничего",
                object: null,
                passable: true
            }
        };
    }

    
    componentDidMount() {
        let {width, height} = this.props.data;
        width = parseInt(width);
        height = parseInt(height);
        this.setState({
            levelSize: {
                width,
                height
            }
        }, () => {
            this.generateLevel()
        });
    }
    
    generateLevel() {
        const {width, height} = this.state.levelSize;
        let newLevel = [];

        let posY = 1;
        let posX = 0;

        for (let i = 0; i  < width * height; i++) {
            if (posX >= width) {
                posX = 1;
                posY++;
            }  else {
                posX++;
            }

            newLevel.push({
                x: posX,
                y: posY,
                type: null,
                object: null,
                passable: true
            })
        }

        this.setState({
            level: newLevel
        })
    }

    setActiveType(type, object, passable, name) {
        this.setState({
            checkedElemParams: {
                type,
                object,
                passable,
                name
            }
        })
    }

    changeField(e) {
        const posX = +e.target.dataset.x;
        const posY = +e.target.dataset.y;
        const {checkedElemParams: {type, object, passable},  level} = this.state;
        if (object === 'player') {
            this.setState({
                player: {
                    positionX: posX,
                    positionY: posY
                },
            })
    
            this.props.changeLevelData('player', {
                positionX: posX,
                positionY: posY
            })
        }
        
        else {
            let newLevel = this.state.level;
            let changedFieldIndex = 0;
    
            level.forEach((item, index) => {
                if (item.y === posY && item.x === posX) {
                    changedFieldIndex= index;
                }
            });
    
            newLevel[changedFieldIndex].type = type;
            newLevel[changedFieldIndex].object = object;
            newLevel[changedFieldIndex].passable = passable;
    
            this.setState({
                level: newLevel
            });
            this.props.changeLevelData('level', newLevel)
     
    
        }

       
        
    }

    render() {
        const {level, player, checkedElemParams} = this.state;
        let elements = [];

        level.forEach((field, index) => {
            const fielsBaseClass = `${styles.field} ${styles.creator_field}`;
            const fieldTypeClass = styles[field.type];
            const fieldObjectClass = styles[field.object];

            let playerClass = null;
            if (field.x === player.positionX && field.y === player.positionY)  {
                playerClass = styles.player;
            }

            const fieldFinalClass = `${fielsBaseClass} ${fieldTypeClass} ${fieldObjectClass} ${playerClass}`;

            elements.push(
                <div
                    key={index}
                    className={fieldFinalClass}
                    data-x={field.x}
                    data-y={field.y}
                    data-passible={field.passable}
                    onClick={this.changeField.bind(this)}
                />
            )
        });

        const levelWidth = this.state.levelSize.width * 40 + "px";
        const levelHeight = this.state.levelSize.height * 40 + "px";

        let wrapperStyles  = {
            width: levelWidth,
            height: levelHeight
        };


        let content = (
            <div>
                <div className={styles.creator_elements}>
                    <span className={styles.creator_title}>Тип поля:</span>
                    <ul className={styles.creator_elements_list}>
                        <li>
                            <button
                                className={styles.wall}
                                onClick={this.setActiveType.bind(this, "wall", null, false, 'стена')}
                            />
                        </li>
                
                        <li>
                            <button
                                className={styles.tree}
                                onClick={this.setActiveType.bind(this, "tree", null, false, 'дерево')}
                            />
                        </li>
                
                        <li>
                            <button
                                className={styles.flower}
                                onClick={this.setActiveType.bind(this, "flower", null, true, 'цветок')}
                            />
                        </li>
                
                        <li>
                            <button
                                className={styles.sand}
                                onClick={this.setActiveType.bind(this, "sand", null, true, 'песок')}
                            />
                        </li>
                
                        <li>
                            <button
                                className={styles.river}
                                onClick={this.setActiveType.bind(this, "river", null, false, 'река')}
                            />
                        </li>
                
                        <li>
                            <button
                                className={styles.door}
                                onClick={this.setActiveType.bind(this, "door", null, false, 'дверь')}
                            />
                        </li>
                
                        <li>
                            <button
                                className={styles.box}
                                onClick={this.setActiveType.bind(this, "box", null, false, 'коробка')}
                            />
                        </li>
                
                        <li>
                            <button
                                className={styles.exit}
                                onClick={this.setActiveType.bind(this, "exit", null, true, 'выход')}
                            />
                        </li>
                        <li>
                            <button
                                className={styles.field}
                                onClick={this.setActiveType.bind(this, null, null, true, 'ничего')}
                            />
                        </li>
                    </ul>
                    <span className={styles.creator_title}>Объекты:</span>
                    <ul className={styles.creator_elements_list}>
                        <li>
                            <button
                                data-type="keys"
                                className={styles.keys}
                                onClick={this.setActiveType.bind(this, null, "keys", true, 'ключ')}
                            />
                        </li>
                        {!this.state.player.positionX &&
                            <li>
                                <button
                                    data-type="player"
                                    className={styles.player}
                                    onClick={this.setActiveType.bind(this, null, "player", true, 'игрок')}
                                />
                            </li>
                        }
                        
                    </ul>
                    <span className={styles.creator_title}>Выбрано: <span style={{'color': '#B1F879'}}>{checkedElemParams.name}</span></span>
                </div>
        
                <div
                    className={styles.wrapper}
                    style={wrapperStyles}
                >
                    {elements}
                </div>
          
            </div>
        )

        return (
            <div className={styles.creator}>
                {content}
            </div>
        )
    }
}

export default Creator;