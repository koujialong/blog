import{_ as s,c as a,o as n,a as l}from"./app.36f00238.js";const A=JSON.parse('{"title":"\u76F8\u5BF9\u540D\u6B21 LC506","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u9898\u76EE","slug":"\u9898\u76EE","link":"#\u9898\u76EE","children":[]}],"relativePath":"algorithm/array/\u76F8\u5BF9\u540D\u6B21.md"}'),o={name:"algorithm/array/\u76F8\u5BF9\u540D\u6B21.md"},p=l(`<h1 id="\u76F8\u5BF9\u540D\u6B21-lc506" tabindex="-1">\u76F8\u5BF9\u540D\u6B21 LC506 <a class="header-anchor" href="#\u76F8\u5BF9\u540D\u6B21-lc506" aria-hidden="true">#</a></h1><h2 id="\u9898\u76EE" tabindex="-1">\u9898\u76EE <a class="header-anchor" href="#\u9898\u76EE" aria-hidden="true">#</a></h2><ul><li>\u7ED9\u4F60\u4E00\u4E2A\u957F\u5EA6\u4E3A n \u7684\u6574\u6570\u6570\u7EC4 score \uFF0C\u5176\u4E2D score[i] \u662F\u7B2C i \u4F4D\u8FD0\u52A8\u5458\u5728\u6BD4\u8D5B\u4E2D\u7684\u5F97\u5206\u3002\u6240\u6709\u5F97\u5206\u90FD \u4E92\u4E0D\u76F8\u540C \u3002</li><li>\u8FD0\u52A8\u5458\u5C06\u6839\u636E\u5F97\u5206 \u51B3\u5B9A\u540D\u6B21 \uFF0C\u5176\u4E2D\u540D\u6B21\u7B2C 1 \u7684\u8FD0\u52A8\u5458\u5F97\u5206\u6700\u9AD8\uFF0C\u540D\u6B21\u7B2C 2 \u7684\u8FD0\u52A8\u5458\u5F97\u5206\u7B2C 2 \u9AD8\uFF0C\u4F9D\u6B64\u7C7B\u63A8\u3002\u8FD0\u52A8\u5458\u7684\u540D\u6B21\u51B3\u5B9A\u4E86\u4ED6\u4EEC\u7684\u83B7\u5956\u60C5\u51B5\uFF1A <ul><li>\u540D\u6B21\u7B2C 1 \u7684\u8FD0\u52A8\u5458\u83B7\u91D1\u724C &quot;Gold Medal&quot; \u3002</li><li>\u540D\u6B21\u7B2C 2 \u7684\u8FD0\u52A8\u5458\u83B7\u94F6\u724C &quot;Silver Medal&quot; \u3002</li><li>\u540D\u6B21\u7B2C 3 \u7684\u8FD0\u52A8\u5458\u83B7\u94DC\u724C &quot;Bronze Medal&quot; \u3002</li></ul></li><li>\u4ECE\u540D\u6B21\u7B2C 4 \u5230\u7B2C n \u7684\u8FD0\u52A8\u5458\uFF0C\u53EA\u80FD\u83B7\u5F97\u4ED6\u4EEC\u7684\u540D\u6B21\u7F16\u53F7\uFF08\u5373\uFF0C\u540D\u6B21\u7B2C x \u7684\u8FD0\u52A8\u5458\u83B7\u5F97\u7F16\u53F7 &quot;x&quot;\uFF09\u3002</li><li>\u4F7F\u7528\u957F\u5EA6\u4E3A n \u7684\u6570\u7EC4 answer \u8FD4\u56DE\u83B7\u5956\uFF0C\u5176\u4E2D answer[i] \u662F\u7B2C i \u4F4D\u8FD0\u52A8\u5458\u7684\u83B7\u5956\u60C5\u51B5\u3002</li><li>\u8F93\u5165\uFF1Ascore = [5,4,3,2,1]</li><li>\u8F93\u51FA\uFF1A[&quot;Gold Medal&quot;,&quot;Silver Medal&quot;,&quot;Bronze Medal&quot;,&quot;4&quot;,&quot;5&quot;]</li><li>\u89E3\u91CA\uFF1A\u540D\u6B21\u4E3A [1st, 2nd, 3rd, 4th, 5th] \u3002</li></ul><h1 id="\u9898\u89E3" tabindex="-1">\u9898\u89E3 <a class="header-anchor" href="#\u9898\u89E3" aria-hidden="true">#</a></h1><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">number[]</span><span style="color:#89DDFF;">}</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">score</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">return</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">string[]</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> findRelativeRanks </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">score</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// slice(0)\u62F7\u8D1D\u6570\u7EC4\u7136\u540E\u6392\u5E8F</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ranks</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">score</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">slice</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sort</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u5BF9\u6BD4\u539F\u59CB\u6570\u7EC4\u548C\u6392\u5E8F\u540E\u5206\u6570\u6570\u7EC4</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">score</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">map</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">num</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">num</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ranks</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">]) </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Gold Medal</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">num</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ranks</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">]) </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Silver Medal</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">num</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ranks</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">]) </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Bronze Medal</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u4E0D\u4E3A\u524D\u4E09\u540D\uFF0C\u7ED3\u679C\u4E3A\u5206\u6570\u6392\u5E8F\u6570\u7EC4\u7D22\u5F15+1</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ranks</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">indexOf</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">num</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div>`,5),e=[p];function t(r,c,F,y,D,i){return n(),a("div",null,e)}const u=s(o,[["render",t]]);export{A as __pageData,u as default};
