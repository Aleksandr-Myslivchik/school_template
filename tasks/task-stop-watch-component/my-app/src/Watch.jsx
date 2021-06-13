import React from 'react'


export default class Watch extends React.Component {


    state = {
        isInitiated: false,
        initTime: new Date('2021', '05', '10').getTime(),
        time: new Date('2021', '05', '10').getTime(),
    }


    startWatch = () => {

        this.setState({ isInitiated: true })

    }


    startClock = () => {

        this.state.isInitiated && this.setState({ time: (this.state.time + 1000) })

    }


    stopWatch = () => {

        this.setState({ isInitiated: false })

    }

    resetWatch = () => {

        this.setState({ time: this.state.initTime })

    }

    componentDidMount() {

        this.timerID = setInterval(this.startClock, 1000)

    }

    componentWillUnmount() {

        clearInterval(this.timerID)
    }

    render() {
        return (
            <div className='wrapper'>
                <div className='clock-wrapper'>{new Date(this.state.time).toLocaleTimeString()}</div>
                <div onClick={this.startWatch} className='start-btn-wrapper clock-btn'>{this.props.start}</div>
                <div onClick={this.stopWatch} className='stop-btn-wrapper clock-btn'>{this.props.stop}</div>
                <div onClick={this.resetWatch} className='reset-btn-wrapper clock-btn'>{this.props.reset}</div>
            </div>
        )

    }
}