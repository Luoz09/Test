import  React from 'react'


class goodsDetails extends  React.Component{
    constructor (props) {
        super(props);
        const curGoods = this.props.history.location.query
        this.state = {
            curGoods: curGoods ? curGoods.obj : ""
        }
    }

    render() {
        return(
            <div>
                购物车 货物明细  ： <br/>
                { this.state.curGoods.name }  ---  { this.state.curGoods.brand }
            </div>
        )
    }
}

export default goodsDetails
