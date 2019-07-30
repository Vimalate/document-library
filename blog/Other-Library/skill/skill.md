## 树状结构变一维数组

```js
flatten(arr) {
  return [].concat(...arr.map(item=>[].concat(item,...flatten(item.subitems))))
}
```

## ellipsis 指定宽度

## vue移动端禁止页面整体下拉

```js
#app {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    background: #7d8188;
    overflow: hidden;
    -webkit-overflow-scrolling: touch;
  }
  ```