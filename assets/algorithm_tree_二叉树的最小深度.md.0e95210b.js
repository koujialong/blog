import{_ as s,c as n,o as a,a as l}from"./app.62fafbd3.js";const p="/blog/img/\u4E8C\u53C9\u6811\u7684\u6700\u5C0F\u6DF1\u5EA6.png",h=JSON.parse('{"title":"\u4E8C\u53C9\u6811\u7684\u6700\u5C0F\u6DF1\u5EA6 LC111","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u9898\u76EE","slug":"\u9898\u76EE","link":"#\u9898\u76EE","children":[]},{"level":2,"title":"\u9898\u89E3","slug":"\u9898\u89E3","link":"#\u9898\u89E3","children":[]}],"relativePath":"algorithm/tree/\u4E8C\u53C9\u6811\u7684\u6700\u5C0F\u6DF1\u5EA6.md"}'),o={name:"algorithm/tree/\u4E8C\u53C9\u6811\u7684\u6700\u5C0F\u6DF1\u5EA6.md"},e=l('<h1 id="\u4E8C\u53C9\u6811\u7684\u6700\u5C0F\u6DF1\u5EA6-lc111" tabindex="-1">\u4E8C\u53C9\u6811\u7684\u6700\u5C0F\u6DF1\u5EA6 LC111 <a class="header-anchor" href="#\u4E8C\u53C9\u6811\u7684\u6700\u5C0F\u6DF1\u5EA6-lc111" aria-hidden="true">#</a></h1><h2 id="\u9898\u76EE" tabindex="-1">\u9898\u76EE <a class="header-anchor" href="#\u9898\u76EE" aria-hidden="true">#</a></h2><ul><li>\u7ED9\u5B9A\u4E00\u4E2A\u4E8C\u53C9\u6811\uFF0C\u627E\u51FA\u5176\u6700\u5C0F\u6DF1\u5EA6\u3002</li><li>\u6700\u5C0F\u6DF1\u5EA6\u662F\u4ECE\u6839\u8282\u70B9\u5230\u6700\u8FD1\u53F6\u5B50\u8282\u70B9\u7684\u6700\u77ED\u8DEF\u5F84\u4E0A\u7684\u8282\u70B9\u6570\u91CF\u3002</li><li>\u8BF4\u660E\uFF1A\u53F6\u5B50\u8282\u70B9\u662F\u6307\u6CA1\u6709\u5B50\u8282\u70B9\u7684\u8282\u70B9\u3002 <img src="'+p+`" alt="img"></li><li>\u8F93\u5165\uFF1Aroot = [3,9,20,null,null,15,7]</li><li>\u8F93\u51FA\uFF1A2</li></ul><h2 id="\u9898\u89E3" tabindex="-1">\u9898\u89E3 <a class="header-anchor" href="#\u9898\u89E3" aria-hidden="true">#</a></h2><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * Definition for a binary tree node.</span></span>
<span class="line"><span style="color:#676E95;"> * function TreeNode(val, left, right) {</span></span>
<span class="line"><span style="color:#676E95;"> *     this.val = (val===undefined ? 0 : val)</span></span>
<span class="line"><span style="color:#676E95;"> *     this.left = (left===undefined ? null : left)</span></span>
<span class="line"><span style="color:#676E95;"> *     this.right = (right===undefined ? null : right)</span></span>
<span class="line"><span style="color:#676E95;"> * }</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">TreeNode</span><span style="color:#89DDFF;">}</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">root</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">return</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> minDepth </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">===null</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u5982\u679C\u65E0\u5DE6\u5B50\u6811\u5219\u6DF1\u5EA6\u7B49\u4E8E1+\u53F3\u5B50\u6811\u6DF1\u5EA6</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">===null</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">+</span><span style="color:#82AAFF;">minDepth</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">right</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u5982\u679C\u65E0\u53F3\u5B50\u6811\u5219\u6DF1\u5EA6\u7B49\u4E8E1+\u5DE6\u5B50\u6811\u6DF1\u5EA6</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">right</span><span style="color:#89DDFF;">===null</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">+</span><span style="color:#82AAFF;">minDepth</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">left</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u5982\u679C\u6709\u5DE6\u53F3\u5B50\u6811\uFF0C\u6DF1\u5EA6\u7B49\u4E8E1+\u5DE6\u53F3\u5B50\u6811\u5C0F\u503C</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">min</span><span style="color:#F07178;">(</span><span style="color:#82AAFF;">minDepth</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">left</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;">minDepth</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">right</span><span style="color:#F07178;">))</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div>`,5),t=[e];function r(c,y,F,i,D,C){return a(),n("div",null,t)}const d=s(o,[["render",r]]);export{h as __pageData,d as default};
