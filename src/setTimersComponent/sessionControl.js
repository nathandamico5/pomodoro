import React from 'react';

class SessionControl extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className='sessionControl'>
                <div className='controlRow' id="breakControl">
                    <h4>Break Length</h4>
                    <h3>{this.props.breakLength}</h3>
                    <button onClick={() => this.props.handleSessionEdit('break', '-')}>Down</button>
                    <button onClick={() => this.props.handleSessionEdit('break', '+')}>Up</button>
                </div>
                <div className='controlRow' id="sessionControl">
                    <h4>Session Length</h4>
                    <h3>{this.props.sessionLength}</h3>
                    <button onClick={() => this.props.handleSessionEdit('session', '-')}>Down</button>
                    <button onClick={() => this.props.handleSessionEdit('session', '+')}>Up</button>
                </div>
            </div>
        );
    }
}

export default SessionControl;