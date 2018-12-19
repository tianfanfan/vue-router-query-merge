# vue-router-query-merge

> a plugin for vue with rouer query push.

## How to use

```bash
$ npm install -S vue-router-query-merge
```

## Example

```javascript
// main.js
import Vue from 'vue'
import queryPushPlugin from 'vue-router-query-merge'

Vue.use(queryPushPlugin)

// foo.vue

methods:{
  jump() {
        // meas: router query push
        this.$routerQpush({bar: 'bar'})
        // it will just change query ,and add more prop { bar: bar } , use router.push.
        // 这个函数会添加新的 query ，并和旧的合并，并跳转。
  },
  redirect() {
        // meas: router query redirect
        this.$routerQrep({bar: 'bar'})
        // it will just change query ,and add more prop { bar: bar }
        // 这个函数会添加新的 query ，并和旧的合并，并重定向。
  },
  jumpNew() {
        // meas: router new query push
        this.$routerNQrep({bar: 'bar'})
        // it will just change query , only { bar: bar },use router.push
        // 这个函数会添加新的 query ，并和旧的合并，并重定向。
  }
}
```

## Attribute

## License

[MIT](http://opensource.org/licenses/MIT)
