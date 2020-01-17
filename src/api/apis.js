import axios from 'axios'
import qs from 'qs'
//请求
export const IP = 'http://127.0.0.1:82'   //公司的服务器
// export const IP = 'http://192.168.43.196:82'   //公司的服务器

const req=axios.create({
    baseURL:IP,
    timeout:10000
})
//export default全局暴露一次，如果出现多行export default，后面暴露的会覆盖前面的
//export 可以暴露多次，同时import时候需要解构{ xx } 才能拿到暴露的数据
export function login(acc,pwd){
    return req.post('/login.php',qs.stringify({acc,pwd}))
}
//获取你喜欢的房源列表/gethouselist.php
export var getHouseList=()=>{
    return req.get('/gethouselist.php')
}
//注册接口调试/reg.php
export function reg(acc,pwd){
    return req.post('/reg.php',qs.stringify({acc,pwd}))
}