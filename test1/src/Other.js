import React from 'react'
import store from './store/store'

class Other extends React.Component{
    render() {
        return(
            <div>
                { store.getState().curUsers  } :
                other
                { this.props.match.params.name }

            </div>
        )
    }
}



export  default  Other
