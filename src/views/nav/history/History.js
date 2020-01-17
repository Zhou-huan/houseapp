import React, { Component } from 'react'
import { WingBlank, Flex } from 'antd-mobile';
import './history.scss'
export default class History extends Component {
    state = {
        listDatas: []
    }
        //通知函数，组件已经挂载完成，用户发ajax请求
        componentDidMount(){
       
        }
    render() {
        let { listDatas } = this.state
        return (
            <div className='history'>
                {/* 头部 */}
                <h3 className='setting'>管理</h3>
                {/* 主体部分 */}
                <div className='historyMain'>
                    <div style={{ marginTop: 10, backgroundColor: '#fff', padding: '10px 0' }}>
                        <WingBlank>
                            <Flex justify='start'>
                                <span style={{ color: '#000', marginLeft: 10 }}>2019-12-23</span>
                            </Flex>
                        </WingBlank>
                    </div>
                </div>
            </div>
        )
    }
}
