import  { getTabList } from "./api";
import  React  from 'react'
import {BrowserRouter, Route} from "react-router-dom";
import  './Common.css'
import  Tab from './Tab'
import HelloWorld from './HelloWorld'
import Home from './Home'
import ShopCar from './ShopCar'
import Details from './Details'
import Other from './Other'


class Router extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tabList: [],
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
            <BrowserRouter>
                <Route render={()=>
                    <Tab>
                        <Route  exact path="/" component={ Home }/>
                        <Route  exact path='/HelloWorld' component={ HelloWorld } />
                        <Route  exact path='/ShopCar'  component={ ShopCar } />
                        <Route  exact path='/Other' component={ Other }/>
                    </Tab>
                }>
                </Route>
                <Route path="/ShopCar/Details" component={ Details } />
            </BrowserRouter>
        )
    }
}

export default Router
