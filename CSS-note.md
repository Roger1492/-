# CSS学习笔记

>## 1   [CSS选择器](http://www.runoob.com/cssref/css-selectors.html)  http://www.runoob.com/cssref/css-selectors.html  



> ## 2  阴影  box-shadow: 0 0 0 #333; 
>
> 第一个值表示X偏移（正为向右偏移，负为向左偏移），
>
> 第二个值表示Y偏移（正为向下偏移，负为向上偏移），
>
> 第三个值表示模糊程度，数值越大越模糊，
>
> 第四个值表示颜色。


> ## 3  文本阴影  text-shadow: 1px 1px 1px #333；
>
> 右偏移，下偏移，模糊程度，颜色


> ## 4  圆角 border-radius: 10px 10px 10px 10px;
>
> 左上，右上，右下，左下。如果写一个值则表示全部的角都有相同大小，两个值表示（左上，右下），（右上，左下）对角线的角。还有一种写法 10px/20px


> ## 5.1 线性渐变  background: linear-gradient(*direction*, *color-stop1*, *color-stop2, ...*);
>
> ```css
>  background: -webkit-linear-gradient(red, blue); /* Safari 5.1 - 6.0 */
>  background: -o-linear-gradient(red, blue); /* Opera 11.1 - 12.0 */
>  background: -moz-linear-gradient(red, blue); /* Firefox 3.6 - 15 */
>  background: linear-gradient(red, blue); /* 标准的语法（必须放在最后） */
> ```


> ## 5.2  径向渐变 background: radial-gradient(*center, shape size, start-color, ..., last-color*);
>
> ```css
> background: -webkit-radial-gradient(red, green, blue); /* Safari 5.1 - 6.0 */
> background: -o-radial-gradient(red, green, blue); /* Opera 11.6 - 12.0 */
> background: -moz-radial-gradient(red, green, blue); /* Firefox 3.6 - 15 */
> background: radial-gradient(red, green, blue); /* 标准的语法 */
> ```