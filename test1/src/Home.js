import React from 'react'
import './Common.css'
import Img1 from './Images/1.jpg'
import Img2 from './Images/2.jpg'
import Img3 from './Images/3.jpg'
import Img4 from './Images/4.jpg'


const imgStyle ={
     height:"150px",
     width:"100%"
};


class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            ImgList : [Img1, Img2, Img3, Img4],
            curIndex:0
        };
        this.autoPlay =  this.autoPlay.bind(this);
        this.play =  this.play.bind(this)
    }
    play (){
        setInterval(this.autoPlay ,2000)
    }
    autoPlay (){
        this.setState({
            curIndex: ( ++this.state.curIndex ) >= this.state.ImgList.length ?  0 : this.state.curIndex
        })
    }
    componentDidMount() {
        this.play()
    }

    render() {
        return (
            <div>
                {
                    this.state.ImgList.map((item,index) => {
                        return (
                            <img src={ item } key={ index } style={ imgStyle }
                                 className={ this.state.curIndex !== index ? 'hide':"" }  alt="" />
                        )
                    })
                }

            </div>
        )
    }
}

export default Home
