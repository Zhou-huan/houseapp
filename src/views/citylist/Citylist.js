import React, { Component } from 'react'
import { WingBlank } from 'antd-mobile'
//引入json文件
import cityTypes from '../../json/citylist.json';
import './citylist.scss';
import BScroll from 'better-scroll'
export default class Citylist extends Component {
    state = {
        letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'W', 'X', 'Y', 'Z']
    }
    render() {
        return (
            <div className='citys'>
                <div></div>
                <div className='Title'>
                    <img src={require('../../assets/imgs/left.png')} style={{ width: 20, height: 20 }} alt='' onClick={this.clickHandle} />
                    <span className='titleCity'>选择城市</span>
                </div>
                <div id='left_box'>
                    <ul className='content'>
                        <div className='cityHeader'>
                            <WingBlank>
                                {/* 城市名称输入框 */}
                                <div className="search_input">
                                    <input type="text" placeholder="输入城市名进行搜索" data-act="search" data-mark="search" />
                                    <div className="search_res">
                                        <ul data-mark="result" style={{ display: 'none' }}><li>暂无结果</li></ul>
                                    </div>
                                </div>
                                {/* 选择城市 */}
                                <label>选择城市</label>
                                <div className='failLoad'>定位失败<img src={require('../../assets/imgs/genxing.png')} alt='' /></div>
                                <label>最近访问</label><br />
                                <div className="newSee">成都</div>
                                {/* 热门城市 */}
                                <label>热门城市</label>
                                <div className='popCitys'>
                                    <div>北京</div>
                                    <div>上海</div>
                                    <div>深圳</div>
                                </div>
                                <label>全部城市(按首字母顺序)</label>
                                <ul className='allLetter'>
                                    {
                                        cityTypes.map((val, i) => {
                                            return <li key={i}>{val.letter}</li>
                                        })
                                    }
                                </ul>
                            </WingBlank>
                        </div>

                        {/* 根据数据循环城市地址*/}
                        <WingBlank>
                            {
                                cityTypes.map((vals, n) => {
                                    return <div key={n} id={vals.letter}>
                                        <label>{vals.letter}</label>
                                        <ul className='cityItems'>
                                            {
                                                vals.cityitem.map((items, m) => {
                                                    return <li key={m}>{items}</li>
                                                })
                                            }
                                        </ul>
                                    </div>
                                })
                            }
                        </WingBlank>
                    </ul>
                </div>
                <div className='right_box' onTouchMove={this.moveTitle.bind(this)}>
                    {
                        cityTypes.map((val, n) => {
                            return <div key={n} onClick={this.clickRightTitle.bind(this, val.letter)} className='rightItem'>
                                {val.letter}
                            </div>
                        })
                    }
                </div>
            </div>
        )
    }
    clickHandle = () => {
        window.location.href = '#/nav'
    }
    clickRightTitle(title) {
        //让左侧面板调用scrollToElement滚动到指定元素上面
        this.leftBox.scrollToElement('#' + title, 600)
    }
    moveTitle(e){
        //获取第一根手指的触屏事件对象
        //console.log(e.touches[0].clientX,e.touches[0].clientY);//获取当前手指的触摸信息数组 如果想要获取当前手指的坐标，必须指定获取哪个手指的坐标
        let elt=document.elementFromPoint(e.touches[0].clientX,e.touches[0].clientY);
        // console.log(elt.innerHTML)
        //判断是当前滑动的区域是否是右侧的楼层div,如果是就执行滑动事件，否之不执行
        if(elt.className==='rightItem'){
            this.leftBox.scrollToElement('#' + elt.innerHTML, 600);
        }
    }
    componentDidMount() {
        //需要操作dom，故在此阶段
        this.leftBox = new BScroll('#left_box');
    }
}
