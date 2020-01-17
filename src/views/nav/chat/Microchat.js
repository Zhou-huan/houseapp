import React, { Component } from 'react'
import './microchat.scss'
export default class Microchat extends Component {
    state={
        role:['齐天大圣','白龙马','天蓬元帅','卷帘大将','圣僧'],
        messages:[],
        content:'',
        roleitem:'',
    }
    render() {
        let {role,roleitem,content,messages} =this.state
        return (
            <div className='microchat'>
                <div className='isonline'><img src={require('../../../assets/imgs/jiantou.png')} style={{width:20,height:20}} alt='' onClick={this.backHandle}/>  对方在线...</div>
                 <ul className='list'>
                   {messages.map((val,i)=>{
                       return <li key={i}>
                       <span className="avatar">{val.roleitem}</span>
                       <span className='contenBox'>:{val.content}</span>
                   </li>
                   })}
                </ul>
                <div className='footer'>
                    <select id='change' value={roleitem} onChange={(e)=>{ this.setState({ roleitem:e.target.value })}}>
                        {
                           role.map((val)=>{
                           return <option key={val}>{val}</option>
                           })
                        }
                    </select>
                    <textarea id='content' cols="40" rows="3" value={content} onChange={(event)=>{ this.setState({ content:event.target.value })}}></textarea>
                    <img src={require('../../../assets/imgs/fasong.png')} alt='' onClick={this.sendMsg}/>
                </div>
            </div>
        )
    }
    sendMsg=()=>{
        this.setState({
            messages:[...this.state.messages,{ roleitem:this.state.roleitem, content:this.state.content}],
            content:''
        })
    }
    backHandle=()=>{
        window.location.href='#/nav'
    }
}
