import React, { Component } from 'react'
import './search.scss'
export default class Search extends Component {
    render() {
        return (
            <div className='search'>
                <div className='searchTitle'>
                    <div  onClick={this.clickHandle} className='imgBox'><img src={require('../../assets/imgs/jiantou.png')} alt=''/></div>
                    <select>
                        <option>成都</option>
                        <option>上海</option>
                        <option>广州</option>
                    </select>
                    <input type='text'className='inputBox' placeholder='请输入小区或商圈名称'/>
                    <div className='imgBox'><img src={require('../../assets/imgs/search01.png')} alt=''/></div>
                </div>
            </div>
        )
    }
    clickHandle=()=>{
        window.location.href='#/nav'
    }
}
