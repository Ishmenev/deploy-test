import React from 'react';
import Intro from '../components/Intro/Intro';
import Indicators from '../components/Indicators/Indicators';
import Objects from '../components/Objects/Objects';
import Cover from '../components/Cover/Cover';
import Description from '../components/Description/Description';
import {Container} from 'reactstrap';



class CreateLevel extends React.Component {
  state = {
    step: 'first',
    levelData: {
      width: 10,
      height: 10,
      title: '',
      description: '',
      image: '',
      level: []
    }
  }
  
  changeStep = (newStep) => {
    this.setState({
      step: newStep
    })
    console.log('change')
  };
  
  changeLevelData = (name, value) => {
    this.setState({
      levelData: {
        ...this.state.levelData,
        [name]: value
      }
    })
  };
  
  render() {
  
    let content = null;
    
    if (this.state.step === 'first') {
      content = <React.Fragment>
        <Indicators changeLevelData={this.changeLevelData} levelData={this.state.levelData}/>
        <Description changeLevelData={this.changeLevelData} levelData={this.state.levelData}/>
        <Cover changeLevelData={this.changeLevelData} levelData={this.state.levelData} changeStep={this.changeStep}/>
      </React.Fragment>
    }
    
    else if (this.state.step === 'second') {
      content = <React.Fragment>
        <Objects changeLevelData={this.changeLevelData} levelData={this.state.levelData}/>
      </React.Fragment>
    }
    
    
    return (
      <React.Fragment>
        <Intro introType={'local'} label='Создать уровень'/>
        <Container>
          {content}
        </Container>
      </React.Fragment>
    )
  } 
}

export default CreateLevel;