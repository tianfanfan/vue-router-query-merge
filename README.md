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
  replace() {
        // meas: router query replace
        this.$routerQrep({bar: 'bar'})
        // it will just change query ,and add more prop { bar: bar }, use replace.
        // 这个函数会添加新的 query ，并和旧的合并，并重定向。
  },
  jumpNew() {
        // meas: router new query push
        this.$routerNQrep({bar: 'bar'})
        // it will change query , only { bar: bar },use router.push
        // 这个函数会用全新的 query ，并跳转。
  },
  replaceNew() {
        // meas: router new query replace
        this.$routerNQrep({bar: 'bar'})
        // it will change query , only { bar: bar },use replace
        // 这个函数会添加新的 query ，并重定向。
  }
}
```

## Attribute
##### none
## License

[MIT](http://opensource.org/licenses/MIT)
