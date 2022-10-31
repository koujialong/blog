import{_ as s,c as n,o as a,a as l}from"./app.f116f034.js";const i=JSON.parse('{"title":"vue3 ref","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4F5C\u7528","slug":"\u4F5C\u7528","link":"#\u4F5C\u7528","children":[]},{"level":2,"title":"\u539F\u7406","slug":"\u539F\u7406","link":"#\u539F\u7406","children":[]},{"level":2,"title":"\u7279\u70B9","slug":"\u7279\u70B9","link":"#\u7279\u70B9","children":[]},{"level":2,"title":"ref \u5728\u6A21\u677F\u4E2D\u7684\u89E3\u5305","slug":"ref-\u5728\u6A21\u677F\u4E2D\u7684\u89E3\u5305","link":"#ref-\u5728\u6A21\u677F\u4E2D\u7684\u89E3\u5305","children":[]},{"level":2,"title":"ref \u5728\u54CD\u5E94\u5F0F\u5BF9\u8C61\u4E2D\u7684\u89E3\u5305","slug":"ref-\u5728\u54CD\u5E94\u5F0F\u5BF9\u8C61\u4E2D\u7684\u89E3\u5305","link":"#ref-\u5728\u54CD\u5E94\u5F0F\u5BF9\u8C61\u4E2D\u7684\u89E3\u5305","children":[]},{"level":2,"title":"\u6570\u7EC4\u548C\u96C6\u5408\u7C7B\u578B\u7684 ref \u89E3\u5305","slug":"\u6570\u7EC4\u548C\u96C6\u5408\u7C7B\u578B\u7684-ref-\u89E3\u5305","link":"#\u6570\u7EC4\u548C\u96C6\u5408\u7C7B\u578B\u7684-ref-\u89E3\u5305","children":[]},{"level":2,"title":"\u54CD\u5E94\u6027\u8BED\u6CD5\u7CD6","slug":"\u54CD\u5E94\u6027\u8BED\u6CD5\u7CD6","link":"#\u54CD\u5E94\u6027\u8BED\u6CD5\u7CD6","children":[]}],"relativePath":"fe/vue3/ref.md"}'),p={name:"fe/vue3/ref.md"},o=l(`<h1 id="vue3-ref" tabindex="-1">vue3 ref <a class="header-anchor" href="#vue3-ref" aria-hidden="true">#</a></h1><h2 id="\u4F5C\u7528" tabindex="-1">\u4F5C\u7528 <a class="header-anchor" href="#\u4F5C\u7528" aria-hidden="true">#</a></h2><p>\u5B9A\u4E49\u54CD\u5E94\u5F0F\u53D8\u91CF <code>reactive()</code> \u7684\u79CD\u79CD\u9650\u5236\u5F52\u6839\u7ED3\u5E95\u662F\u56E0\u4E3A JavaScript \u6CA1\u6709\u53EF\u4EE5\u4F5C\u7528\u4E8E\u6240\u6709\u503C\u7C7B\u578B\u7684 \u201C\u5F15\u7528\u201D \u673A\u5236\u3002\u4E3A\u6B64\uFF0CVue \u63D0\u4F9B\u4E86\u4E00\u4E2A <code>ref()</code> \u65B9\u6CD5\u6765\u5141\u8BB8\u6211\u4EEC\u521B\u5EFA\u53EF\u4EE5\u4F7F\u7528\u4EFB\u4F55\u503C\u7C7B\u578B\u7684\u54CD\u5E94\u5F0F ref\uFF1A</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> count </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p><code>ref()</code> \u5C06\u4F20\u5165\u53C2\u6570\u7684\u503C\u5305\u88C5\u4E3A\u4E00\u4E2A\u5E26 <code>.value</code> \u5C5E\u6027\u7684 ref \u5BF9\u8C61\uFF1A</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> count </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(count) </span><span style="color:#676E95;">// { value: 0 }</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(count</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value) </span><span style="color:#676E95;">// 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">++</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(count</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value) </span><span style="color:#676E95;">// 1</span></span>
<span class="line"></span></code></pre></div><h2 id="\u539F\u7406" tabindex="-1">\u539F\u7406 <a class="header-anchor" href="#\u539F\u7406" aria-hidden="true">#</a></h2><p>\u548C\u54CD\u5E94\u5F0F\u5BF9\u8C61\u7684\u5C5E\u6027\u7C7B\u4F3C\uFF0C<code>ref</code> \u7684 <code>.value</code> \u5C5E\u6027\u4E5F\u662F\u54CD\u5E94\u5F0F\u7684\u3002\u540C\u65F6\uFF0C\u5F53\u503C\u4E3A\u5BF9\u8C61\u7C7B\u578B\u65F6\uFF0C\u4F1A\u7528 <code>reactive()</code> \u81EA\u52A8\u8F6C\u6362\u5B83\u7684 <code>.value</code>\u3002 \u4E00\u4E2A\u5305\u542B\u5BF9\u8C61\u7C7B\u578B\u503C\u7684 <code>ref</code> \u53EF\u4EE5\u54CD\u5E94\u5F0F\u5730\u66FF\u6362\u6574\u4E2A\u5BF9\u8C61\uFF1A</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> objectRef </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">count</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u8FD9\u662F\u54CD\u5E94\u5F0F\u7684\u66FF\u6362</span></span>
<span class="line"><span style="color:#A6ACCD;">objectRef</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">count</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u7279\u70B9" tabindex="-1">\u7279\u70B9 <a class="header-anchor" href="#\u7279\u70B9" aria-hidden="true">#</a></h2><p>ref \u88AB\u4F20\u9012\u7ED9\u51FD\u6570\u6216\u662F\u4ECE\u4E00\u822C\u5BF9\u8C61\u4E0A\u88AB\u89E3\u6784\u65F6\uFF0C\u4E0D\u4F1A\u4E22\u5931\u54CD\u5E94\u6027\uFF1A</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">foo</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">bar</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u8BE5\u51FD\u6570\u63A5\u6536\u4E00\u4E2A ref</span></span>
<span class="line"><span style="color:#676E95;">// \u9700\u8981\u901A\u8FC7 .value \u53D6\u503C</span></span>
<span class="line"><span style="color:#676E95;">// \u4F46\u5B83\u4F1A\u4FDD\u6301\u54CD\u5E94\u6027</span></span>
<span class="line"><span style="color:#82AAFF;">callSomeFunction</span><span style="color:#A6ACCD;">(obj</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">foo)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u4ECD\u7136\u662F\u54CD\u5E94\u5F0F\u7684</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> foo</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> bar </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> obj</span></span>
<span class="line"></span></code></pre></div><p><code>ref()</code> \u8BA9\u6211\u4EEC\u80FD\u521B\u9020\u4E00\u79CD\u5BF9\u4EFB\u610F\u503C\u7684 \u201C\u5F15\u7528\u201D\uFF0C\u5E76\u80FD\u591F\u5728\u4E0D\u4E22\u5931\u54CD\u5E94\u6027\u7684\u524D\u63D0\u4E0B\u4F20\u9012\u8FD9\u4E9B\u5F15\u7528\u3002\u8FD9\u4E2A\u529F\u80FD\u5F88\u91CD\u8981\uFF0C\u56E0\u4E3A\u5B83\u7ECF\u5E38\u7528\u4E8E\u5C06\u903B\u8F91\u63D0\u53D6\u5230 \u7EC4\u5408\u51FD\u6570 \u4E2D\u3002</p><h2 id="ref-\u5728\u6A21\u677F\u4E2D\u7684\u89E3\u5305" tabindex="-1">ref \u5728\u6A21\u677F\u4E2D\u7684\u89E3\u5305 <a class="header-anchor" href="#ref-\u5728\u6A21\u677F\u4E2D\u7684\u89E3\u5305" aria-hidden="true">#</a></h2><p>\u5F53 ref \u5728\u6A21\u677F\u4E2D\u4F5C\u4E3A\u9876\u5C42\u5C5E\u6027\u88AB\u8BBF\u95EE\u65F6\uFF0C\u5B83\u4EEC\u4F1A\u88AB\u81EA\u52A8\u201C\u89E3\u5305\u201D\uFF0C\u6240\u4EE5\u4E0D\u9700\u8981\u4F7F\u7528 <code>.value</code>\u3002\u4E0B\u9762\u662F\u4E4B\u524D\u7684\u8BA1\u6570\u5668\u4F8B\u5B50\uFF0C\u7528 <code>ref()</code> \u4EE3\u66FF\uFF1A</p><div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> count </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">increment</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">++</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> @</span><span style="color:#C792EA;">click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">increment</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{{</span><span style="color:#A6ACCD;"> count </span><span style="color:#89DDFF;">}}</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">&lt;!-- \u65E0\u9700 .value --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>\u8BF7\u6CE8\u610F\uFF0C\u4EC5\u5F53 ref \u662F\u6A21\u677F\u6E32\u67D3\u4E0A\u4E0B\u6587\u7684\u9876\u5C42\u5C5E\u6027\u65F6\u624D\u9002\u7528\u81EA\u52A8\u201C\u89E3\u5305\u201D\u3002 \u4F8B\u5982\uFF0C foo \u662F\u9876\u5C42\u5C5E\u6027\uFF0C\u4F46 object.foo \u4E0D\u662F\u3002</p><p>\u6240\u4EE5\u6211\u4EEC\u7ED9\u51FA\u4EE5\u4E0B object\uFF1A</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> object </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">foo</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u4E0B\u9762\u7684\u8868\u8FBE\u5F0F\u5C06\u4E0D\u4F1A\u50CF\u9884\u671F\u7684\u90A3\u6837\u5DE5\u4F5C\uFF1A</p><div class="language-vue-html"><button class="copy"></button><span class="lang">template</span><pre><code><span class="line"><span style="color:#89DDFF;">{{</span><span style="color:#A6ACCD;"> object</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">foo </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}}</span></span>
<span class="line"></span></code></pre></div><p>\u6E32\u67D3\u7684\u7ED3\u679C\u4F1A\u662F\u4E00\u4E2A <code>[object Object]</code>\uFF0C\u56E0\u4E3A <code>object.foo</code> \u662F\u4E00\u4E2A <code>ref</code> \u5BF9\u8C61\u3002\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u5C06 <code>foo</code> \u6539\u6210\u9876\u5C42\u5C5E\u6027\u6765\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF1A</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> foo </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> object</span></span>
<span class="line"></span></code></pre></div><div class="language-vue-html"><button class="copy"></button><span class="lang">template</span><pre><code><span class="line"><span style="color:#89DDFF;">{{</span><span style="color:#A6ACCD;"> object</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">foo </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}}</span></span>
<span class="line"></span></code></pre></div><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5982\u679C\u4E00\u4E2A ref \u662F\u6587\u672C\u63D2\u503C\uFF08\u5373\u4E00\u4E2A <code>{{ }}</code> \u7B26\u53F7\uFF09\u8BA1\u7B97\u7684\u6700\u7EC8\u503C\uFF0C\u5B83\u4E5F\u5C06\u88AB\u89E3\u5305\u3002\u56E0\u6B64\u4E0B\u9762\u7684\u6E32\u67D3\u7ED3\u679C\u5C06\u4E3A 1\uFF1A</p><div class="language-vue-html"><button class="copy"></button><span class="lang">template</span><pre><code><span class="line"><span style="color:#89DDFF;">{{</span><span style="color:#A6ACCD;"> object</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">foo </span><span style="color:#89DDFF;">}}</span></span>
<span class="line"></span></code></pre></div><p>\u8FD9\u53EA\u662F\u6587\u672C\u63D2\u503C\u7684\u4E00\u4E2A\u65B9\u4FBF\u529F\u80FD\uFF0C\u76F8\u5F53\u4E8E <code>{{ object.foo.value }}</code>\u3002</p><h2 id="ref-\u5728\u54CD\u5E94\u5F0F\u5BF9\u8C61\u4E2D\u7684\u89E3\u5305" tabindex="-1">ref \u5728\u54CD\u5E94\u5F0F\u5BF9\u8C61\u4E2D\u7684\u89E3\u5305 <a class="header-anchor" href="#ref-\u5728\u54CD\u5E94\u5F0F\u5BF9\u8C61\u4E2D\u7684\u89E3\u5305" aria-hidden="true">#</a></h2><p>\u5F53\u4E00\u4E2A <code>ref</code> \u88AB\u5D4C\u5957\u5728\u4E00\u4E2A\u54CD\u5E94\u5F0F\u5BF9\u8C61\u4E2D\uFF0C\u4F5C\u4E3A\u5C5E\u6027\u88AB\u8BBF\u95EE\u6216\u66F4\u6539\u65F6\uFF0C\u5B83\u4F1A\u81EA\u52A8\u89E3\u5305\uFF0C\u56E0\u6B64\u4F1A\u8868\u73B0\u5F97\u548C\u4E00\u822C\u7684\u5C5E\u6027\u4E00\u6837</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> count </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> state </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">reactive</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  count</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">count) </span><span style="color:#676E95;">// 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">count </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(count</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value) </span><span style="color:#676E95;">// 1</span></span>
<span class="line"></span></code></pre></div><p>\u5982\u679C\u5C06\u4E00\u4E2A\u65B0\u7684 ref \u8D4B\u503C\u7ED9\u4E00\u4E2A\u5173\u8054\u4E86\u5DF2\u6709 ref \u7684\u5C5E\u6027\uFF0C\u90A3\u4E48\u5B83\u4F1A\u66FF\u6362\u6389\u65E7\u7684 ref\uFF1A</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> otherCount </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">count </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> otherCount</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">count) </span><span style="color:#676E95;">// 2</span></span>
<span class="line"><span style="color:#676E95;">// \u539F\u59CB ref \u73B0\u5728\u5DF2\u7ECF\u548C state.count \u5931\u53BB\u8054\u7CFB</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(count</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value) </span><span style="color:#676E95;">// 1</span></span>
<span class="line"></span></code></pre></div><p>\u53EA\u6709\u5F53\u5D4C\u5957\u5728\u4E00\u4E2A\u6DF1\u5C42\u54CD\u5E94\u5F0F\u5BF9\u8C61\u5185\u65F6\uFF0C\u624D\u4F1A\u53D1\u751F ref \u89E3\u5305\u3002\u5F53\u5176\u4F5C\u4E3A\u6D45\u5C42\u54CD\u5E94\u5F0F\u5BF9\u8C61\u7684\u5C5E\u6027\u88AB\u8BBF\u95EE\u65F6\u4E0D\u4F1A\u89E3\u5305\u3002</p><h2 id="\u6570\u7EC4\u548C\u96C6\u5408\u7C7B\u578B\u7684-ref-\u89E3\u5305" tabindex="-1">\u6570\u7EC4\u548C\u96C6\u5408\u7C7B\u578B\u7684 ref \u89E3\u5305 <a class="header-anchor" href="#\u6570\u7EC4\u548C\u96C6\u5408\u7C7B\u578B\u7684-ref-\u89E3\u5305" aria-hidden="true">#</a></h2><p>\u8DDF\u54CD\u5E94\u5F0F\u5BF9\u8C61\u4E0D\u540C\uFF0C\u5F53 ref \u4F5C\u4E3A\u54CD\u5E94\u5F0F\u6570\u7EC4\u6216\u50CF Map \u8FD9\u79CD\u539F\u751F\u96C6\u5408\u7C7B\u578B\u7684\u5143\u7D20\u88AB\u8BBF\u95EE\u65F6\uFF0C\u4E0D\u4F1A\u8FDB\u884C\u89E3\u5305\u3002</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> books </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">reactive</span><span style="color:#A6ACCD;">([</span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Vue 3 Guide</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)])</span></span>
<span class="line"><span style="color:#676E95;">// \u8FD9\u91CC\u9700\u8981 .value</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(books[</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> map </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">reactive</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Map</span><span style="color:#A6ACCD;">([[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">count</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)]]))</span></span>
<span class="line"><span style="color:#676E95;">// \u8FD9\u91CC\u9700\u8981 .value</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(map</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">count</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value)</span></span>
<span class="line"></span></code></pre></div><h2 id="\u54CD\u5E94\u6027\u8BED\u6CD5\u7CD6" tabindex="-1">\u54CD\u5E94\u6027\u8BED\u6CD5\u7CD6 <a class="header-anchor" href="#\u54CD\u5E94\u6027\u8BED\u6CD5\u7CD6" aria-hidden="true">#</a></h2><p>\u76F8\u5BF9\u4E8E\u666E\u901A\u7684 JavaScript \u53D8\u91CF\uFF0C\u6211\u4EEC\u4E0D\u5F97\u4E0D\u7528\u76F8\u5BF9\u7E41\u7410\u7684 <code>.value</code> \u6765\u83B7\u53D6 ref \u7684\u503C\u3002\u8FD9\u662F\u4E00\u4E2A\u53D7\u9650\u4E8E JavaScript \u8BED\u8A00\u9650\u5236\u7684\u7F3A\u70B9\u3002\u7136\u800C\uFF0C\u901A\u8FC7\u7F16\u8BD1\u65F6\u8F6C\u6362\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8BA9\u7F16\u8BD1\u5668\u5E2E\u6211\u4EEC\u7701\u53BB\u4F7F\u7528 <code>.value</code> \u7684\u9EBB\u70E6\u3002Vue \u63D0\u4F9B\u4E86\u4E00\u79CD\u7F16\u8BD1\u65F6\u8F6C\u6362\uFF0C\u4F7F\u5F97\u6211\u4EEC\u53EF\u4EE5\u50CF\u8FD9\u6837\u4E66\u5199\u4E4B\u524D\u7684\u201C\u8BA1\u6570\u5668\u201D\u793A\u4F8B\uFF1A</p><div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> count </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">$ref</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">increment</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u65E0\u9700 .value</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">++</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> @</span><span style="color:#C792EA;">click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">increment</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;{{</span><span style="color:#A6ACCD;"> count </span><span style="color:#89DDFF;">}}&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,39),e=[o];function c(t,r,D,y,A,F){return a(),n("div",null,e)}const d=s(p,[["render",c]]);export{i as __pageData,d as default};