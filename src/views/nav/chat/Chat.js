import React, { Component } from 'react'
import { Flex,Button,WhiteSpace} from 'antd-mobile'

export default class Chat extends Component {
    render() {
        return (
            <Flex justify='center' style={{width:'100%',height:'100%',backgroundColor:'#d1eef2',color:'#666',fontSize:18}}>
                <Flex justify='center' direction='column' style={{width:300,height:250,backgroundColor:'#fff'}}>
                    <img src={require('../../../assets/imgs/avatar.png')} style={{ width: 80, height: 80 }} alt='' />
                    <WhiteSpace size="lg" />
                    <span>职业顾问：<strong style={{color:'green'}}>易欢欢</strong></span>
                    <WhiteSpace size="lg" />
                    <span>专业服务诚信做人，诚信做事！</span>
                    <WhiteSpace size="lg" />
                    <WhiteSpace size="lg" />
                    <Button type="primary" style={{width:100,height:40,fontSize:16}} onClick={this.clickHandle}>我要聊天</Button>
                </Flex>
            </Flex>
        )
    }
    clickHandle=()=>{
        window.location.href='#/microchat'
    }
}
