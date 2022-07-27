
# HTML 介绍

## 什么是 HTML

### tuhang!
::: tip 

Markdown文件最终被Vuepress处理成html文件，所以可以使用vue的单页面开发

:::



<div id="root">
    {{msg}}
    <button @click="greet">Geet！</button>
</div>


::: details 点击查看代码

```js
<div id="root">
    {{msg}}
    <button @click="greet">Geet！</button>
</div>
<script>
export default {
    setup(){
        const msg = 'Vuepress Using Vue'
        return {
            msg
        }
    },
    methods: {
        greet(e){
            alert('😁'+this.msg)
        }
    }
}
</script>
```

:::







<script>

export default {
    setup(){
        const msg = 'Vuepress Using Vue'
        return {
            msg
        }
    },
    methods: {
        greet(e){
            alert('😁'+this.msg)
        }
    }
}
</script>