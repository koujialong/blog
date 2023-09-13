import{_ as s,c as a,o as n,a as l}from"./app.f221ea5f.js";const A=JSON.parse('{"title":"\u4E70\u5356\u80A1\u7968\u7684\u6700\u4F73\u65F6\u673A LC121","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u9898\u76EE","slug":"\u9898\u76EE","link":"#\u9898\u76EE","children":[]},{"level":2,"title":"\u9898\u89E3","slug":"\u9898\u89E3","link":"#\u9898\u89E3","children":[]}],"relativePath":"algorithm/dp/\u4E70\u5356\u80A1\u7968\u7684\u6700\u4F73\u65F6\u673A.md"}'),p={name:"algorithm/dp/\u4E70\u5356\u80A1\u7968\u7684\u6700\u4F73\u65F6\u673A.md"},o=l(`<h1 id="\u4E70\u5356\u80A1\u7968\u7684\u6700\u4F73\u65F6\u673A-lc121" tabindex="-1">\u4E70\u5356\u80A1\u7968\u7684\u6700\u4F73\u65F6\u673A LC121 <a class="header-anchor" href="#\u4E70\u5356\u80A1\u7968\u7684\u6700\u4F73\u65F6\u673A-lc121" aria-hidden="true">#</a></h1><h2 id="\u9898\u76EE" tabindex="-1">\u9898\u76EE <a class="header-anchor" href="#\u9898\u76EE" aria-hidden="true">#</a></h2><ul><li><p>\u7ED9\u5B9A\u4E00\u4E2A\u6570\u7EC4 prices \uFF0C\u5B83\u7684\u7B2C i \u4E2A\u5143\u7D20 prices[i] \u8868\u793A\u4E00\u652F\u7ED9\u5B9A\u80A1\u7968\u7B2C i \u5929\u7684\u4EF7\u683C\u3002</p></li><li><p>\u4F60\u53EA\u80FD\u9009\u62E9 \u67D0\u4E00\u5929 \u4E70\u5165\u8FD9\u53EA\u80A1\u7968\uFF0C\u5E76\u9009\u62E9\u5728 \u672A\u6765\u7684\u67D0\u4E00\u4E2A\u4E0D\u540C\u7684\u65E5\u5B50 \u5356\u51FA\u8BE5\u80A1\u7968\u3002\u8BBE\u8BA1\u4E00\u4E2A\u7B97\u6CD5\u6765\u8BA1\u7B97\u4F60\u6240\u80FD\u83B7\u53D6\u7684\u6700\u5927\u5229\u6DA6\u3002</p></li><li><p>\u8FD4\u56DE\u4F60\u53EF\u4EE5\u4ECE\u8FD9\u7B14\u4EA4\u6613\u4E2D\u83B7\u53D6\u7684\u6700\u5927\u5229\u6DA6\u3002\u5982\u679C\u4F60\u4E0D\u80FD\u83B7\u53D6\u4EFB\u4F55\u5229\u6DA6\uFF0C\u8FD4\u56DE 0 \u3002</p></li><li><p>\u8F93\u5165\uFF1A[7,1,5,3,6,4]</p></li><li><p>\u8F93\u51FA\uFF1A5</p></li><li><p>\u89E3\u91CA\uFF1A\u5728\u7B2C 2 \u5929\uFF08\u80A1\u7968\u4EF7\u683C = 1\uFF09\u7684\u65F6\u5019\u4E70\u5165\uFF0C\u5728\u7B2C 5 \u5929\uFF08\u80A1\u7968\u4EF7\u683C = 6\uFF09\u7684\u65F6\u5019\u5356\u51FA\uFF0C\u6700\u5927\u5229\u6DA6 = 6-1 = 5 \u3002</p></li><li><p>\u6CE8\u610F\u5229\u6DA6\u4E0D\u80FD\u662F 7-1 = 6, \u56E0\u4E3A\u5356\u51FA\u4EF7\u683C\u9700\u8981\u5927\u4E8E\u4E70\u5165\u4EF7\u683C\uFF1B\u540C\u65F6\uFF0C\u4F60\u4E0D\u80FD\u5728\u4E70\u5165\u524D\u5356\u51FA\u80A1\u7968\u3002</p></li></ul><h2 id="\u9898\u89E3" tabindex="-1">\u9898\u89E3 <a class="header-anchor" href="#\u9898\u89E3" aria-hidden="true">#</a></h2><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">number[]</span><span style="color:#89DDFF;">}</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">prices</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">return</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> maxProfit </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">prices</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">cost</span><span style="color:#89DDFF;">=Infinity</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">profit</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">prices</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">cost</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">min</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">cost</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">prices</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">])</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">profit</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">max</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">profit</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">prices</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">cost</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">profit</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div>`,5),e=[o];function t(c,r,y,F,i,D){return n(),a("div",null,e)}const _=s(p,[["render",t]]);export{A as __pageData,_ as default};
