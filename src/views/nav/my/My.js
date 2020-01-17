import React, { Component } from 'react'
import { Flex, WhiteSpace, List } from 'antd-mobile'
import './my.scss'
const Item = List.Item;
export default class My extends Component {
    state = {
        myIcons: [
            { icon: 'jifeng.png', title: '我的积分' }, { icon: 'dingyue.png', title: '我的积分' }, { icon: 'lianxiren.png', title: '微聊联系人' },
            { icon: '' },
            { icon: 'jisuanqi.png', title: '房贷计算器' }, { icon: 'xingxing.png', title: '我的房子' },
            { icon: '' },
            { icon: 'jilu.png', title: '我的看房记录' }, { icon: 'user.png', title: '我的问答' },
            { icon: '' },
            { icon: 'shezhi01.png', title: '设置' }, { icon: 'shezhi.png', title: '意见反馈' }
        ]
    }
    render() {
        let { myIcons } = this.state
        return (
            <div className='my_pages'>
                {/* 头部样式 */}
                <div className='myHeader'>
                    <Flex justify='between'>
                        <div className='myTitle'>
                            <img src={require('../../../assets/imgs/avatar01.png')} alt='' />
                            <div>
                                <h3><span onClick={this.loginHandle}>登录</span>/<span onClick={this.regHandle}>注册</span></h3>
                                <p>可以与经纪人发起聊天</p>
                            </div>
                        </div>
                        <img src={require('../../../assets/imgs/shezhi.png')} style={{ width: 30 }} alt='' onClick={this.setUtils}/>
                    </Flex>
                    <WhiteSpace size="lg" />
                    <WhiteSpace size="lg" />
                    <Flex justify='around' className='myHeaderB'>
                        <div className='bottomItem'>
                            <h4>0</h4>
                            <img src={require('../../../assets/imgs/qianbao.png')} alt='' /><span>钱包</span>
                        </div>
                        <div className='bottomItem'>
                            <h4>0</h4>
                            <img src={require('../../../assets/imgs/youhui.png')} alt='' /><span>优惠</span>
                        </div>
                        <div className='bottomItem' style={{ border: 0 }}>
                            <h4>0</h4>
                            <img src={require('../../../assets/imgs/jifen.png')} alt='' /><span>积分</span>
                        </div>
                    </Flex>
                </div>
                {/* 主体列表部分 */}
                <div className='myMain'>
                    <List>
                        {
                            myIcons.map((val, i) => {
                                //有图标时
                                if(val.icon!==''){
                                    return <div key={i}>
                                    <Item arrow="horizontal" onClick={() => { }}><img src={require('../../../assets/imgs/' + val.icon)} alt='' />{val.title}</Item>
                                </div>
                                }else{
                                    return <div style={{width:'100%',height:10,backgroundColor:'#eee'}} key={i}></div>  
                                }
                            })
                        }
                    </List>
                </div>
            </div>
        )
    }
    loginHandle=()=>{
        window.location.href='#/login';
    }
    regHandle=()=>{
        window.location.href='#/reg';
    }
    setUtils=()=>{
        window.location.href='#/setting'
    }
}
