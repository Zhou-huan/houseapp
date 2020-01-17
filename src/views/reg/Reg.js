import React, { Component } from 'react'
import { Flex, Radio, InputItem, WingBlank, WhiteSpace, Button,Toast} from 'antd-mobile';
import { Link } from 'react-router-dom'
import './Reg.scss'
import {reg} from '../../api/apis'
export default class Reg extends Component {
    state={
        phone:'',
        pwd:'',
        user:'',
        code:''

    }
    render() {
        let {phone,pwd,code,user}=this.state
        return (
            <div>
                <WingBlank>
                    <WhiteSpace size="lg" />
                    <InputItem
                        type="phone"
                        placeholder="请输入手机号"
                        value={phone}
                        onChange={(val)=>{this.setState({phone:val})}}
                        clear
                    >
                    </InputItem>
                    <InputItem
                        type="text"
                        placeholder="请输入注册名"
                        value={user}
                        onChange={(val)=>{this.setState({user:val})}}
                        clear
                    >
                    </InputItem>
                    <WhiteSpace size="lg" />
                    <InputItem
                        placeholder="请输入密码"
                        type='password'
                        value={pwd}
                        onChange={(val)=>{this.setState({pwd:val})}}
                        clear
                    >
                    </InputItem>
                    <WhiteSpace size="lg" />
                    <InputItem
                        placeholder="请输入验证码"
                        type='text'
                        value={code}
                        onChange={(val)=>{this.setState({code:val})}}
                        clear
                    >
                    </InputItem>
                    <WhiteSpace size="lg" />
                    <Flex>
                        <Flex.Item>
                            <Radio className="my-radio" onChange={e => console.log('checkbox', e)}>我已同意</Radio>
                        </Flex.Item>
                        <Flex.Item style={{ padding: '15px 0', color: 'rgb(19, 73, 145)', flex: 'none' }}>《用户服务协议》及《隐私权政策》</Flex.Item>
                    </Flex>
                    <WhiteSpace size="lg" />
                    <WhiteSpace size="lg" />
                    <Button type="primary" onClick={this.regHandle}>注册</Button><WhiteSpace />
                    <Link to='/login'>已有账号</Link>
                </WingBlank>
            </div>
        )
    }
    regHandle=async()=>{
        //用户填入的用户名和密码
        let user=this.state.user
        let pwd=this.state.pwd
        let res=await reg(user,pwd)
        if(res.data==='ok'){
            //注册成功
            window.location.href='#/login'
        }else{
            //注册失败
            Toast.fail('注册失败！',2);
        }
    }
}
