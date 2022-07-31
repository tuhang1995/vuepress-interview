import{_ as n,o as s,c as a,d as t}from"./app.7686b0dd.js";const p={},o=t(`<h1 id="\u5B8F\u4EFB\u52A1\u548C\u5FAE\u4EFB\u52A1" tabindex="-1"><a class="header-anchor" href="#\u5B8F\u4EFB\u52A1\u548C\u5FAE\u4EFB\u52A1" aria-hidden="true">#</a> \u5B8F\u4EFB\u52A1\u548C\u5FAE\u4EFB\u52A1</h1><ol><li>\u4ECE <strong>\u5B8F\u4EFB\u52A1</strong> \u961F\u5217 (\u4F8B\u5982<code>script</code>)\u4E2D\u51FA\u961F \u5E76\u6267\u884C\u6700\u65E9\u7684\u4EFB\u52A1</li><li>\u6267\u884C\u6240\u6709\u7684 <strong>\u5FAE\u4EFB\u52A1</strong></li></ol><ul><li>\u5F53\u5FAE\u4EFB\u52A1\u961F\u5217\u975E\u7A7A\u65F6 <ul><li>\u6267\u884C\u6700\u65E9\u7684\u5FAE\u4EFB\u52A1</li></ul></li></ul><ol start="3"><li>\u5982\u679C\u6709\u53D8\u66F4, \u5219\u5C06\u53D8\u66F4\u6E32\u67D3\u51FA\u6765</li><li>\u5982\u679C\u5B8F\u4EFB\u52A1\u961F\u5217\u4E3A\u7A7A, \u5219\u4F11\u7720\u76F4\u5230\u51FA\u73B0\u5B8F\u4EFB\u52A1</li><li>\u8F6C\u5230\u6B65\u9AA41</li></ol><p>\u5B89\u6392\u4E00\u4E2A\u65B0\u7684\u5B8F\u4EFB\u52A1</p><ul><li>\u4F7F\u7528\u96F6\u5EF6\u8FDF\u7684 <code>setTimeout(f)</code></li></ul><table><thead><tr><th>\u5B8F\u4EFB\u52A1</th><th>\u5FAE\u4EFB\u52A1</th></tr></thead><tbody><tr><td>setTimeout</td><td>promise.then</td></tr><tr><td>setInterval</td><td>process.nextTick</td></tr><tr><td>js\u4E3B\u4EE3\u7801</td><td>-</td></tr></tbody></table><ol><li>new Promise\u4F1A\u7ACB\u5373\u6267\u884C(new \u662F\u65F6\u5019\u662F\u540C\u6B65\u7684)</li><li>.then\u662F\u5FAE\u4EFB\u52A1 \u6240\u4EE5new Promise\u4E2D\u7684\u4EE3\u7801\u6267\u884C\u540E \u6267\u884C\u5B8C\u5168\u90E8\u5B8F\u4EFB\u52A1 \u624D\u4F1A\u5728\u6267\u884C\u5FAE\u4EFB\u52A1 \u5C31\u662F.then</li><li>\u5982\u679C\u5728\u5F53\u524D\u5B8F\u4EFB\u52A1\u4E2D\u521B\u5EFA\u4E86\u5FAE\u4EFB\u52A1, \u5148\u6267\u884C\u5916\u90E8\u7684\u5FAE\u4EFB\u52A1, \u5728\u6267\u884C\u91CC\u9762\u7684\u5FAE\u4EFB\u52A1</li></ol><p><strong>\u770B\u770B\u5B9E\u9645\u8F93\u51FA</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7ED3\u679C\u89E3\u6790:</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u7B2C\u4E00\u884C\u7ACB\u5373\u6267\u884C\uFF0C\u5B83\u8F93\u51FA \`1\`\u3002</span>
<span class="token comment">// \u5230\u76EE\u524D\u4E3A\u6B62\uFF0C\u5B8F\u4EFB\u52A1\u961F\u5217\u548C\u5FAE\u4EFB\u52A1\u961F\u5217\u90FD\u662F\u7A7A\u7684\u3002</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \`setTimeout\` \u5C06\u56DE\u8C03\u6DFB\u52A0\u5230\u5B8F\u4EFB\u52A1\u961F\u5217\u3002</span>
<span class="token comment">// - \u5B8F\u4EFB\u52A1\u961F\u5217\u4E2D\u7684\u5185\u5BB9\uFF1A</span>
<span class="token comment">//   \`console.log(2)\`</span>

Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u5C06\u56DE\u8C03\u6DFB\u52A0\u5230\u5FAE\u4EFB\u52A1\u961F\u5217\u3002</span>
<span class="token comment">// - \u5FAE\u4EFB\u52A1\u961F\u5217\u4E2D\u7684\u5185\u5BB9\uFF1A</span>
<span class="token comment">//   \`console.log(3)\`</span>

Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u5E26\u6709 \`setTimeout(...4)\` \u7684\u56DE\u8C03\u88AB\u9644\u52A0\u5230\u5FAE\u4EFB\u52A1\u961F\u5217\u3002</span>
<span class="token comment">// - \u5FAE\u4EFB\u52A1\u961F\u5217\u4E2D\u7684\u5185\u5BB9\uFF1A</span>
<span class="token comment">//   \`console.log(3); setTimeout(...4)\`</span>

Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u56DE\u8C03\u88AB\u6DFB\u52A0\u5230\u5FAE\u4EFB\u52A1\u961F\u5217</span>
<span class="token comment">// - \u5FAE\u4EFB\u52A1\u961F\u5217\u4E2D\u7684\u5185\u5BB9\uFF1A</span>
<span class="token comment">//   \`console.log(3); setTimeout(...4); console.log(5)\`</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \`setTimeout\` \u5C06\u56DE\u8C03\u6DFB\u52A0\u5230\u5B8F\u4EFB\u52A1\u961F\u5217</span>
<span class="token comment">// - \u5B8F\u4EFB\u52A1\u961F\u5217\u4E2D\u7684\u5185\u5BB9\uFF1A</span>
<span class="token comment">//   \`console.log(2); console.log(6)\`</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u7ACB\u5373\u8F93\u51FA 7</span>

<span class="token comment">// \u6700\u7EC8\u7ED3\u679C\u4E3A: 1 7 3 5 2 6 4</span>

<span class="token comment">/* \u603B\u7ED3\u4E00\u4E0B: 
1. \u7ACB\u5373\u8F93\u51FA\u6570\u5B57 1 \u548C 7\uFF0C\u56E0\u4E3A\u7B80\u5355\u7684 console.log \u8C03\u7528\u6CA1\u6709\u4F7F\u7528\u4EFB\u4F55\u961F\u5217\u3002
2. \u7136\u540E\uFF0C\u4E3B\u4EE3\u7801\u6D41\u7A0B\u6267\u884C\u5B8C\u6210\u540E\uFF0C\u5F00\u59CB\u6267\u884C\u5FAE\u4EFB\u52A1\u961F\u5217\u3002
  \u5176\u4E2D\u6709\u547D\u4EE4\u884C\uFF1Aconsole.log(3); setTimeout(...4); console.log(5)\u3002
  \u8F93\u51FA\u6570\u5B57 3 \u548C 5\uFF0CsetTimeout(() =&gt; console.log(4)) \u5C06 console.log(4) \u8C03\u7528\u6DFB\u52A0\u5230\u4E86\u5B8F\u4EFB\u52A1\u961F\u5217\u7684\u5C3E\u90E8\u3002
  \u73B0\u5728\u5B8F\u4EFB\u52A1\u961F\u5217\u4E2D\u6709\uFF1Aconsole.log(2); console.log(6); console.log(4)\u3002
3. \u5F53\u5FAE\u4EFB\u52A1\u961F\u5217\u4E3A\u7A7A\u540E\uFF0C\u5F00\u59CB\u6267\u884C\u5B8F\u4EFB\u52A1\u961F\u5217\u3002\u5E76\u8F93\u51FA 2\u30016 \u548C 4\u3002
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),e=[o];function c(l,i){return s(),a("div",null,e)}var k=n(p,[["render",c],["__file","ui-misc.html.vue"]]);export{k as default};