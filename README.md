<p align="center">
<img src="https://github.com/CesiumGS/cesium/wiki/logos/Cesium_Logo_Color.jpg" width="50%" />
</p>

<p align="center">🌎 一款基于Cesium的三维角色控制器插件</p>

<p align="center">
  <a target="_black" href="https://www.npmjs.com/package/cesium-role-controller">
    <img alt="Npm version" src="https://img.shields.io/npm/v/cesium-role-controller.svg?style=flat&logo=npm&label=版本号" />
  </a>
  <a target="_black" href="https://www.npmjs.com/package/cesium-role-controller">
    <img alt="Npm downloads" src="https://img.shields.io/npm/dt/cesium-role-controller.svg?style=flat&logo=npm&label=下载量" />
  </a>
  <a target="_black" href="https://github.com/ShareQiu1994/CesiumRoleController">
    <img alt="GitHub stars" src="https://img.shields.io/github/stars/ShareQiu1994/CesiumRoleController?style=flat&logo=github" />
  </a>
</p>

# 演示地址

[http://devmodels.oss-cn-shenzhen.aliyuncs.com/devtest/liubofang/CesiumRoleController/index.html](http://devmodels.oss-cn-shenzhen.aliyuncs.com/devtest/liubofang/CesiumRoleController/index.html)


## 快速上手

```javascript
import CesiumRoleController from 'cesium-role-controller'

/*
import * as Cesium from 'cesium'
let viewer = Cesium.viewer({...})
*/

let controller = new CesiumRoleController(Cesium, viewer)
controller.init({
  position: [106.306177, 36.030691],
  url: 'http://devmodels.oss-cn-shenzhen.aliyuncs.com/devtest/liubofang/glb/foreigner_cesium.glb',
  animation: 'run',
})
```

## API文档

### options
| 名称 | 说明 | 类型 | 可选值 | 默认值 | 是否必选 |
| ---- | ---- | ---- | ----  | ----   |  ----   | 
| url  | 模型地址 | string  | - | - | 是
| position | 初始经纬度坐标 | array  | - | - | 是
| animation  | 模型动画名称 | string  | - | - | 否
| speed  | 运动速度 | number  | - | 1 | 否
| pitch  | 相机看向模型的俯仰角度 | number  | 0~-90 | -25 | 否
| lockViewLevel  | 相机看向模型的限制级别，等级由低到高，1为自由视角，3为全限制 | number  | 1~3 | 3 | 否
|range| 相机看向模型的视角范围 | number  | 0~99999 | 4 | 否

### method

 名称 | 说明 | 参数 | 参数类型 | 返回值 | 使用方法 |
 | ---- | ---- | ---- | ----  | ----   |  ----   | 
 |init | 初始化 | options | object | void |  controller.init({...}) |
| destory | 销毁 | - | - | void |  controller.destory() |

## 注意事项

1. 本插件基于Cesium 104+以上版本进行开发，如需兼容早期版本，可自行修改源码
2. 通过键盘W/S/A/D控制人物移动和鼠标控制相机视角
3. 当在启用地形的地图下时 可以把speed和range设置大一些 如speed:10 range:1000

## 版权说明

1. cesium-role-controller 插件由[liubf](http://liubf.com/)自主研发，拥有所有权利。
2. 任何个人或组织可以在遵守相关要求下可以免费无限制使用。

## 版本日志

#### 1.0.0 2023/06/07
   1. 添加初始化配置参数
   2. 添加初始化方法
#### 1.0.1 2023/06/08
   1. 修复配置文件参数拼写错误 参数lookViewLevel 修改为lockViewLevel   
#### 1.0.2 2023/06/08
   1. 修复自由视角下相机飘的问题
#### 1.0.3 2023/06/08
   1. 修复自由视角下多个按键按下相机飘的问题    
## 示例视频

[贴合地形视频](https://devmodels.oss-cn-shenzhen.aliyuncs.com/devtest/liubofang/video/bandicam%202023-06-06%2015-27-18-935.mp4)

<video controls height='100%' width='100%' src="https://devmodels.oss-cn-shenzhen.aliyuncs.com/devtest/liubofang/video/bandicam%202023-06-06%2015-27-18-935.mp4"></video>

[贴合3dtiles视频](https://devmodels.oss-cn-shenzhen.aliyuncs.com/devtest/liubofang/video/bandicam%202023-06-08%2011-42-19-692.mp4)


<video controls height='100%' width='100%' src="https://devmodels.oss-cn-shenzhen.aliyuncs.com/devtest/liubofang/video/bandicam%202023-06-08%2011-42-19-692.mp4"></video>
