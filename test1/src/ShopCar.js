import React from 'react'
import './Common.css'


let inputStyle= {
    width:"50px"
};

class ShopCar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            goodsInfo: [
                { name: '冰箱', price: 360, num: 1, brand: '美的', flag: false },
                { name: '空调', price: 1360, num: 0, brand: '格力', flag: false },
                { name: '电池', price: 11, num: 0,  brand: '南孚', flag: false },
                { name: '洗衣机', price: 700, num: 0, brand: '美的', flag: false },
                { name: '电磁炉', price: 870, num: 0, brand: '苏泊尔', flag: false }
            ],
            sum:0,
            buyGoodsInfo:[],
        }
    }
    changeNum (event,curIndex){
        let curItem = this.state.goodsInfo[curIndex];
        curItem.num = event.target.value;
        this.state.goodsInfo.splice(curIndex,1,curItem);
        this.setState({
             goodsInfo: this.state.goodsInfo
        });
        this.sumGoodsCount();
        this.setBuyGoodsInfo()
    }
    sumGoodsCount (){
        let count = 0;
        this.state.goodsInfo.forEach((item)=>{
            count += item.num * item.price
        });
        this.setState({
            sum : count
        })
    }
    setBuyGoodsInfo(){
        let goodsInfo  = this.state.goodsInfo.filter((item)=>{
             return item.num > 0
        });
        this.setState({
            buyGoodsInfo : goodsInfo
        })
    }
    toGoodsDetails(item){
        this.props.history.push({
            pathname:"/ShopCar/Details",
            query: {
                obj: item
            }
        })
    }
    componentDidMount() {
        this.sumGoodsCount();
        this.setBuyGoodsInfo()
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>名称</th>
                            <th>品牌</th>
                            <th>价格</th>
                            <th>数量</th>
                            <th>总价</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.goodsInfo.map((item,index) => {
                             return(
                                 <tr key={index}>
                                     <th>{ item.name }</th>
                                     <th>{ item.brand }</th>
                                     <th>{ item.price }</th>
                                     <th><input type="text" value={ item.num }
                                                onChange={  (event) => this.changeNum(event,index) }
                                                style={ inputStyle }
                                                ref = '{"Num"+index }' /></th>
                                     <th>{ item.price * (item.num ? item.num : 0) }</th>
                                 </tr>
                             )
                        })
                    }
                    <tr>
                        <th> </th>
                        <th> </th>
                        <th> </th>
                        <th> </th>
                        <th>{ this.state.sum }</th>
                    </tr>
                    </tbody>
                </table>
                <table>
                    <thead>
                        <tr>
                            <th>已选择物品</th>
                            <th> </th>
                            <th> </th>
                            <th> </th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.buyGoodsInfo.map((item, index)=>{
                                return (
                                   <tr key={index} onClick={ () => this.toGoodsDetails(item) }>
                                     <th>{ item.name }</th>
                                     <th>{ item.price }</th>
                                     <th>{ item.num }</th>
                                     <th>{ item.num * item.price }</th>
                                   </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ShopCar
