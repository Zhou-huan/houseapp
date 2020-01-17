import React, { Component } from 'react'
import { TabBar } from 'antd-mobile';
import './Nav.scss'
import Main from './main/Main'
import Chat from './chat/Chat'
import History from './history/History'
import My from './my/My'
export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'main',
            iconlist: [{ title: '首页', key: 'main', icon: 'icon_main', sicon: 'icon_main_s' },
        { title: '微聊', key: 'chat', icon: 'icon_chat', sicon: 'icon_chat_s' },
        { title: '足迹', key: 'history', icon: 'icon_history', sicon: 'icon_history_s' },
        { title: '我的', key: 'my', icon: 'icon_my', sicon: 'icon_my_s' }]
        };
    }

    renderContent() {
          //区分一下当前点击的到底谁？？？当前选中的标签是谁
        //根据当前选中的状态，判断返回哪个组件加载到屏幕
        switch (this.state.selectedTab) {
            case 'main':return <Main/>
            case 'chat':return <Chat/>
            case 'history':return <History/>
            case 'my':return <My/>
            default:
                return <Main/>
        }
    }

    render() {
        return (
            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                <TabBar
                    //unselectedTintColor	未选中的字体颜色	String	'#888'
                    unselectedTintColor="#949494"
                    //tintColor	选中的字体颜色	String	#108ee9
                    tintColor="#33A3F4"
                    //barTintColor	tabbar 背景色	String	white
                    barTintColor="white"
                    //hidden	是否隐藏	Boolean	false
                >
                     {
                        this.state.iconlist.map(val=>{
                            return <TabBar.Item
                            title={val.title}//标题
                            key={val.key}//唯一标识
                            //未选中图标
                            icon={<div style={{
                                width: '24px',
                                height: '24px',
                                background: `url(${require('../../assets/imgs/'+val.icon+'.png')}) center center /  24px 24px no-repeat`
                            }}
                            />
                            }
                            //选中图标
                            selectedIcon={<div style={{
                                width: '24px',
                                height: '24px',
                                background: `url(${require('../../assets/imgs/'+val.sicon+'.png')}) center center /  24px 24px no-repeat`
                            }}
                            />
                            }
                            selected={this.state.selectedTab === val.key}
                            //badge	徽标数	Number \ String	无
                            // badge={1}
                            onPress={() => {
                                this.setState({
                                    selectedTab:val.key,
                                });
                            }}
                        >
                            {this.renderContent()}
                        </TabBar.Item>     
                        })
                    }
                   
                </TabBar>
            </div>
        );
    }
}