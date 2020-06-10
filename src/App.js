import React from 'react';
import ClockComponent from './clockComponent/clock';
import SessionControl from './setTimersComponent/sessionControl';
import checkmark from './checkmark.png';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      break: false,
      checkpoint: []
    }
  }

  handleSessionEdit = (type, upDown) => {
    let breakLength = this.state.breakLength;
    let sessionLength = this.state.sessionLength;
    switch(type) {
        case 'break':
            if (upDown === '-' && breakLength != 1){
              breakLength -= 1
            } else if (upDown === '+' & breakLength != 60){
              breakLength += 1
            }
            break;
        case 'session':
            if (upDown === '-' && sessionLength != 1){
              sessionLength -= 1
            } else if (upDown === '+' && sessionLength != 60){
              sessionLength += 1
            }
            break;
    }
    this.setState({
      breakLength: breakLength,
      sessionLength: sessionLength
    });
  }

  resetSession = () => {
    this.setState({
      break: false
    });
  }

  checkpoint = () => {
    let checkpoint = this.state.checkpoint.concat('x');
    this.setState({
      checkpoint: checkpoint
    });
  }

  toggleTimerType = () => {
    this.setState({
      break: !this.state.break
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Pomodoro Clock</h1>
        <ClockComponent 
          breakLength={this.state.breakLength} 
          sessionLength={this.state.sessionLength} 
          seconds={this.state.seconds}
          break={this.state.break}
          resetSession={this.resetSession}
          toggleTimerType={this.toggleTimerType}
          updateTimer={this.updateTimer}
          checkpoint={this.checkpoint}/>
        <SessionControl 
          breakLength={this.state.breakLength} 
          sessionLength={this.state.sessionLength} 
          handleSessionEdit={this.handleSessionEdit}/>
        <div className='progressRow'>
          {
          this.state.checkpoint.map(x => {
            return(
            <div className='checkmark' key={this.state.checkpoint.indexOf(x)}>
              <img src={checkmark} alt="checkmark" />
            </div>
            )
          })
          }
        </div>
      </div>
    );
  }
}

export default App;
