import React, { Component } from 'react'
import { Flex,InputItem,WingBlank,WhiteSpace,Button, Toast} from 'antd-mobile';
import {Link} from 'react-router-dom'
import {login} from '../../api/apis'
import './Login.scss'
export default class Login extends Component {
    state={
        user:'',
        pwd:'',
        olduser:'',//上一轮的用户名
        oldpwd:''//上一次输入的密码
    }
    render() {
        let {user,pwd}=this.state
        return (
            <div className='login-page'>
                <Flex justify="center">
                    <div>
                        <WhiteSpace size="lg" />
                        <WhiteSpace size="lg" />
                        <div className='logoBox'>
                            <img style={{ width: 120 }} src={require('../../assets/imgs/logo.png')} alt=''/>
                        </div>
                        <h3 className='logoTitle'>暖家</h3>
                    </div>
                </Flex>
                <WhiteSpace size="lg" />
                <WhiteSpace size="lg" />
                <WingBlank>
                    <InputItem
                        placeholder="请输入用户名"
                        clear
                        value={user}
                        onChange={(val)=>{this.setState({user:val})}}
                    >
                        <div style={{ backgroundImage: `url(${require('../../assets/imgs/user.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                    <InputItem
                        placeholder="请输入密码"
                        type='password'
                        clear
                        value={pwd}
                        onChange={(val)=>{this.setState({pwd:val})}}
                    >
                        <div style={{ backgroundImage:  `url(${require('../../assets/imgs/luck.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                    <WhiteSpace size="lg" />
                    <Button type="primary" onClick={this.clickLogin}>登录</Button><WhiteSpace />
                    <Flex justify="between">
                        <Link to='/reg'>手机快速注册</Link>
                        <Link to='/ferget'>忘记密码?</Link>
                    </Flex>
                </WingBlank>
                <Flex justify="center" align="end">
                    <p style={{color: '#ccc',position:"fixed",bottom:10}}>登录/注册及代表同意暖房屋交易APP相关协议</p>
                </Flex>
            </div>
        )
    }
    clickLogin=async()=>{
            //es7 async/await 解决异步嵌套（地狱回调问题）
        //promise从根源上并没有真正解决回调地狱问题！因为还是会嵌套！！！！
        //所以官方在es7的版本中加入了async/await用来彻底解决这个问题
        //它们只能在promise或者基于promise封装(axios)的内容上使用

        //防抖节流(性能优化)
        //防止用户短期内连续多次点击，发送相同请求，造成服务器资源浪费
        //处理方式：可以使用定时器，短期内只发送一次，也可判断值是否发生改变
         //es6
        // login(this.state.user, this.state.pwd).then((res) => {
        //     if(res.data === 'ok'){
        //         //登录成功
        //     }else{
        //         //登录失败
        //     }
        // })
          //axios是基于promise对象封装，所以接响应才是.then()
          //当前的用户和密码
          let user=this.state.user
          let pwd=this.state.pwd
           //如果当前用户名和密码和上一轮是一样的
           if(this.state.olduser===user && this.state.oldpwd===pwd) return
           //只要点击了就立马保存值
           this.setState({
               olduser:user,
               oldpwd:pwd
           })
           console.log('发请求啦')  
           //es7
           let res=await login(user,pwd)
           if(res.data==='ok'){
               //登录成功
               window.location.href='#/'
           }else{
               //登录失败
               Toast.fail('用户名或密码错误',2);
           }  
    }
}
