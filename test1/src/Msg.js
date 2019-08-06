import React from 'react'
import './Common.css'
import store from  './store/store'

class Msg extends React.Component{
    constructor(props){
         super(props)
         this.state = {
             usersList: [
                 { name: 'lt'},
                 { name: 'zoNia'},
                 { name: '张三'},
                 { name: '李四'},
             ]
         }
    }
    changeSayName(value){
        store.dispatch({
            text : value,
            type:""
        });
        this.props.changeSayUser(value)
    }

    render() {
        return (
            <div>
                <label> 现在说话的人是 : { this.props.sayName } </label>
                 <br/>你想要听谁说话呢?
                <ul>
                    { this.state.usersList.map((item, key)=> {
                         return (
                             <li key={ key }  onClick={ ()=> this.changeSayName(item.name) }
                              className ={ this.props.sayName === item.name ? 'select':"" }>{ item.name }</li>
                         )
                      })
                    }
                </ul>
            </div>
        )
    }
}

export default Msg
