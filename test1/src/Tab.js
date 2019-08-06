import React  from 'react'
import { getTabList } from "./api";
import './Common.css'
import { NavLink } from "react-router-dom";



class Tab extends React.Component{
    constructor(props){
         super(props);
         this.state = {
             tabList: [],
             treeData: [
                 {
                     id: '1',
                     menuName: '笑傲江湖',
                     menuCode: '1',
                     children: [
                         {
                             menuName: '令狐冲',
                             menuCode: '10'
                         },
                         {
                             menuName: '东方不败',
                             menuCode: '11',
                             children: [
                                 {
                                     menuName: '西方失败',
                                     menuCode: '110'
                                 }
                             ]
                         }
                     ]
                 },
                 {
                     id: '2',
                     menuName: '射雕英雄',
                     menuCode: '2',
                     children: [
                         {
                             menuName: '蓉儿',
                             menuCode: '20'
                         },
                         {
                             menuName: '郭靖',
                             menuCode: '21'
                         }
                     ]
                 }
             ]
         }
    }
     componentDidMount() {
        getTabList().then((data)=>{
             this.setState({
                 tabList: data.data
             })
        })
     }
    render() {
         return (
             <div>
                 {/*<ul className={'headerUl'} >
                     { this.state.tabList.map((item, index)=>{
                         return (
                             <li className="headerLi" key={index}>
                                 <NavLink  to={ item.Component }
                                           activeClassName="on" exact> { item.Name } </NavLink>
                             </li>
                         )
                     })
                     }
                 </ul>*/}
                 <ul className={"headerUl"}>
                     <NavLink to="/"  className={"headerLi"}  activeClassName={"on"} exact> Home </NavLink>
                     <NavLink to="/HelloWorld"  className={"headerLi"}  activeClassName={"on"} exact> HelloWorld </NavLink>
                     <NavLink to="/ShopCar"  className={"headerLi"} activeClassName={"on"} exact> ShopCar </NavLink>
                     <NavLink to="/Other" className={"headerLi"}  activeClassName={"on"} exact> Other </NavLink>
                 </ul>
                 { this.props.children }
             </div>

         )
     }
}

export default  Tab
