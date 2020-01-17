import React, { Component } from 'react'
import {List } from 'antd-mobile';
import './Sets.scss';
import BScroll from 'better-scroll'
const Item = List.Item;
export default class Set extends Component {
    state={
        mytext:['','账号管理','手机号码','','账号安全','暖家vip会员中心','','消息通知','','隐私','辅助功能','','关于暖家','通用','帮助','','开通会员','我的','插件','','忽扰模式','切换账号']
    }
    render() {
        let {mytext}=this.state;
        return (
            <div className='setPage'>
                {/* 顶部Title */}
                <div className='header'>
                    <img src={require('../../assets/imgs/jiantou02.png')} alt='' style={{width:18}} onClick={this.imgHandle}/> 
                    设置
                </div>
                               {/* 主体列表部分 */}
                <div id='myMain'>
                    <ul className='content'>
                        <List>
                            {
                                mytext.map((val, i) => {
                                    //有图标时
                                    if(val!==''){
                                        return <div key={i}>
                                        <Item arrow="horizontal" onClick={() => { }}>{val}</Item>
                                    </div>
                                    }else{
                                        return <div style={{width:'100%',height:10,backgroundColor:'#eee'}} key={i}></div>  
                                    }
                                })
                            }
                        </List>
                    </ul>
                </div>
            </div>
        )
    }
    imgHandle=()=>{
        window.location.href = '#/my'
    }
    componentDidMount(){
        new BScroll('#myMain',{
            click:true
        });
    }
}
