import{_ as s,c as n,o as a,a as p}from"./app.f221ea5f.js";const i=JSON.parse('{"title":"\u4E70\u5356\u80A1\u7968\u7684\u6700\u4F73\u65F6\u673A2 LC122","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u9898\u76EE","slug":"\u9898\u76EE","link":"#\u9898\u76EE","children":[]},{"level":2,"title":"\u9898\u89E3","slug":"\u9898\u89E3","link":"#\u9898\u89E3","children":[]}],"relativePath":"algorithm/dp/\u4E70\u5356\u80A1\u7968\u7684\u6700\u4F73\u65F6\u673A2.md"}'),l={name:"algorithm/dp/\u4E70\u5356\u80A1\u7968\u7684\u6700\u4F73\u65F6\u673A2.md"},o=p(`<h1 id="\u4E70\u5356\u80A1\u7968\u7684\u6700\u4F73\u65F6\u673A2-lc122" tabindex="-1">\u4E70\u5356\u80A1\u7968\u7684\u6700\u4F73\u65F6\u673A2 LC122 <a class="header-anchor" href="#\u4E70\u5356\u80A1\u7968\u7684\u6700\u4F73\u65F6\u673A2-lc122" aria-hidden="true">#</a></h1><h2 id="\u9898\u76EE" tabindex="-1">\u9898\u76EE <a class="header-anchor" href="#\u9898\u76EE" aria-hidden="true">#</a></h2><ul><li><p>\u7ED9\u4F60\u4E00\u4E2A\u6574\u6570\u6570\u7EC4 prices \uFF0C\u5176\u4E2D prices[i] \u8868\u793A\u67D0\u652F\u80A1\u7968\u7B2C i \u5929\u7684\u4EF7\u683C\u3002</p></li><li><p>\u5728\u6BCF\u4E00\u5929\uFF0C\u4F60\u53EF\u4EE5\u51B3\u5B9A\u662F\u5426\u8D2D\u4E70\u548C/\u6216\u51FA\u552E\u80A1\u7968\u3002\u4F60\u5728\u4EFB\u4F55\u65F6\u5019 \u6700\u591A \u53EA\u80FD\u6301\u6709 \u4E00\u80A1 \u80A1\u7968\u3002\u4F60\u4E5F\u53EF\u4EE5\u5148\u8D2D\u4E70\uFF0C\u7136\u540E\u5728 \u540C\u4E00\u5929 \u51FA\u552E\u3002</p></li><li><p>\u8FD4\u56DE \u4F60\u80FD\u83B7\u5F97\u7684 \u6700\u5927 \u5229\u6DA6 \u3002</p></li><li><p>\u8F93\u5165\uFF1Aprices = [7,1,5,3,6,4]</p></li><li><p>\u8F93\u51FA\uFF1A7</p></li><li><p>\u89E3\u91CA\uFF1A\u5728\u7B2C 2 \u5929\uFF08\u80A1\u7968\u4EF7\u683C = 1\uFF09\u7684\u65F6\u5019\u4E70\u5165\uFF0C\u5728\u7B2C 3 \u5929\uFF08\u80A1\u7968\u4EF7\u683C = 5\uFF09\u7684\u65F6\u5019\u5356\u51FA, \u8FD9\u7B14\u4EA4\u6613\u6240\u80FD\u83B7\u5F97\u5229\u6DA6 = 5 - 1 = 4 \u3002</p></li><li><p>\u968F\u540E\uFF0C\u5728\u7B2C 4 \u5929\uFF08\u80A1\u7968\u4EF7\u683C = 3\uFF09\u7684\u65F6\u5019\u4E70\u5165\uFF0C\u5728\u7B2C 5 \u5929\uFF08\u80A1\u7968\u4EF7\u683C = 6\uFF09\u7684\u65F6\u5019\u5356\u51FA, \u8FD9\u7B14\u4EA4\u6613\u6240\u80FD\u83B7\u5F97\u5229\u6DA6 = 6 - 3 = 3 \u3002</p></li><li><p>\u603B\u5229\u6DA6\u4E3A 4 + 3 = 7 \u3002</p></li></ul><h2 id="\u9898\u89E3" tabindex="-1">\u9898\u89E3 <a class="header-anchor" href="#\u9898\u89E3" aria-hidden="true">#</a></h2><ul><li>\u52A8\u6001\u89C4\u5212</li></ul><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">number[]</span><span style="color:#89DDFF;">}</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">prices</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">return</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> maxProfit </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">prices</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">prices</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">dp</span><span style="color:#89DDFF;">=new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Array</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">n</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fill</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">map</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">_</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Array</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fill</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">))</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">dp</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">][</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">dp</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">][</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">=-</span><span style="color:#A6ACCD;">prices</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// i\u5929\u7A7A\u4ED3\u5229\u6DA6 max{\u524D\u4E00\u5929\u7A7A\u4ED3\u5229\u6DA6\uFF0C\u524D\u4E00\u5929\u6301\u6709\u5229\u6DA6+\u4ECA\u65E5\u5356\u6389\u5229\u6DA6}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">dp</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">][</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">max</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">dp</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">][</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">dp</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">][</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">prices</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">])</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// i\u5929\u6301\u6709\u5229\u6DA6 max{\u524D\u4E00\u5929\u6301\u6709\u5229\u6DA6\uFF0C\u524D\u4E00\u5929\u7A7A\u4ED3\u5229\u6DA6-\u4ECA\u65E5\u4E70\u5165\u4EF7\u683C}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">dp</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">][</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">max</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">dp</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">][</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">dp</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">][</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">prices</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">])</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u8FD4\u56DE\u6700\u540E\u4E00\u5929\u7A7A\u4ED3\u5229\u6DA6</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">dp</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">][</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><ul><li>\u6570\u7EC4</li></ul><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">number[]</span><span style="color:#89DDFF;">}</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">prices</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">return</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> maxProfit </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">prices</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">profit</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">prices</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">//\u6240\u6709\u4E0A\u6DA8\u6CE2\u6BB5\u90FD\u8BA1\u5165\u5229\u6DA6</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">profit</span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;">prices</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">prices</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;">prices</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">prices</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">profit</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div>`,8),e=[o];function c(r,t,y,F,D,C){return a(),n("div",null,e)}const d=s(l,[["render",c]]);export{i as __pageData,d as default};
