# vue比例指令
[![Build Status](https://travis-ci.org/MarxJiao/vue-proportion-directive.svg?branch=master)](https://travis-ci.org/MarxJiao/vue-proportion-directive)
根据元素宽度，按比例设置元素高度

# USE
## install 

```shell
npm install vue-proportion-directive --save
```

## code 
javascript

```javascript
import proportion from 'vue-proportion-directive';

Vue.use(proportion);

```

html
```html
<template>
    <!-- 这个元素的高度会是宽度的0.5倍 -->
    <div v-proportion="0.5">
        这里是头部
    </div>
</template>
```