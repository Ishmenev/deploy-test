import React, {Component} from "react";
import { connect } from 'react-redux';
import {getLevelData} from '../actions/level';
import Play from "../pages/Play";


class PlayContainer extends Component {
    
    componentDidMount() {
        this.props.getLevelData(this.props.match.params.level)
    }
    
    
    render() {
        return (
            <Play/>
        )
    }
};

const mapStateToProps = state => {
    return {
        game: state.game.data,
     
    }
}

export default connect(mapStateToProps, {getLevelData})(PlayContainer)

