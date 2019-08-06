import React from 'react'
import './App.css'
import Msg from './Msg'
import store from './store/store'

class helloWorld extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
             flag: true,
             curUser: store.getState().curUsers
        }
        this.consoleLog = this.consoleLog.bind(this)
    }
    consoleLog(){
        console.log(this.props.name + Math.random())
    }
    changName(){
        this.setState({
            flag : !this.state.flag,
            curUser: this.state.flag ? this.props.name : this.props.name2
        })
    }
    changeSayUser (value){
        this.setState({
            curUser : value
        })
    }
    render() {
        return (
            <div className='App'>
                <h2 onClick={()=> this.changName() }>{ this.state.curUser } say:  hello World!</h2>
                <Msg sayName={ this.state.curUser } changeSayUser={this.changeSayUser.bind(this)}/>
            </div>
        )
    }
}

export default helloWorld
