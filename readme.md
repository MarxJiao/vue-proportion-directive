# vue比例指令
[![Build Status](https://travis-ci.org/MarxJiao/vue-proportion-directive.svg?branch=master)](https://travis-ci.org/MarxJiao/vue-proportion-directive)

根据元素宽度，按比例设置元素高度

Set element height proportionally based on element width

# Use

## Install 

```shell
npm install vue-proportion-directive --save
```

## Code

Setup

```javascript
import proportion from 'vue-proportion-directive';

Vue.use(proportion);
```

Simple example

```vue
<template>
    <!-- 这个元素的高度会是宽度的0.5倍 -->
    <div v-proportion="0.5">
        这里是头部
    </div>
</template>
```

YouTube example

```vue
<template>
    <!-- divide height / width to assign the correct proportion -->
    <iframe
      src="https://www.youtube.com/embed/y7b_AXyrQms"
      width="100%"
      v-proportion="9 / 16"
    ></iframe>
</template>
```
