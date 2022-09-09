import{_ as s,c as n,o as a,d as l}from"./app.71c6d6ac.js";const i=JSON.parse('{"title":"vue3 reactive","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4F5C\u7528","slug":"\u4F5C\u7528","link":"#\u4F5C\u7528","children":[]},{"level":2,"title":"\u4F7F\u7528\u65B9\u6CD5SFC","slug":"\u4F7F\u7528\u65B9\u6CD5sfc","link":"#\u4F7F\u7528\u65B9\u6CD5sfc","children":[]},{"level":2,"title":"\u6DF1\u5C42\u54CD\u5E94\u6027","slug":"\u6DF1\u5C42\u54CD\u5E94\u6027","link":"#\u6DF1\u5C42\u54CD\u5E94\u6027","children":[]},{"level":2,"title":"\u54CD\u5E94\u5F0F\u4EE3\u7406 vs \u539F\u59CB\u5BF9\u8C61","slug":"\u54CD\u5E94\u5F0F\u4EE3\u7406-vs-\u539F\u59CB\u5BF9\u8C61","link":"#\u54CD\u5E94\u5F0F\u4EE3\u7406-vs-\u539F\u59CB\u5BF9\u8C61","children":[]},{"level":2,"title":"reactive() \u7684\u5C40\u9650\u6027","slug":"reactive-\u7684\u5C40\u9650\u6027","link":"#reactive-\u7684\u5C40\u9650\u6027","children":[]}],"relativePath":"fe/vue3/reactive.md"}'),p={name:"fe/vue3/reactive.md"},o=l(`<h1 id="vue3-reactive" tabindex="-1">vue3 reactive <a class="header-anchor" href="#vue3-reactive" aria-hidden="true">#</a></h1><h2 id="\u4F5C\u7528" tabindex="-1">\u4F5C\u7528 <a class="header-anchor" href="#\u4F5C\u7528" aria-hidden="true">#</a></h2><p>\u58F0\u660E\u54CD\u5E94\u5F0F\u72B6\u6001\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528<code>reactive()</code>\u51FD\u6570\u521B\u5EFA\u4E00\u4E2A\u54CD\u5E94\u5F0F\u5BF9\u8C61\u6216\u6570\u7EC4\uFF1A</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">reactive</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> state </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">reactive</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">count</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>\u54CD\u5E94\u5F0F\u5BF9\u8C61\u5176\u5B9E\u662F JavaScript Proxy\uFF0C\u5176\u884C\u4E3A\u8868\u73B0\u4E0E\u4E00\u822C\u5BF9\u8C61\u76F8\u4F3C\u3002\u4E0D\u540C\u4E4B\u5904\u5728\u4E8E Vue \u80FD\u591F\u8DDF\u8E2A\u5BF9\u54CD\u5E94\u5F0F\u5BF9\u8C61\u5C5E\u6027\u7684\u8BBF\u95EE\u4E0E\u66F4\u6539\u64CD\u4F5C\u3002</p><h2 id="\u4F7F\u7528\u65B9\u6CD5sfc" tabindex="-1">\u4F7F\u7528\u65B9\u6CD5SFC <a class="header-anchor" href="#\u4F7F\u7528\u65B9\u6CD5sfc" aria-hidden="true">#</a></h2><div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">reactive</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> state </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">reactive</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">count</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">increment</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">++</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> @</span><span style="color:#C792EA;">click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">increment</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{{</span><span style="color:#A6ACCD;"> state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">count </span><span style="color:#89DDFF;">}}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u6DF1\u5C42\u54CD\u5E94\u6027" tabindex="-1">\u6DF1\u5C42\u54CD\u5E94\u6027 <a class="header-anchor" href="#\u6DF1\u5C42\u54CD\u5E94\u6027" aria-hidden="true">#</a></h2><p>\u5728 Vue \u4E2D\uFF0C\u72B6\u6001\u90FD\u662F\u9ED8\u8BA4\u6DF1\u5C42\u54CD\u5E94\u5F0F\u7684\u3002\u8FD9\u610F\u5473\u7740\u5373\u4F7F\u5728\u66F4\u6539\u6DF1\u5C42\u6B21\u7684\u5BF9\u8C61\u6216\u6570\u7EC4\uFF0C\u4F60\u7684\u6539\u52A8\u4E5F\u80FD\u88AB\u68C0\u6D4B\u5230\u3002</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">reactive</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">reactive</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">nested</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">count</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">arr</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">foo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">bar</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">mutateDeeply</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u4EE5\u4E0B\u90FD\u4F1A\u6309\u7167\u671F\u671B\u5DE5\u4F5C</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">nested</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">++</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">baz</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u54CD\u5E94\u5F0F\u4EE3\u7406-vs-\u539F\u59CB\u5BF9\u8C61" tabindex="-1">\u54CD\u5E94\u5F0F\u4EE3\u7406 vs \u539F\u59CB\u5BF9\u8C61 <a class="header-anchor" href="#\u54CD\u5E94\u5F0F\u4EE3\u7406-vs-\u539F\u59CB\u5BF9\u8C61" aria-hidden="true">#</a></h2><p><code>reactive()</code> \u8FD4\u56DE\u7684\u662F\u4E00\u4E2A\u539F\u59CB\u5BF9\u8C61\u7684 Proxy\uFF0C\u5B83\u548C\u539F\u59CB\u5BF9\u8C61\u662F\u4E0D\u76F8\u7B49\u7684\uFF1A</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> raw </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> proxy </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">reactive</span><span style="color:#A6ACCD;">(raw)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u4EE3\u7406\u5BF9\u8C61\u548C\u539F\u59CB\u5BF9\u8C61\u4E0D\u662F\u5168\u7B49\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(proxy </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> raw) </span><span style="color:#676E95;">// false</span></span>
<span class="line"></span></code></pre></div><p>\u53EA\u6709\u4EE3\u7406\u5BF9\u8C61\u662F\u54CD\u5E94\u5F0F\u7684\uFF0C\u66F4\u6539\u539F\u59CB\u5BF9\u8C61\u4E0D\u4F1A\u89E6\u53D1\u66F4\u65B0\u3002\u56E0\u6B64\uFF0C\u4F7F\u7528 Vue \u7684\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u7684\u6700\u4F73\u5B9E\u8DF5\u662F \u4EC5\u4F7F\u7528\u4F60\u58F0\u660E\u5BF9\u8C61\u7684\u4EE3\u7406\u7248\u672C\u3002</p><p>\u4E3A\u4FDD\u8BC1\u8BBF\u95EE\u4EE3\u7406\u7684\u4E00\u81F4\u6027\uFF0C\u5BF9\u540C\u4E00\u4E2A\u539F\u59CB\u5BF9\u8C61\u8C03\u7528 <code>reactive()</code> \u4F1A\u603B\u662F\u8FD4\u56DE\u540C\u6837\u7684\u4EE3\u7406\u5BF9\u8C61\uFF0C\u800C\u5BF9\u4E00\u4E2A\u5DF2\u5B58\u5728\u7684\u4EE3\u7406\u5BF9\u8C61\u8C03\u7528 <code>reactive()</code> \u4F1A\u8FD4\u56DE\u5176\u672C\u8EAB</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">// \u5728\u540C\u4E00\u4E2A\u5BF9\u8C61\u4E0A\u8C03\u7528 reactive() \u4F1A\u8FD4\u56DE\u76F8\u540C\u7684\u4EE3\u7406</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">reactive</span><span style="color:#A6ACCD;">(raw) </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> proxy) </span><span style="color:#676E95;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u5728\u4E00\u4E2A\u4EE3\u7406\u4E0A\u8C03\u7528 reactive() \u4F1A\u8FD4\u56DE\u5B83\u81EA\u5DF1</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">reactive</span><span style="color:#A6ACCD;">(proxy) </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> proxy) </span><span style="color:#676E95;">// true</span></span>
<span class="line"></span></code></pre></div><p>\u4F9D\u9760\u6DF1\u5C42\u54CD\u5E94\u6027\uFF0C\u54CD\u5E94\u5F0F\u5BF9\u8C61\u5185\u7684\u5D4C\u5957\u5BF9\u8C61\u4F9D\u7136\u662F\u4EE3\u7406\uFF1A</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> proxy </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">reactive</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> raw </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#A6ACCD;">proxy</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">nested </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> raw</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(proxy</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">nested </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> raw) </span><span style="color:#676E95;">// false</span></span>
<span class="line"></span></code></pre></div><h2 id="reactive-\u7684\u5C40\u9650\u6027" tabindex="-1"><code>reactive()</code> \u7684\u5C40\u9650\u6027 <a class="header-anchor" href="#reactive-\u7684\u5C40\u9650\u6027" aria-hidden="true">#</a></h2><p><code>reactive()</code> API \u6709\u4E24\u6761\u9650\u5236\uFF1A</p><ol><li>\u4EC5\u5BF9\u5BF9\u8C61\u7C7B\u578B\u6709\u6548\uFF08\u5BF9\u8C61\u3001\u6570\u7EC4\u548C <code>Map</code>\u3001<code>Set</code> \u8FD9\u6837\u7684\u96C6\u5408\u7C7B\u578B\uFF09\uFF0C\u800C\u5BF9 <code>string</code>\u3001<code>number</code> \u548C <code>boolean</code> \u8FD9\u6837\u7684 \u539F\u59CB\u7C7B\u578B \u65E0\u6548\u3002</li><li>\u56E0\u4E3A Vue \u7684\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u662F\u901A\u8FC7\u5C5E\u6027\u8BBF\u95EE\u8FDB\u884C\u8FFD\u8E2A\u7684\uFF0C\u56E0\u6B64\u6211\u4EEC\u5FC5\u987B\u59CB\u7EC8\u4FDD\u6301\u5BF9\u8BE5\u54CD\u5E94\u5F0F\u5BF9\u8C61\u7684\u76F8\u540C\u5F15\u7528\u3002\u8FD9\u610F\u5473\u7740\u6211\u4EEC\u4E0D\u53EF\u4EE5\u968F\u610F\u5730\u201C\u66FF\u6362\u201D\u4E00\u4E2A\u54CD\u5E94\u5F0F\u5BF9\u8C61\uFF0C\u56E0\u4E3A\u8FD9\u5C06\u5BFC\u81F4\u5BF9\u521D\u59CB\u5F15\u7528\u7684\u54CD\u5E94\u6027\u8FDE\u63A5\u4E22\u5931\uFF1A</li></ol><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> state </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">reactive</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">count</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u4E0A\u9762\u7684\u5F15\u7528 ({ count: 0 }) \u5C06\u4E0D\u518D\u88AB\u8FFD\u8E2A\uFF08\u54CD\u5E94\u6027\u8FDE\u63A5\u5DF2\u4E22\u5931\uFF01\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">state </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">reactive</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">count</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>\u540C\u65F6\u8FD9\u4E5F\u610F\u5473\u7740\u5F53\u6211\u4EEC\u5C06\u54CD\u5E94\u5F0F\u5BF9\u8C61\u7684\u5C5E\u6027\u8D4B\u503C\u6216\u89E3\u6784\u81F3\u672C\u5730\u53D8\u91CF\u65F6\uFF0C\u6216\u662F\u5C06\u8BE5\u5C5E\u6027\u4F20\u5165\u4E00\u4E2A\u51FD\u6570\u65F6\uFF0C\u6211\u4EEC\u4F1A\u5931\u53BB\u54CD\u5E94\u6027\uFF1A</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> state </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">reactive</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">count</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// n \u662F\u4E00\u4E2A\u5C40\u90E8\u53D8\u91CF\uFF0C\u540C state.count</span></span>
<span class="line"><span style="color:#676E95;">// \u5931\u53BB\u54CD\u5E94\u6027\u8FDE\u63A5</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> n </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">count</span></span>
<span class="line"><span style="color:#676E95;">// \u4E0D\u5F71\u54CD\u539F\u59CB\u7684 state</span></span>
<span class="line"><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">++</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// count \u4E5F\u548C state.count \u5931\u53BB\u4E86\u54CD\u5E94\u6027\u8FDE\u63A5</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> count </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> state</span></span>
<span class="line"><span style="color:#676E95;">// \u4E0D\u4F1A\u5F71\u54CD\u539F\u59CB\u7684 state</span></span>
<span class="line"><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">++</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u8BE5\u51FD\u6570\u63A5\u6536\u4E00\u4E2A\u666E\u901A\u6570\u5B57\uFF0C\u5E76\u4E14</span></span>
<span class="line"><span style="color:#676E95;">// \u5C06\u65E0\u6CD5\u8DDF\u8E2A state.count \u7684\u53D8\u5316</span></span>
<span class="line"><span style="color:#82AAFF;">callSomeFunction</span><span style="color:#A6ACCD;">(state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">count)</span></span>
<span class="line"></span></code></pre></div>`,24),e=[o];function c(t,r,D,y,F,A){return a(),n("div",null,e)}const d=s(p,[["render",c]]);export{i as __pageData,d as default};
