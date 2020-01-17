import React, { Component } from 'react'
import { Carousel, Flex, WhiteSpace, WingBlank, Grid } from 'antd-mobile';
import './Main.scss'
import { getHouseList, IP } from '../../../api/apis';
import BScroll from 'better-scroll'
//引入后端的IP
const dataMuue = [
    { icon: require('../../../assets/imgs/xingfang.png'), text: '新房' },
    { icon: require('../../../assets/imgs/ershou.png'), text: '二手房' },
    { icon: require('../../../assets/imgs/zufang.png'), text: '租房' },
    { icon: require('../../../assets/imgs/shangpu.png'), text: '商铺写字楼' },
    { icon: require('../../../assets/imgs/maifang.png'), text: '买房' },
    { icon: require('../../../assets/imgs/haiwai.png'), text: '海外房产' },
    { icon: require('../../../assets/imgs/xiaoqu.png'), text: '小区房' },
    { icon: require('../../../assets/imgs/wenda.png'), text: '问答' },
]
export default class Main extends Component {
    state = {
        data: ['bg01', 'bg02', 'bg03'],
        imgHeight: 176,
        //房产百科数据
        propertyList: [
            { icon: 'daikuan.png', title: '我要贷款' },
            { icon: 'jisuan.png', title: '房贷计算' },
            { icon: 'zhishi.png', title: '知识' },
            { icon: 'saosao.png', title: '扫一扫' }
        ],
        listDatas: [],
        //初始地图显示
        myCity: '定位中'
    }
    render() {
        let { listDatas, propertyList, myCity } = this.state
        return (
            <div className='main'>
                <div id='mainBox'>
                    <ul className='content'>
                        {/* 搜索框顶部 */}
                        <Flex justify="between" align='center' style={{ width: '100%', height: 40, backgroundColor: ' rgb(73, 126, 224)', padding: '0 10px' }}>
                            <div className='citySlet' onClick={this.clickHandle.bind(this, '#/citylist')}>{myCity}▼</div>
                            <div className='search' onClick={this.clickHandle.bind(this, '#/search')}>挑好房，上暖家APP</div>
                            <img src={require('../../../assets/imgs/dingwei.png')} style={{ width: 30, height: 30 }} alt='' onClick={this.clickHandle.bind(this, '#/map')} />
                        </Flex>
                        {/* 轮播banner */}
                        <Carousel
                            //autoplay	是否自动切换	Boolean	false
                            //infinite	是否循环播放	Boolean	false
                            //afterChange	切换面板后的回调函数	(current: number): void	无
                            //beforeChange	切换面板前的回调函数	(from: number, to: number): void	无
                            autoplay
                            infinite
                        /*   beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)} */
                        >
                            {this.state.data.map(val => (
                                <img
                                    key={val}
                                    src={`${require(`../../../assets/imgs/${val}.jpg`)}`}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top', height: 200 }}
                                    onLoad={() => {
                                        // 防火窗调整事件大小以更改高度
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            ))}
                        </Carousel>
                        {/* 图标菜单区 */}
                        <div className='iconMune'>
                            <Grid data={dataMuue} hasLine={false} />
                        </div>
                        {/* 房产全百科 */}
                        <div style={{ marginTop: 10 }} className='houseIcon'>
                            <WingBlank>
                                <Flex justify='start'>
                                    <h3 style={{ color: '#11c066', fontSize: 18 }}>房产全百科</h3>
                                    <p style={{ fontSize: 14, marginLeft: 10 }}>专业的买房攻略</p>
                                </Flex>
                                <WhiteSpace size="lg" />
                                <Flex justify='around'>
                                    {
                                        propertyList.map((item, i) => <div key={i}>
                                            <img src={require('../../../assets/imgs/' + item.icon)} style={{ width: 30, height: 30 }} alt='' />
                                            <p>{item.title}</p>
                                        </div>
                                        )
                                    }
                                </Flex>
                            </WingBlank>
                        </div>
                        {/* 猜你喜欢 */}
                        <div style={{ marginTop: 10, backgroundColor: '#fff', padding: '10px 0' }}>
                            <WingBlank>
                                <Flex justify='start'>
                                    <h3 style={{ color: '#000', marginLeft: 10 }}>猜你喜欢</h3>
                                </Flex>
                                {
                                    listDatas.map((val, i) => {
                                        return <Flex justify='between' style={{ margin: '10px 0' }} key={i}>
                                            <Flex justify='between' align='start'>
                                                <img src={IP + val.imgs} style={{ width: 90, height: 90 }} alt='' />
                                                <div style={{ marginLeft: 10, lineHeight: 1.5 }}>
                                                    <h4 style={{ color: '#000', fontSize: 18 }}>{val.name}</h4>
                                                    <span>{val.area}&nbsp;{val.range}</span><br />
                                                    <span>{val.type}&nbsp;{val.point}平方米</span>
                                                </div>
                                            </Flex>
                                            <h4 style={{ color: 'red' }}>{val.price}/平</h4>
                                        </Flex>

                                    })
                                }
                            </WingBlank>
                        </div>
                    </ul>
                </div>
            </div>
        )
    }
    //通知函数，组件已经挂载完成，用户发ajax请求
    componentDidMount() {
        new BScroll('#mainBox',{
            click:true//派发点击事件(当设置此属性以后，点击事件才会生效)
        });
        //this存储
        let _this = this;
        //实例化城市查询类
        var citysearch = new window.AMap.CitySearch();
        //自动获取用户IP，返回当前城市
        citysearch.getLocalCity(function (status, result) {
            if (status === 'complete' && result.info === 'OK') {
                if (result && result.city && result.bounds) {
                    var cityinfo = result.city;
                    //   var citybounds = result.bounds;
                    _this.setState({
                        myCity: cityinfo
                    })
                    //地图显示当前城市
                    //   map.setBounds(citybounds);
                }
            } else {
                document.getElementById('info').innerHTML = result.info;
            }
        });
        getHouseList().then(res => {
            // console.log(res.data)
            this.setState({
                listDatas: res.data
            })
        })
    }
    //为城市按钮添加点击事件
    clickHandle(href) {
        window.location.href = href
    }
    //abort()方法收到了相应不执行代码，但是不能避免定时器带来的对state数据的操作。
    //卸载阶段注销定时器和异步请求(请求发出就不能停止)
    //这段代码的意思就是把组件的setState函数设置为一个进去就return的函数
    //这段代码为什么说是万金油？？因为这段代码的意思就是不管你后面是什么方式来设置state，都直接return不处理，防止内存泄漏！
    componentWillUnmount() {
        this.setState = (state, callback) => {
            return
        }
    }
}
