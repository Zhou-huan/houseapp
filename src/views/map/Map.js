import React, { Component } from 'react'
import './map.scss'
export default class Map extends Component {
    render() {
        return (
            <div className='map'>
                <h3 className='mapTitle'><img src={require('../../assets/imgs/jiantou02.png')} style={{ width: 20, height: 20}} alt='' onClick={this.clickHandle} />&emsp;地图定位</h3>
                {/*1. 准备地图容器 */}
                <div id="mymap" style={{ width:'100%', height:'95%' }}></div>
            </div>
        )
    }
    componentDidMount(){
        var map = new window.AMap.Map("mymap", {
            resizeEnable: true,
            center: [116.397428, 39.90923],
            zoom: 13
        });
         //获取用户所在城市信息
        //实例化城市查询类
        var citysearch = new window.AMap.CitySearch();
        //自动获取用户IP，返回当前城市
        citysearch.getLocalCity(function(status, result) {
            if (status === 'complete' && result.info === 'OK') {
                if (result && result.city && result.bounds) {
                    var citybounds = result.bounds;
                    //地图显示当前城市
                    map.setBounds(citybounds);
                }
            } else {
                document.getElementById('info').innerHTML = result.info;
            }
        });
    }
    clickHandle=()=>{
        window.location.href = '#/nav';
    }
}
