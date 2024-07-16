import{_ as s,c as n,o as a,a as l}from"./app.6a9afa21.js";const i=JSON.parse('{"title":"vue3 \u6A21\u677F\u5E94\u7528","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8BBF\u95EE\u6A21\u677F\u5F15\u7528","slug":"\u8BBF\u95EE\u6A21\u677F\u5F15\u7528","link":"#\u8BBF\u95EE\u6A21\u677F\u5F15\u7528","children":[]},{"level":2,"title":"v-for \u4E2D\u7684\u6A21\u677F\u5F15\u7528","slug":"v-for-\u4E2D\u7684\u6A21\u677F\u5F15\u7528","link":"#v-for-\u4E2D\u7684\u6A21\u677F\u5F15\u7528","children":[]},{"level":2,"title":"\u51FD\u6570\u6A21\u677F\u5F15\u7528","slug":"\u51FD\u6570\u6A21\u677F\u5F15\u7528","link":"#\u51FD\u6570\u6A21\u677F\u5F15\u7528","children":[]},{"level":2,"title":"\u7EC4\u4EF6\u4E0A\u7684 ref","slug":"\u7EC4\u4EF6\u4E0A\u7684-ref","link":"#\u7EC4\u4EF6\u4E0A\u7684-ref","children":[]}],"relativePath":"fe/vue3/template-ref.md"}'),p={name:"fe/vue3/template-ref.md"},o=l(`<h1 id="vue3-\u6A21\u677F\u5E94\u7528" tabindex="-1">vue3 \u6A21\u677F\u5E94\u7528 <a class="header-anchor" href="#vue3-\u6A21\u677F\u5E94\u7528" aria-hidden="true">#</a></h1><h2 id="\u8BBF\u95EE\u6A21\u677F\u5F15\u7528" tabindex="-1">\u8BBF\u95EE\u6A21\u677F\u5F15\u7528 <a class="header-anchor" href="#\u8BBF\u95EE\u6A21\u677F\u5F15\u7528" aria-hidden="true">#</a></h2><p>\u4E3A\u4E86\u901A\u8FC7\u7EC4\u5408\u5F0F API \u83B7\u5F97\u8BE5\u6A21\u677F\u5F15\u7528\uFF0C\u6211\u4EEC\u9700\u8981\u58F0\u660E\u4E00\u4E2A\u540C\u540D\u7684 ref\uFF1A</p><div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">onMounted</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u58F0\u660E\u4E00\u4E2A ref \u6765\u5B58\u653E\u8BE5\u5143\u7D20\u7684\u5F15\u7528</span></span>
<span class="line"><span style="color:#676E95;">// \u5FC5\u987B\u548C\u6A21\u677F\u91CC\u7684 ref \u540C\u540D</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> input </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">onMounted</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">input</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">focus</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">ref</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">input</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>\u5982\u679C\u4E0D\u4F7F\u7528 <code>&lt;script setup&gt;</code>\uFF0C\u9700\u786E\u4FDD\u4ECE <code>setup()</code> \u8FD4\u56DE ref\uFF1A</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">setup</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">input</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">null</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// ...</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">input</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u6CE8\u610F\uFF0C\u4F60\u53EA\u53EF\u4EE5\u5728\u7EC4\u4EF6\u6302\u8F7D\u540E\u624D\u80FD\u8BBF\u95EE\u6A21\u677F\u5F15\u7528\u3002\u5982\u679C\u4F60\u60F3\u5728\u6A21\u677F\u4E2D\u7684\u8868\u8FBE\u5F0F\u4E0A\u8BBF\u95EE <code>input</code>\uFF0C\u5728\u521D\u6B21\u6E32\u67D3\u65F6\u4F1A\u662F <code>null</code>\u3002\u8FD9\u662F\u56E0\u4E3A\u5728\u521D\u6B21\u6E32\u67D3\u524D\u8FD9\u4E2A\u5143\u7D20\u8FD8\u4E0D\u5B58\u5728\u5462\uFF01</p><p>\u5982\u679C\u4F60\u9700\u8981\u4FA6\u542C\u4E00\u4E2A\u6A21\u677F\u5F15\u7528 ref \u7684\u53D8\u5316\uFF0C\u786E\u4FDD\u8003\u8651\u5230\u5176\u503C\u4E3A <code>null</code> \u7684\u60C5\u51B5\uFF1A</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#82AAFF;">watchEffect</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">input</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">input</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">focus</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u6B64\u65F6\u8FD8\u672A\u6302\u8F7D\uFF0C\u6216\u6B64\u5143\u7D20\u5DF2\u7ECF\u88AB\u5378\u8F7D\uFF08\u4F8B\u5982\u901A\u8FC7 v-if \u63A7\u5236\uFF09</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="v-for-\u4E2D\u7684\u6A21\u677F\u5F15\u7528" tabindex="-1">v-for \u4E2D\u7684\u6A21\u677F\u5F15\u7528 <a class="header-anchor" href="#v-for-\u4E2D\u7684\u6A21\u677F\u5F15\u7528" aria-hidden="true">#</a></h2><p>\u5F53\u5728 <code>v-for</code> \u4E2D\u4F7F\u7528\u6A21\u677F\u5F15\u7528\u65F6\uFF0C\u5BF9\u5E94\u7684 ref \u4E2D\u5305\u542B\u7684\u503C\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u5B83\u5C06\u5728\u5143\u7D20\u88AB\u6302\u8F7D\u540E\u5305\u542B\u5BF9\u5E94\u6574\u4E2A\u5217\u8868\u7684\u6240\u6709\u5143\u7D20\uFF1A</p><div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">onMounted</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> list </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">([</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">/* ... */</span></span>
<span class="line"><span style="color:#A6ACCD;">])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> itemRefs </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">([])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">onMounted</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(itemRefs</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value))</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ul</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;"> in </span><span style="color:#A6ACCD;">list</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">ref</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">itemRefs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">{{</span><span style="color:#A6ACCD;"> item </span><span style="color:#89DDFF;">}}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">ul</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>\u5E94\u8BE5\u6CE8\u610F\u7684\u662F\uFF0Cref \u6570\u7EC4\u5E76\u4E0D\u4FDD\u8BC1\u4E0E\u6E90\u6570\u7EC4\u76F8\u540C\u7684\u987A\u5E8F\u3002</p><h2 id="\u51FD\u6570\u6A21\u677F\u5F15\u7528" tabindex="-1">\u51FD\u6570\u6A21\u677F\u5F15\u7528 <a class="header-anchor" href="#\u51FD\u6570\u6A21\u677F\u5F15\u7528" aria-hidden="true">#</a></h2><p>\u9664\u4E86\u4F7F\u7528\u5B57\u7B26\u4E32\u503C\u4F5C\u540D\u5B57\uFF0Cref attribute \u8FD8\u53EF\u4EE5\u7ED1\u5B9A\u4E3A\u4E00\u4E2A\u51FD\u6570\uFF0C\u4F1A\u5728\u6BCF\u6B21\u7EC4\u4EF6\u66F4\u65B0\u65F6\u90FD\u88AB\u8C03\u7528\u3002\u8BE5\u51FD\u6570\u4F1A\u6536\u5230\u5143\u7D20\u5F15\u7528\u4F5C\u4E3A\u5176\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF1A</p><div class="language-vue-html"><button class="copy"></button><span class="lang">template</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">ref</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">el</span><span style="color:#89DDFF;">) </span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;"> {</span><span style="color:#F07178;"> </span><span style="color:#676E95;">/* \u5C06 el \u8D4B\u503C\u7ED9\u4E00\u4E2A\u6570\u636E\u5C5E\u6027\u6216 ref \u53D8\u91CF */</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>\u6CE8\u610F\u6211\u4EEC\u8FD9\u91CC\u9700\u8981\u4F7F\u7528\u52A8\u6001\u7684 <code>:ref</code> \u7ED1\u5B9A\u624D\u80FD\u591F\u4F20\u5165\u4E00\u4E2A\u51FD\u6570\u3002\u5F53\u7ED1\u5B9A\u7684\u5143\u7D20\u88AB\u5378\u8F7D\u65F6\uFF0C\u51FD\u6570\u4E5F\u4F1A\u88AB\u8C03\u7528\u4E00\u6B21\uFF0C\u6B64\u65F6\u7684 <code>el</code> \u53C2\u6570\u4F1A\u662F <code>null</code>\u3002\u4F60\u5F53\u7136\u4E5F\u53EF\u4EE5\u7ED1\u5B9A\u4E00\u4E2A\u7EC4\u4EF6\u65B9\u6CD5\u800C\u4E0D\u662F\u5185\u8054\u51FD\u6570\u3002</p><h2 id="\u7EC4\u4EF6\u4E0A\u7684-ref" tabindex="-1">\u7EC4\u4EF6\u4E0A\u7684 ref <a class="header-anchor" href="#\u7EC4\u4EF6\u4E0A\u7684-ref" aria-hidden="true">#</a></h2><p>\u6A21\u677F\u5F15\u7528\u4E5F\u53EF\u4EE5\u88AB\u7528\u5728\u4E00\u4E2A\u5B50\u7EC4\u4EF6\u4E0A\u3002\u8FD9\u79CD\u60C5\u51B5\u4E0B\u5F15\u7528\u4E2D\u83B7\u5F97\u7684\u503C\u7684\u662F\u7EC4\u4EF6\u5B9E\u4F8B\uFF1A</p><div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">onMounted</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> Child </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./Child.vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> child </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">onMounted</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// child.value \u662F &lt;Child /&gt; \u7EC4\u4EF6\u7684\u5B9E\u4F8B</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Child</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">ref</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">child</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>\u5982\u679C\u4E00\u4E2A\u5B50\u7EC4\u4EF6\u4F7F\u7528\u7684\u662F\u9009\u9879\u5F0F API \u6216\u6CA1\u6709\u4F7F\u7528 <code>&lt;script setup&gt;</code>\uFF0C\u88AB\u5F15\u7528\u7684\u7EC4\u4EF6\u5B9E\u4F8B\u548C\u8BE5\u5B50\u7EC4\u4EF6\u7684 <code>this</code> \u5B8C\u5168\u4E00\u81F4\uFF0C \u8FD9\u610F\u5473\u7740\u7236\u7EC4\u4EF6\u5BF9\u5B50\u7EC4\u4EF6\u7684\u6BCF\u4E00\u4E2A\u5C5E\u6027\u548C\u65B9\u6CD5\u90FD\u6709\u5B8C\u5168\u7684\u8BBF\u95EE\u6743\u3002\u8FD9\u4F7F\u5F97\u5728\u7236\u7EC4\u4EF6\u548C\u5B50\u7EC4\u4EF6\u4E4B\u95F4\u521B\u5EFA\u7D27\u5BC6\u8026\u5408\u7684\u5B9E\u73B0\u7EC6\u8282\u53D8\u5F97\u5F88\u5BB9\u6613\uFF0C\u5F53\u7136\u4E5F\u56E0\u6B64\uFF0C \u5E94\u8BE5\u53EA\u5728\u7EDD\u5BF9\u9700\u8981\u65F6\u624D\u4F7F\u7528\u7EC4\u4EF6\u5F15\u7528\u3002\u5927\u591A\u6570\u60C5\u51B5\u4E0B\uFF0C\u4F60\u5E94\u8BE5\u9996\u5148\u4F7F\u7528\u6807\u51C6\u7684 <code>props</code> \u548C <code>emit</code> \u63A5\u53E3\u6765\u5B9E\u73B0\u7236\u5B50\u7EC4\u4EF6\u4EA4\u4E92\u3002</p><p>\u6709\u4E00\u4E2A\u4F8B\u5916\u7684\u60C5\u51B5\uFF0C\u4F7F\u7528\u4E86 <code>&lt;script setup&gt;</code> \u7684\u7EC4\u4EF6\u662F\u9ED8\u8BA4\u79C1\u6709\u7684\uFF1A\u4E00\u4E2A\u7236\u7EC4\u4EF6\u65E0\u6CD5\u8BBF\u95EE\u5230\u4E00\u4E2A\u4F7F\u7528\u4E86 <code>&lt;script setup&gt;</code> \u7684\u5B50\u7EC4\u4EF6\u4E2D\u7684\u4EFB\u4F55\u4E1C\u897F\uFF0C\u9664\u975E\u5B50\u7EC4\u4EF6\u5728\u5176\u4E2D\u901A\u8FC7 <code>defineExpose</code> \u5B8F\u663E\u5F0F\u66B4\u9732\uFF1A</p><div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> b </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">defineExpose</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  a</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  b</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>\u5F53\u7236\u7EC4\u4EF6\u901A\u8FC7\u6A21\u677F\u5F15\u7528\u83B7\u53D6\u5230\u4E86\u8BE5\u7EC4\u4EF6\u7684\u5B9E\u4F8B\u65F6\uFF0C\u5F97\u5230\u7684\u5B9E\u4F8B\u7C7B\u578B\u4E3A <code>{ a: number, b: number }</code> (ref \u90FD\u4F1A\u81EA\u52A8\u89E3\u5305\uFF0C\u548C\u4E00\u822C\u7684\u5B9E\u4F8B\u4E00\u6837)\u3002</p>`,24),e=[o];function t(c,r,D,F,y,A){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{i as __pageData,d as default};