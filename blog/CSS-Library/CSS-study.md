# CSS 技巧

## css实现文本溢出显示 ...

**单行文本 :**
```
overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;
当然还需要加宽度width属来兼容部分浏览。
```
**多行文本（如3行）**

```
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 3;
overflow: hidden;
```
>1、-webkit-line-clamp用来限制在一个块元素显示的文本的行数。 为了实现该效果，它需要组合其他的WebKit属性。常见结合属性：
2、display: -webkit-box; 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。
3、-webkit-box-orient 必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式 。

## postion fixed和transform的冲突

我们知道这里 fixed 默认参照对像是**可视窗口**，如果transformEle (父元素)使用了transform，而fixedEle (子元素)使用了position: fixed，那么position: fixed不会有固定在可视窗口上，实际结果相当于相对transformEle元素定位，**就是fixed相对的不是可视窗口，而是transformELe**, 产生这样的原因主要是因为**transform和position: fixed使用了不同的坐标系统**
