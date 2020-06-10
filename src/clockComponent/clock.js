import React from 'react';

class ClockComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            running: false,
            interval: 0,
            minutes: this.props.sessionLength,
            seconds: 0
        }
    }

    componentDidMount = () => {
        this.props.break ? 
        this.setState({
            minutes: this.props.breakLength,
            seconds: 0
        }) :
        this.setState({
            minutes: this.props.sessionLength,
            seconds: 0
        })
    }

    componentDidUpdate = () => {
        if(this.props.break) {
            if(this.state.minutes === 0 && this.state.seconds === 0){
                this.props.toggleTimerType();
                this.setState({
                    minutes: this.props.sessionLength,
                    seconds: 0
                });
            }
        } else {
            if(this.state.minutes === 0 && this.state.seconds === 0){
                this.props.toggleTimerType();
                this.props.checkpoint();
                this.setState({
                    minutes: this.props.breakLength,
                    seconds: 0
                });
            }
        }
    }

    startTimer = () => {
        let interval = setInterval(this.decreaseTimer, 1000);
        this.setState({
            minutes: this.props.sessionLength,
            running: true,
            interval: interval
        });
    }

    decreaseTimer = () => {
        if(this.state.seconds === 0){
            this.setState({
              minutes: this.state.minutes - 1,
              seconds: 59
            });
          } else {
            this.setState({
              seconds: this.state.seconds - 1
            });
          }
    }

    stopTimer = () => {
        clearInterval(this.state.interval);
    }

    resetTimer = () => {
        this.stopTimer();
        this.props.resetSession();
        this.setState({
            running: false,
            minutes: this.props.sessionLength,
            seconds: 0
        });
    }

    render() {
        return(
            <div className='clock'>
                <h2>
                    {this.props.break ? 'Break' : 'Session'}
                </h2>
                    {/* {
                    this.props.break ?
                    <div>
                        <h1>
                            <span>
                                {
                                    this.state.minutes + ':'
                                }
                            </span> 
                            <span>
                                {
                                    this.state.seconds < 10 ? 
                                    '0' + this.state.seconds :
                                    this.state.seconds
                                }
                            </span>
                        </h1>
                        <button onClick={this.startTimer}>Start</button>
                        <button onClick={this.stopTimer}>Stop</button>
                        <button onClick={this.resetTimer}>Reset Session</button>
                    </div> : */}
                    <div>
                        <h1>
                            <span>
                                {
                                    this.state.running ?
                                    this.state.minutes + ':' :
                                    this.props.sessionLength + ':'
                                }
                            </span> 
                            <span>
                                {
                                    this.state.seconds < 10 ? 
                                    '0' + this.state.seconds :
                                    this.state.seconds
                                }
                            </span>
                        </h1>
                        <button onClick={this.startTimer}>Start</button>
                        <button onClick={this.stopTimer}>Stop</button>
                        <button onClick={this.resetTimer}>Reset Session</button>
                    </div>
            </div>
        );
    }
}

export default ClockComponent;