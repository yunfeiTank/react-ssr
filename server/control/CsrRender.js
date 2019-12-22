/**
 * @description: 开启csr; 判断依据   服务器负载过高，内存不足，router传参启动
 * @author: yunfei
 * @time : 2019/12/21
 */
const path = require('path');
const fs = require('fs');

function CsrRender(res) {
    // 读取csr文件；返回
    const filename = path.resolve(process.cwd(),'public/index.csr.html')
    // console.log(filename)
    const html = fs.readFileSync(filename,'utf-8');
    return res.send(html)
}
export default CsrRender;