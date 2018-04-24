# looploading组件
## API

#### 描述

> 轮播加载圆形进度条，分为静止的spot与加载中loadingSpot两种

### 使用

####利用Vue.components()方法进行全局注册

```javascript

import looploading from 'my-looploading'
import 'my-looploading/index.less'
var mylooploading = Vue.component(looploading().name, looploading().prop)

```

注册完成可在任意组件中使用，如下Demo

#### Demo

```javascript
<loop-loading
	:currentIndex="currentIndex"
	:spotData="spotTag"
	:marginLeft="20"
	:loadingFromBegin="loadingFromBegin"
	></loop-loading>
```

####Props
| Props          | 说明                                            | type    | default            |
| -------------- | --------------------------------------- | ------ | ------------------ |
| currentIndex     | "加载中loadingSpot"的下标                          | Number  | 0             |
| spotData         | spot基础数据，根据数组内元素个数决定spot的个数       | Array | []           |
| spotBetweenSpace | spot之间的间距                | Number | 16           |
| staticSpotBorderWidth | "静止spot"的边线宽度    |Number | 1    |
| staticSpotColor | "静止spot"的颜色    | String |'#000000'  |
| spotDimension | spot的直径    | Number | 6    |
| activeSpotBg | 加载中loadingSpot的背景颜色    | String |'efefef'|
| activeSpotMaskBg | 承载 "加载中loadingSpot" 的背景颜色    | String |'efefef'|
| progressTime | "加载中loadingSpot" 加载完成时间 （单位为秒）| Number | 7 |
| isPaused | 暂停动画状态 可选值为'paused'(暂停)/'running'(播放)| String | 'running' |